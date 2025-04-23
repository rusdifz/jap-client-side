'use client';
import { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';
import Image from 'next/image';
import videoImg from '@/assets/images/listing/img_47.jpg';

import ReactPlayer from 'react-player/lazy';

const CommonPropertyVideoTour = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <h4 className="mb-40">Video Tour</h4>
      {/* <div className="bg-white shadow4 border-20" style={{ padding: '200px' }}> */}
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
              url="https://www.youtube.com/watch?v=hrMkfNN0KjM&list=RDhrMkfNN0KjM&start_radio=1"
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
    </>
  );
};

export default CommonPropertyVideoTour;
