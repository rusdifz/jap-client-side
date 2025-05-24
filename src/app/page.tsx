import Wrapper from '@/layouts/Wrapper';
import Home from '@/layouts/homepage';

export const metadata = {
  title: 'professional property consultant',
  description: 'professional property consultant',
};

const index = async () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default index;
