import NotFound from '@modules/NotFound';
import Container from '@ui/Container';
import { NextPage } from 'next';
import Head from 'next/head';

const NotFoundPage:NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - 404</title>
      </Head>
      <Container>
        <NotFound />
      </Container>
    </>
  );
}

export default NotFoundPage;