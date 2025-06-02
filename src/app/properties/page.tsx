'use client';

import { useSearchParams } from 'next/navigation';

import ListProperty from '@/components/property-list';
import Wrapper from '@/layouts/Wrapper';

const Index = () => {
  const searchParams = useSearchParams();

  const keywordParams = searchParams.get('keyword') || undefined; // Default ke string kosong
  const locationParams = searchParams.get('location') || undefined; // Default ke string kosong
  const propertyTypeParams = searchParams.get('property_type') || undefined; // Default ke string kosong
  const propertyStatusParams = searchParams.get('property_status') || undefined; // Default ke string kosong

  return (
    <Wrapper>
      <ListProperty
        keyword={keywordParams}
        location={locationParams}
        propertyType={propertyTypeParams}
        propertyStatus={propertyStatusParams}
      />
    </Wrapper>
  );
};

export default Index;
