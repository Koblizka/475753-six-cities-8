import 'leaflet/dist/leaflet.css';
import {Offer} from '../../types/offer';
import {UrlMarker} from '../../common/const';
import {useMap} from '../../hooks/use-map';
import {City} from '../../types/city';

import {
  useEffect,
  useRef
} from 'react';
import {
  Icon,
  Marker
} from 'leaflet';

type MapProps = {
  offers: Offer[];
  city: City;
  selectedOffer: Offer | null;
}

const defaultPin = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [28, 40],
  iconAnchor: [12, 40],
});

const customPin = new Icon({
  iconUrl: UrlMarker.Custom,
  iconSize: [28, 40],
  iconAnchor: [12, 40],
});

function Map({offers, city, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== null && offer.title === selectedOffer.title
              ? customPin
              : defaultPin,
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <div
      style={ {height: '100%'} }
      ref={mapRef}
    >
    </div>
  );
}

export {Map};
