'use client';

import { useParams } from 'next/navigation';
import PropertyDetail from '@/components/use/property-detail';
import Wrapper from '@/layouts/Wrapper';

const Index = () => {
  const params = useParams();
  const { slug } = params; // Menangkap id dari URL

  return <Wrapper>{/* <PropertyDetail slug={slug} /> */}</Wrapper>;
};

export default Index;
