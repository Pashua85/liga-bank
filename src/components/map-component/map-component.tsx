import React, {FunctionComponent, useState, useEffect} from 'react';
import {GoogleMap, Marker, LoadScript} from '@react-google-maps/api';
import {Container} from './style';
import {ICity} from '../../data/cities';
import {useViewport} from '../../hooks/useViewport';
import locationIcon from '../../assets/location.svg';
import locationIconMobile from '../../assets/location-mobile.svg';

interface MapComponentProps {
  cities: ICity[]
}

type MapRef = null | google.maps.Map;

const MapComponent: FunctionComponent<MapComponentProps> = ({cities}) => {
  const [mapRef, setMapRef] = useState<MapRef>(null);
  const [center, setCenter] = useState({lat: 55.751244, lng: 37.618423});
  const [zoom, setZoom] = useState(6);

  const {width} = useViewport();
  let icon: string;
  if (width > 767) {
    icon = locationIcon;
  } else {
    icon = locationIconMobile;
  }


  useEffect(() => {
    if (mapRef !== null && cities.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      cities.forEach((city) => {
        bounds.extend(city.location);
      });
      mapRef.fitBounds(bounds);
    }
  }, [cities, mapRef]);

  const fitBounds = (map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds();
    cities.forEach((city) => {
      bounds.extend(city.location);
    });
    map.fitBounds(bounds);
  };

  const loadHandler = (map: google.maps.Map) => {
    setMapRef(map);
    if (cities.length > 0) {
      fitBounds(map);
    }
  };

  return (
    <Container>
      <LoadScript
        googleMapsApiKey="AIzaSyDS7cBkipmvMNfyT2xjIh2rb7jt61v7B_g"
      >
        <GoogleMap
          onLoad={loadHandler}
          center={center}
          zoom={zoom}
          mapContainerStyle={{
            height: `100%`,
            width: `100%`
          }}
        >
          {
            cities.map((city) => (
              <Marker
                key={city.cityName}
                position={city.location}
                icon={icon}
              />
            ))
          }
        </GoogleMap>
      </LoadScript>
    </Container>
  );
};

export default MapComponent;
