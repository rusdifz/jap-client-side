'use client';

import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
// import VideoPopup from '@/modals/VideoPopup';
// import Image from 'next/image';
// import videoImg from '@/assets/images/listing/img_47.jpg';

import { PropPropertyDetail } from '@/libs/type/property.type';

const MediaVideoYoutube: React.FC<PropPropertyDetail> = ({ property }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="property-video-tour mt-40">
      <h4 className="mb-40">Video Youtube</h4>
      <div className="bg-white shadow border-20 ">
        <div className="position-relative border-15 image-bg overflow-hidden z-1">
          {/* <Image src={videoImg} alt="" className="lazy-img w-100" />
          <a
            onClick={() => setIsVideoOpen(true)}
            style={{ cursor: 'pointer' }}
            className="video-icon tran3s rounded-circle d-flex align-items-center justify-content-center"
            data-fancybox
          >
            <i className="fa-thin fa-play"></i>
          </a> */}
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={
                property
                  ? 'https://www.youtube.com/watch?v=hrMkfNN0KjM&list=RDhrMkfNN0KjM&start_radio=1'
                  : 'https://www.youtube.com/watch?v=hrMkfNN0KjM&list=RDhrMkfNN0KjM&start_radio=1'
              }
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      </div>
      {/* video modal start */}
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'tUP5S4YdEJo'}
      /> */}
      {/* video modal end */}
    </div>
  );
};

export default MediaVideoYoutube;
