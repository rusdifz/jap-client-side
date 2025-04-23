'use client';

const BannerAboutUsTop = () => {
  return (
    <div className="inner-banner-three inner-banner text-center z-1  mt-100">
      <div
        className="bg-wrapper overflow-hidden position-relative z-1"
        style={{
          backgroundImage: `url(/assets/images/banner/banner-image-5.jpg)`,
        }}
      >
        <div className="container position-relative z-2">
          <h2 className="mb-35 xl-mb-20 md-mb-10 pt-15 font-garamond text-white">
            ABOUT US
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BannerAboutUsTop;
