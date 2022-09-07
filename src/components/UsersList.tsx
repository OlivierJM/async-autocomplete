import { ReactNode } from 'react';
import { UsersListProps } from '../types';


const UsersList = ({ users }: UsersListProps): ReactNode => {
  return (
    <ul>
      {users.map((username: string) => (
        <li>{username}</li>
      ))}
    </ul>
  );
};

export default UsersList;
