import Wrapper from '@/layouts/Wrapper';
import Home from '@/layouts/homepage';

export const metadata = {
  title: 'PROPERTY | Find Your Perfect Property',
};

const index = async () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default index;
