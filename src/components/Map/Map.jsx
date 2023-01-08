import React, { useEffect, useRef } from 'react';

function MapView() {
  const mapRef = useRef();
  useEffect(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }, []);
  return <div ref={mapRef} style={{ width: 1000, height: 1000 }}></div>;
}

export default Map;