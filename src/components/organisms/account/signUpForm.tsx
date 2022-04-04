import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as zod from 'zod';

import { ActionButton } from '@/components/atoms/actionButton';
import { useController } from '@/components/functions/hook';
import { CustomError } from '@/domain/model/customError';
import { ErrorTitle } from '@/utils/union/errorTitle';

import type { VFC } from 'react';

type Props = {
  nextUrl: string;
};

const schema = zod
  .object({
    userID: zod.string().nonempty().email(),
    name: zod.string().nonempty(),
  })
  .required();
type Input = zod.infer<typeof schema>;

export const SignUpForm: VFC<Props> = ({ nextUrl }) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const usecase = useController().account.useCase;
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit: SubmitHandler<Input> = (data) => {
    const signUp = usecase.signUp(data.userID, data.name);

    setLoading(true);
    setErrorMessage('');
    signUp()
      .then(async () => {
        await router.push(`${nextUrl}?sendMail=&userID=${encodeURIComponent(data.userID)}`);
      })
      .catch((error: CustomError) => {
        if (error.title === ErrorTitle.EmailAlreadyExists) {
          // メールアドレスの存在を知らせるエラーメッセージはセキュリティ上よろしくない。。。
          setError('userID', {
            message: '既に登録されているメールアドレスです',
          });
        } else if (error.title === ErrorTitle.EntityAlreadyExists) {
          setError('name', { message: '既に登録されている名前です' });
        } else {
          setErrorMessage(error.getErrorMessage());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const hasError = [errors.userID, errors.name].some((v) => Boolean(v));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorMessage && (
        <Alert severity="error" onClose={() => setErrorMessage('')}>
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      )}
      <Controller
        control={control}
        name="userID"
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="メールアドレス"
            fullWidth
            margin="normal"
            placeholder="メールアドレス"
            autoComplete="username"
            error={Boolean(errors.userID)}
            helperText={errors.userID?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="name"
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="名前"
            fullWidth
            margin="normal"
            placeholder="名前"
            autoComplete="name"
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
        )}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          marginTop: 1,
        }}
      >
        <ActionButton type="submit" loading={loading} disabled={hasError}>
          Sign Up
        </ActionButton>
      </Box>
    </form>
  );
};
