// import ListProperty from '@/components/use/property-list';
import ListProperty from '@/components/property-list';
import Wrapper from '@/layouts/Wrapper';

export const metadata = {
  title: 'property in Jabodetabek',
};

const index = () => {
  return (
    <Wrapper>
      <ListProperty />
    </Wrapper>
  );
};

export default index;
