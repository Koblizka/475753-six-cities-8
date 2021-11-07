import 'leaflet/dist/leaflet.css';
import {Offer} from '../../types/offer';
import {UrlMarker} from '../../common/const';
import {useMap} from '../../hooks/use-map';
import {useSelector } from 'react-redux';
import {getActiveCity, getActiveOffer} from '../../store/processes/selectors';

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

type CityMapProps = {
  offers: Offer[];
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

function CityMap({offers}: CityMapProps): JSX.Element {
  const activeCity = useSelector(getActiveCity);
  const activeOffer = useSelector(getActiveOffer);


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
            activeOffer && offer.id === activeOffer.id
              ? customPin
              : defaultPin,
          );

        marker.addTo(markersLayer as LayerGroup);

      });

      markersLayer.addTo(map);
    }
  }, [map, offers, activeOffer, activeCity, markersLayer]);

  return (
    <div
      style={ {height: '100%'} }
      ref={mapRef}
    >
    </div>
  );
}

export default CityMap;
