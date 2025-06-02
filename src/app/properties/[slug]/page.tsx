import PropertyDetail from '@/layouts/property-detail';
import Wrapper from '@/layouts/Wrapper';

export const metadata = {
  title: 'JAP Property',
  content: 'workspace jabodetabek',
};
interface PageProps {
  params: {
    slug: string;
  };
}

const Index = ({ params }: PageProps) => {
  const { slug } = params; // Menangkap id dari URL
  return (
    <Wrapper>
      <PropertyDetail slug={slug} />
    </Wrapper>
  );
};

export default Index;
