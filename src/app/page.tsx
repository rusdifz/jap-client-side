import Wrapper from '@/layouts/Wrapper';
import Home from '@/components/use/home';
import Header from '@/layouts/use/headers/Header';

// export const metadata = {
//   title: 'Home Three Homy - Real Estate React Next js Template',
// };

const index = () => {
  return (
    <Wrapper>
      <Header style_1={true} style_2={false} />
      <Home />
    </Wrapper>
  );
};

export default index;
