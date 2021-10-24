import 'leaflet/dist/leaflet.css';
import {Offer} from '../../types/offer';
import {UrlMarker} from '../../common/const';
import {useMap} from '../../hooks/use-map';
import {City} from '../../types/city';

import {
  useEffect,
  useRef,
  useState
} from 'react';
import {
  Icon,
  LayerGroup,
  Marker
} from 'leaflet';

type MapProps = {
  offers: Offer[];
  activeCity: City;
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

function Map({offers, activeCity, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [markersLayer] = useState<LayerGroup>(new LayerGroup());
  const map = useMap(mapRef, activeCity);

  useEffect(() => {
    if (map) {
      markersLayer.clearLayers();
      map.setView([activeCity.location.latitude, activeCity.location.longitude], activeCity.location.zoom);

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
          );

        marker.addTo(markersLayer as LayerGroup);

      });

      markersLayer.addTo(map);
    }
  }, [map, offers, selectedOffer, activeCity, markersLayer]);

  return (
    <div
      style={ {height: '100%'} }
      ref={mapRef}
    >
    </div>
  );
}

export {Map};
