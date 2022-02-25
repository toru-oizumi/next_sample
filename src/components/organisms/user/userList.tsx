import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useState, useEffect, useCallback } from 'react';

import { SingleSelect } from 'components/atoms/singleSelect';
import { getCustomErrorMessage } from 'components/functions/error';
import { useController } from 'components/functions/hook';
import { LoadingBackdrop } from 'components/molecules/loadingBackdrop';
import { CustomError } from 'domain/model/customError';
import { User } from 'domain/model/user';

import type { VFC } from 'react';

let users: User[] = [];

export const UserList: VFC = () => {
  const usecase = useController().user.useCase;

  const [userID, setUserID] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateUserID = (value: string) => {
    setUserID(value);
  };

  const findAllUser = useCallback(() => {
    setLoading(true);
    setErrorMessage('');
    usecase
      .findAll()
      .then((data) => {
        users = data;
      })
      .catch((error: CustomError) => {
        setErrorMessage(getCustomErrorMessage(error));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [usecase]);

  useEffect(() => {
    findAllUser();
  }, [findAllUser]);

  return (
    <LoadingBackdrop open={loading}>
      {errorMessage ? (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      ) : (
        <SingleSelect
          id='userSelect'
          minWidth={200}
          label='ユーザーリスト'
          items={users.map((v) => ({ name: v.name, value: v.id }))}
          value={userID}
          onChange={updateUserID}
        />
      )}
    </LoadingBackdrop>
  );
};
