import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in react-leaflet
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const FishTrack = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          setPosition([location.coords.latitude, location.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
          setPosition([12.8797, 80.2209]); // Default: Tamil Nadu coast
        }
      );
    } else {
      console.error("Geolocation is not supported");
      setPosition([12.8797, 80.2209]); // Default: Tamil Nadu coast
    }
  }, []);

  // Example fish-rich areas (latitude, longitude, density) in ocean
  const fishHotspots = [
    { lat: 12.9527, lng: 80.3507, density: 500 }, // Chennai Coast
    { lat: 7.9883, lng: 77.5385, density: 700 }, // Kanyakumari
    { lat: 9.2876, lng: 79.4127, density: 600 }, // Rameswaram (Corrected Coordinates)
    { lat: 11.0168, lng: 79.9975, density: 550 }, // Cuddalore
    { lat: 16.2876, lng: 81.9127, density: 600 }, // Rameswaram (Corrected Coordinates)
    { lat: 16.0168, lng: 81.5575, density: 550 }, // Cuddalore
  ];

  return (
    <div className="relative w-full h-[750px] rounded-lg overflow-hidden">
      {position ? (
        <MapContainer
          center={position}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
          className="z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <Marker position={position}>
            <Popup>Your Current Location 📍</Popup>
          </Marker>

          {fishHotspots.map((spot, index) => (
            <Circle
              key={index}
              center={[spot.lat, spot.lng]}
              radius={spot.density * 5} // Adjust size based on density
              color="red"
              fillColor="red"
              fillOpacity={0.6}
            />
          ))}
        </MapContainer>
      ) : (
        <p className="text-center text-gray-600">Fetching location...</p>
      )}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 z-10" />
    </div>
  );
};

export default FishTrack;
