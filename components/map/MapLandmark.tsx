'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

// Custom Leaflet marker icon
const markerIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconSize: [20, 30],
});

type latLon = [number, number];
type MapLandmarkProps = {
  location?: { lat: number; lon: number };
  height: string;
};

const MapLandmark = ({ location, height }: MapLandmarkProps) => {
  const defaultLocation: latLon = [14, 101];
  const [position, setPosition] = useState<latLon | null>(null);
  return (
    <>
      <input type="hidden" name="lat" value={position ? position[0] : ''} />
      <input type="hidden" name="lng" value={position ? position[1] : ''} />
      <MapContainer
        className={`h-[50vh] lg:h-[${height}] rounded-lg z-0 relative`}
        center={location ? [location.lat, location.lon] : defaultLocation}
        zoom={10}
        scrollWheelZoom
      >
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location ? [location.lat, location.lon] : defaultLocation} icon={markerIcon}>
          <Popup>You are here</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapLandmark;
