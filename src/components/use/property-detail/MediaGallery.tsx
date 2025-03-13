// import Image, { StaticImageData } from 'next/image';
// import Fancybox from '@/components/examples/common/Fancybox';

// import bigCarousel_1 from '@/assets/images/listing/img_43.jpg';
// import bigCarousel_2 from '@/assets/images/listing/img_44.jpg';
// import bigCarousel_3 from '@/assets/images/listing/img_45.jpg';
// import bigCarousel_4 from '@/assets/images/listing/img_46.jpg';

// import smallCarousel_1 from '@/assets/images/listing/img_43_s.jpg';
// import smallCarousel_2 from '@/assets/images/listing/img_44_s.jpg';
// import smallCarousel_3 from '@/assets/images/listing/img_45_s.jpg';
// import smallCarousel_4 from '@/assets/images/listing/img_46_s.jpg';
import { PropPropertyDetail } from '@/libs/type/property.type';
import { pascalToKebab } from '@/libs/helper';

// const largeThumb: string[] = ['1', '2', '3'];

// interface DataType {
//   big_carousel: StaticImageData[];
//   small_carousel: StaticImageData[];
// }

// const gallery_data: DataType = {
//   big_carousel: [bigCarousel_1, bigCarousel_2, bigCarousel_3],
//   small_carousel: [smallCarousel_1, smallCarousel_2, smallCarousel_3],
// };

// const { big_carousel, small_carousel } = gallery_data;

// const MediaGallery: React.FC<PropPropertyDetail> = ({
//   property,
//   style,
// }: any) => {
//   return (
//     <div className="media-gallery mt-20 xl-mt-40 lg-mt-40">
//       <div id="media_slider" className="carousel slide row">
//         <div className="col-lg-10">
//           <div
//             className={` bg-white border-20 md-mb-20 ${
//               style ? '' : 'shadow4 p-30'
//             }`}
//           >
//             <div className="position-relative z-1 overflow-hidden border-20">
//               <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark"></div>

//               <div className="carousel-inner">
//                 {big_carousel.map((carousel, index) => (
//                   <div key={index} className="carousel-item active">
//                     <Image
//                       src={`/assets/images/property-location/${pascalToKebab(
//                         property.location,
//                       )}/${property.slug}/${index + 1}.png`}
//                       alt=""
//                       className="w-80 border-20"
//                       width={100}
//                       height={100}
//                     />
//                   </div>
//                 ))}
//               </div>
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#media_slider"
//                 data-bs-slide="prev"
//               >
//                 <i className="bi bi-chevron-left"></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#media_slider"
//                 data-bs-slide="next"
//               >
//                 <i className="bi bi-chevron-right"></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-2">
//           <div
//             className={`carousel-indicators position-relative p-15 w-100 h-100 ${
//               style ? '' : 'border-15 bg-white shadow4'
//             }`}
//           >
//             {small_carousel.map((carousel, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 data-bs-target="#media_slider"
//                 data-bs-slide-to={`${index}`}
//                 className="active"
//                 aria-current="true"
//                 aria-label="Slide 1"
//               >
// <Image
//   // src={carousel}
//   src={`/assets/images/property-location/${pascalToKebab(
//     property.location,
//   )}/${property.slug}/${index + 1}.png`}
//   alt=""
//   className="w-100 border-10"
//   width={500}
//   height={500}
// />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;

// ('use client');
import Image, { StaticImageData } from 'next/image';
import Slider from 'react-slick';
import { useRef } from 'react';

import galleryThumb_1 from '@/assets/images/listing/img_57.jpg';
import galleryThumb_2 from '@/assets/images/listing/img_58.jpg';
import galleryThumb_3 from '@/assets/images/listing/img_59.jpg';
import galleryThumb_4 from '@/assets/images/listing/img_60.jpg';

import gallery1 from '@/assets/images/property-location/thamrin/menara-cakrawala/1.png';
import gallery2 from '@/assets/images/property-location/thamrin/menara-cakrawala/2.png';
import gallery3 from '@/assets/images/property-location/thamrin/menara-cakrawala/3.png';
import gallery4 from '@/assets/images/property-location/thamrin/menara-cakrawala/4.png';

const gallery_data: StaticImageData[] = [
  galleryThumb_1,
  galleryThumb_2,
  galleryThumb_3,
  galleryThumb_4,
];
// const gallery_data: StaticImageData[] = [
//   gallery1,
//   gallery2,
//   gallery3,
//   gallery4,
// ];

const setting = {
  dots: false,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
};

const MediaGallery: React.FC<PropPropertyDetail> = ({ property, style }) => {
  const sliderRef = useRef<Slider | null>(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="media-gallery position-relative mt-10 mb-50 xl-mt-80 lg-mt-60">
      {/* // <div className="hero-banner-three position-relative z-1 pt-50 lg-pt-50 pb-170 xl-pb-50 lg-pb-50"> */}
      <Slider {...setting} ref={sliderRef} className="media-slider-two">
        {gallery_data.map((gallery, i) => (
          <div key={i} className="item">
            <Image src={gallery} alt="" className="w-60" />
            {/* <Image
              // src={carousel}
              src={`/assets/images/property-location/${pascalToKebab(
                property.location,
              )}/${property.slug}/${+1}.png`}
              alt=""
              className="w-70 h-100"
              width={500}
              height={100}
            /> */}
          </div>
        ))}
      </Slider>
      <ul className="slider-arrows d-flex justify-content-between style-none">
        <li onClick={handlePrevClick} className="prev_c slick-arrow">
          <i className="bi bi-arrow-left"></i>
        </li>
        <li onClick={handleNextClick} className="next_c slick-arrow">
          <i className="bi bi-arrow-right"></i>
        </li>
      </ul>
    </div>
  );
};

export default MediaGallery;

{
  /* <div className="carousel-inner">
  {big_carousel.map((carousel, index) => (
    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
      <div className="image-container">
        <Image
          src={`/assets/images/property-location/${pascalToKebab(
            property.location,
          )}/${property.slug}/${index + 1}.png`}
          alt=""
          fill
          className="image"
        />
      </div>
    </div>
  ))}
</div>; */
}
