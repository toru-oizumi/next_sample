import type { VFC } from 'react';
import { useState } from 'react';

import { useRouter } from 'next/router';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { CustomError } from 'domain/model/customError';
import { ErrorTitle } from 'library/union/errorTitle';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { ActionButton } from 'components/atoms/actionButton';
import { PasswordField } from 'components/molecules/passwordField';
import { getCustomErrorMessage } from 'components/functions/error';
import { useController } from 'components/functions/hook';

type Props = {
  nextUrl: string;
};

const schema = zod
  .object({
    userID: zod.string().nonempty().email(),
    password: zod.string().nonempty(),
  })
  .required();
type Input = zod.infer<typeof schema>;

export const SignInForm: VFC<Props> = ({ nextUrl }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const usecase = useController().account.useCase;
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit: SubmitHandler<Input> = (data) => {
    setLoading(true);
    setErrorMessage('');
    usecase
      .signIn(data.userID, data.password)
      .then(async () => {
        await router.push(nextUrl);
      })
      .catch((error: CustomError) => {
        setValue('password', '');
        if (error.title === ErrorTitle.AuthenticationFailed) {
          setErrorMessage('メールアドレス、またはパスワードが間違っています');
        } else {
          setErrorMessage(getCustomErrorMessage(error));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const hasError = [errors.userID, errors.password].some((v) => Boolean(v));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorMessage && (
        <Alert severity='error' onClose={() => setErrorMessage('')}>
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      )}
      <Controller
        control={control}
        name='userID'
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            label='メールアドレス'
            fullWidth
            margin='normal'
            placeholder='メールアドレス'
            autoComplete='username'
            error={Boolean(errors.userID)}
            helperText={errors.userID?.message}
          />
        )}
      />
      <Controller
        control={control}
        name='password'
        defaultValue=''
        render={({ field }) => (
          <PasswordField
            {...field}
            label='パスワード'
            fullWidth
            margin='normal'
            placeholder='パスワード'
            autoComplete='current-password'
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
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
        <ActionButton type='submit' loading={loading} disabled={hasError}>
          Sign in
        </ActionButton>
      </Box>
    </form>
  );
};
