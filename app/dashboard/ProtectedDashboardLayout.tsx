'use server';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import DashboardLayout from './layout';
import { Session } from 'next-auth';
import { GetServerSideProps } from 'next';
interface PageProps {
  session: Session;
}

export default function PageWithLayout({ session }: PageProps) {
  return <DashboardLayout />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
