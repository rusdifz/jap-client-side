import { LocationEnum, PropertyTypeEnum } from '@/libs/enums';
import NiceSelect from '@/ui/NiceSelect';

const DropdownHome = ({ style }: any) => {
  const selectHandler = (e: any) => {};

  const optionsProperty = Object.values(PropertyTypeEnum).map((prop) => {
    return { value: prop, text: prop };
  });

  const optionsLocation = Object.values(LocationEnum).map((prop) => {
    return { value: prop, text: prop };
  });

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // window.location.href = "/listing_0";
  };

  return (
    <form onSubmit={searchHandler}>
      <div className="row gx-0 align-items-center">
        <div className="col-xl-3 col-lg-4">
          <div className="input-box-one border-left">
            <div className="label">I’m looking to...</div>
            <NiceSelect
              className={`nice-select ${style ? 'fw-normal' : ''}`}
              options={optionsProperty}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div>
        </div>
        <div className={`${style ? 'col-xl-3' : 'col-xl-4'} col-lg-4`}>
          <div className="input-box-one border-left">
            <div className="label">Location</div>
            <NiceSelect
              className={`nice-select location ${style ? 'fw-normal' : ''}`}
              options={optionsLocation}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div>
        </div>
        <div className="col-xl-3 col-lg-4">
          {/* <div className="input-box-one border-left border-lg-0">
            <div className="label">Price Range</div>
            <NiceSelect
              className={`nice-select ${style ? 'fw-normal' : ''}`}
              options={[
                { value: '1', text: '$10,000 - $200,000' },
                { value: '2', text: '$20,000 - $300,000' },
                { value: '3', text: '$30,000 - $400,000' },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div> */}
        </div>
        <div className={`${style ? 'col-xl-3' : 'col-xl-2'}`}>
          <div className="input-box-one lg-mt-10">
            <button
              className={`fw-500 tran3s ${
                style
                  ? 'w-100 tran3s search-btn-three'
                  : 'text-uppercase search-btn'
              }`}
            >
              {style ? 'Search Now' : 'Search'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DropdownHome;
