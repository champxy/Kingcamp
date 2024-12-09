'use client';
import dynamic from 'next/dynamic';

// Dynamically import MapLandmark to disable SSR
const MapLandmark = dynamic(() => import('@/components/map/MapLandmark'), { ssr: false });

type MapLandmarkWrapperProps = {
  location: { lat: number; lon: number };
  height: string;
};


export default function MapLandmarkWrapper({ location, height }: MapLandmarkWrapperProps) {
    console.log('location', location)
    console.log(height)
  return <MapLandmark location={location} height={height} />;
}
