'use client';

import SearchArea from './SearchArea';
import ResultListArea from './ResultArea';
import DropdownFour from '@/components/examples/search-dropdown/inner-dropdown/DropdownFour';
import SearchAreaTwo from './SearchAreaNew';
import ListingSevenArea from './ResultAreaNew';

const ListBody = () => {
  return (
    <>
      {/* <SearchArea /> */}
      {/* <DropdownFour
        handlePriceDropChange={handlePriceDropChange}
        handleSearchChange={handleSearchChange}
        handleBedroomChange={handleBedroomChange}
        handleBathroomChange={handleBathroomChange}
        handlePriceChange={handlePriceChange}
        maxPrice={maxPrice}
        priceValue={priceValue}
        handleResetFilter={handleResetFilter}
        selectedAmenities={selectedAmenities}
        handleAmenityChange={handleAmenityChange}
        handleLocationChange={handleLocationChange}
        handleStatusChange={handleStatusChange}
      /> */}
      <SearchAreaTwo />
      <ResultListArea style={true} />
      {/* <ListingSevenArea style={true} /> */}
    </>
  );
};

export default ListBody;
