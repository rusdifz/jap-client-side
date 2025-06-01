'use client';

import ListBody from './ListBody';

type Props = {
  keyword: string;
  location: string;
  propertyType: string;
  propertyStatus: string;
};

const ListProperty: React.FC<Props> = ({
  keyword,
  location,
  propertyType,
  propertyStatus,
}) => {
  return (
    <>
      <ListBody
        keywordParams={keyword}
        locationParams={location}
        propertyTypeParams={propertyType}
        propertyStatusParams={propertyStatus}
      />
    </>
  );
};

export default ListProperty;
