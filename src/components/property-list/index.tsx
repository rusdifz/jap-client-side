'use client';

import ListBody from './ListBody';

type Props = {
  keyword: string | undefined;
  location: string | undefined;
  propertyType: string | undefined;
  propertyStatus: string | undefined;
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
