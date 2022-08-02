import NotFound from '@modules/NotFound';
import Container from '@ui/Container';
import { NextPage } from 'next';

const NotFoundPage:NextPage = () => {
  return (
    <Container>
      <NotFound />
    </Container>
  );
}

export default NotFoundPage;