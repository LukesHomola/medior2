'use client';
import { ReactElement } from 'react';
import UserCard from './components/UserCard';
import styles from './UserList.module.scss';

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface IProps {
  users: IUser[];
}

const UserList = ({ users }: IProps): ReactElement => {
  return (
    <div>
      <h2 className={styles.title}>Users</h2>
      <div className={styles.card}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
