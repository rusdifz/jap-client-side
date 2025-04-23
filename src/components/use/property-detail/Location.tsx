import { PropPropertyDetail } from '@/libs/type/property.type';

const Location: React.FC<PropPropertyDetail> = ({ property }) => {
  const loc = property.koordinat_map
    ? `https://maps.google.com/maps?hl=en&q=${property.koordinat_map}&t=&z=12&ie=UTF8&iwloc=B&output=embed`
    : 'https://maps.google.com/maps?hl=en&q=QRPC+48 Karet Kuningan, South Jakarta City, Jakarta&t=&z=12&ie=UTF8&iwloc=B&output=embed';

  return (
    <div className="property-location mb-50 mt-50 bg-white shadow border-20 p-40">
      <h5 className="pb-20 mb-30 border-bottom">Location</h5>
      <div className="bg-white shadow4 border-20 border-top ">
        <div className="map-banner overflow-hidden border-15">
          <div className="gmap_canvas h-100 w-100 flex auto">
            <iframe
              src={loc}
              width="100%"
              height="120"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-100 h-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
