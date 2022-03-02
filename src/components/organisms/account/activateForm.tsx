import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as zod from 'zod';

import { ActionButton } from 'components/atoms/actionButton';
import { useController } from 'components/functions/hook';
import { PasswordField } from 'components/molecules/passwordField';
import { CustomError } from 'domain/model/customError';
import { ErrorTitle } from 'library/union/errorTitle';

import type { VFC } from 'react';

type Props = {
  nextUrl: string;
};

const schema = zod
  .object({
    userID: zod.string().nonempty().email(),
    currentPassword: zod.string().nonempty(),
    newPassword: zod.string().nonempty(),
  })
  .required()
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: 'Current Password and new Password are same.',
    path: ['newPassword'],
  });
type Input = zod.infer<typeof schema>;

export const ActivateForm: VFC<Props> = ({ nextUrl }) => {
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
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [infoMessage, setInfoMessage] = useState('');

  useEffect(() => {
    const { sendMail, userID } = router.query;
    if (userID != null) {
      if (Array.isArray(userID)) {
        setValue('userID', userID[0]);
      } else {
        setValue('userID', userID);
      }
    }
    if (sendMail != null) {
      setInfoMessage(
        'メールを送信しました。メールに記載されている仮パスワードを入力と新しいパスワードを入力してください',
      );
    }
  }, [router.query, setValue]);

  const onSubmit: SubmitHandler<Input> = (data) => {
    const activate = usecase.activate(
      data.userID,
      data.currentPassword,
      data.newPassword,
    );

    setLoading(true);
    setErrorMessage('');
    activate()
      .then(async () => {
        await router.push(nextUrl);
      })
      .catch((error: CustomError) => {
        if (error.title === ErrorTitle.AuthenticationFailed) {
          setErrorMessage('メールアドレス、またはパスワードが間違っています');
        } else if (error.title === ErrorTitle.ActivationRequired) {
          setErrorMessage('パスワード変更を行なってください');
        } else {
          setErrorMessage(error.getErrorMessage());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const hasError = [
    errors.userID,
    errors.currentPassword,
    errors.newPassword,
  ].some((v) => Boolean(v));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {infoMessage && (
        <Alert severity='info' onClose={() => setInfoMessage('')}>
          <AlertTitle>Info</AlertTitle>
          {infoMessage}
        </Alert>
      )}
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
        name='currentPassword'
        defaultValue=''
        render={({ field }) => (
          <PasswordField
            {...field}
            label='仮パスワード'
            fullWidth
            margin='normal'
            placeholder='仮パスワード'
            autoComplete='current-password'
            error={Boolean(errors.currentPassword)}
            helperText={errors.currentPassword?.message}
          />
        )}
      />
      <Controller
        control={control}
        name='newPassword'
        defaultValue=''
        render={({ field }) => (
          <PasswordField
            {...field}
            label='新しいパスワード'
            fullWidth
            margin='normal'
            placeholder='新しいパスワード'
            autoComplete='new-password'
            error={Boolean(errors.newPassword)}
            helperText={errors.newPassword?.message}
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
          Activate
        </ActionButton>
      </Box>
    </form>
  );
};
