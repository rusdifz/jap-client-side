import BlogDetails from '@/layouts/article-detail';
import Wrapper from '@/layouts/Wrapper';

export const metadata = {
  title: 'Blog Details Homy - Real Estate React Next js Template',
};

interface PageProps {
  params: {
    id: string;
  };
}

const index = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <Wrapper>
      <BlogDetails id={params.id} />
    </Wrapper>
  );
};

export default index;
