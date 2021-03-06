import 'leaflet/dist/leaflet.css';
import {Offer} from '../../types/offer';
import {UrlMarker} from '../../common/const';
import {useMap} from '../../hooks/use-map';
import {useSelector } from 'react-redux';
import {getActiveCity} from '../../store/processes/selectors';

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
  activeOffer: Offer;
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

function CityMap({offers, activeOffer}: CityMapProps): JSX.Element {
  const NORMAL_CITY_ZOOM = 12;
  const activeCity = useSelector(getActiveCity);

  const mapRef = useRef<HTMLDivElement | null>(null);
  const [markersLayer] = useState<LayerGroup>(new LayerGroup());
  const map = useMap(mapRef, activeCity);

  useEffect(() => {
    if (map) {
      markersLayer.clearLayers();
      map.setView([activeCity.location.latitude, activeCity.location.longitude], NORMAL_CITY_ZOOM);

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
      data-testid='city-map'
    >
    </div>
  );
}

export default CityMap;
