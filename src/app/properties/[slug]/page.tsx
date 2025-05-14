import PropertyDetail from '@/layouts/property-detail';
import Wrapper from '@/layouts/Wrapper';

export const metadata = {
  title: 'JAP Property',
};
interface PageProps {
  params: {
    slug: string;
  };
}

const Index = ({ params }: PageProps) => {
  // const params = useParams();
  // const { slug } = params; // Menangkap id dari URL
  const { slug } = params;
  return (
    <Wrapper>
      <PropertyDetail slug={slug} />
    </Wrapper>
  );
};

export default Index;
