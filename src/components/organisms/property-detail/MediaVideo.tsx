'use client';

import ReactPlayer from 'react-player/lazy';

import { PropPropertyDetail } from '@/libs/type/property.type';

const MediaVideoYoutube: React.FC<PropPropertyDetail> = ({ property }) => {
  //property.url_youtube
  return (
    <div className="property-video-tour mt-40">
      <h4 className="mb-40">Video Youtube</h4>
      <div className="bg-white shadow border-20 ">
        <div className="position-relative border-15 image-bg overflow-hidden z-1">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={property.url_youtube}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaVideoYoutube;
