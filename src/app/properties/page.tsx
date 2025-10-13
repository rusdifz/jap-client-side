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
  
  console.log('[CSR] Keyword Params:', searchParams.get('keyword'));
  console.log('[CSR] Location Params:', searchParams.get('location'));
  console.log('[CSR] Property Type Params:', searchParams.get('property_type'));
  console.log('[CSR] Property Status Params:', searchParams.get('property_status'));

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
