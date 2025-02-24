import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icons
const blueIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const redIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const liveIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const Connector: React.FC = () => {
  const orsApiKey = "5b3ce3597851110001cf62486a5cb946c8a344dab87c7f125242af95"; // Replace with your ORS API Key
  const start: [number, number] = [16.5449, 81.5212]; // Bhimavaram (lat, lng)
  const end: [number, number] = [17.0052, 81.7786]; // Rajahmundry (lat, lng)

  const [decodedPath, setDecodedPath] = useState<[number, number][]>([]);
  const [liveLocation, setLiveLocation] = useState<[number, number]>(start); // Mock live location

  useEffect(() => {
    const fetchPolyline = async () => {
      try {
        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${orsApiKey}&start=${start[1]},${start[0]}&end=${end[1]},${end[0]}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.features && data.features.length > 0) {
          const coordinates = data.features[0].geometry.coordinates;
          const path = coordinates.map(([lng, lat]: [number, number]) => [
            lat,
            lng,
          ]); // Reverse coordinates
          setDecodedPath(path);
        }
      } catch (error) {
        console.error("Error fetching polyline:", error);
      }
    };

    fetchPolyline();
  }, []);

  // Simulating live location movement
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveLocation((prevLocation) => {
        const nextIndex = decodedPath.findIndex(
          (coord) =>
            coord[0] === prevLocation[0] && coord[1] === prevLocation[1]
        );
        return decodedPath[nextIndex + 1] || prevLocation; // Move to the next point
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [decodedPath]);

  return (
    <MapContainer
      center={start}
      zoom={10}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Start Location Marker */}
      <Marker position={start} icon={blueIcon}>
        <Popup>Bhimavaram (Start)</Popup>
      </Marker>

      {/* Destination Marker */}
      <Marker position={end} icon={redIcon}>
        <Popup>Rajahmundry (Destination)</Popup>
      </Marker>

      {/* Route Polyline */}
      {decodedPath.length > 0 && (
        <Polyline positions={decodedPath} color="blue" weight={6} />
      )}

      {/* Live Location Marker */}
      <Marker position={liveLocation} icon={liveIcon}>
        <Popup>Live Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Connector;
