import { ReactElement } from 'react';
import Home from '@/components/Home/Home';
import publicRuntimeConfig from '@/utils/config';
const { usersUrl } = publicRuntimeConfig;

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

async function getUsers(): Promise<IUser[]> {
  const res = await fetch(usersUrl, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Faled to fetch users');
  }

  return res.json();
}

const Page = async (): Promise<ReactElement> => {
  const users = await getUsers();

  return (
    <div>
      <Home users={users} />
    </div>
  );
};

export default Page;
