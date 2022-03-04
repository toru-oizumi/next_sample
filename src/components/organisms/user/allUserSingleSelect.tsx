import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useState } from 'react';

import { SingleSelect } from 'components/atoms/singleSelect';
import { useController, useFetchData } from 'components/functions/hook';
import { LoadingBackdrop } from 'components/molecules/loadingBackdrop';
import { User } from 'domain/model/user';

import type { VFC } from 'react';

export const AllUserSingleSelect: VFC = () => {
  const usecase = useController().user.useCase;
  const [userID, setUserID] = useState('');

  const updateUserID = (value: string) => {
    setUserID(value);
  };

  const { data, error } = useFetchData<User[]>(
    'allUserSingleSelect',
    usecase.findAll(),
  );

  return (
    <LoadingBackdrop open={!data}>
      {error && (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
      )}
      {data && (
        <SingleSelect
          id='userSelect'
          minWidth={200}
          label='ユーザーリスト'
          items={data.map((v) => ({ name: v.name, value: v.id }))}
          value={userID}
          onChange={updateUserID}
        />
      )}
    </LoadingBackdrop>
  );
};
