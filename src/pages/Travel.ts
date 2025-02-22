// import React, { useEffect, useState } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Polyline,
//   useMap,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Fix for missing Leaflet marker icons
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

// // Custom User & Destination Icons
// const userIcon = L.icon({
//   iconUrl: "/user-icon.png", // Ensure it's inside /public
//   iconSize: [30, 30],
// });

// const destinationIcon = L.icon({
//   iconUrl: "/destination-icon.png", // Ensure it's inside /public
//   iconSize: [30, 30],
// });

// // Component to track & update the user's location on the map
// const LocationUpdater = ({ position }: { position: [number, number] }) => {
//   const map = useMap();
//   useEffect(() => {
//     map.setView(position, 15); // Adjust zoom level when user moves
//   }, [position, map]);
//   return null;
// };

// const Travel: React.FC = () => {
//   const [currentLocation, setCurrentLocation] = useState<
//     [number, number] | null
//   >(null);
//   const destination: [number, number] = [17.6868, 83.2185]; // Example destination (Visakhapatnam)

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       console.error("Geolocation is not supported by this browser.");
//       return;
//     }

//     // Watch user's live location updates
//     const watchId = navigator.geolocation.watchPosition(
//       (position) => {
//         setCurrentLocation([
//           position.coords.latitude,
//           position.coords.longitude,
//         ]);
//       },
//       (error) => console.error("Error fetching location:", error),
//       { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
//     );

//     return () => navigator.geolocation.clearWatch(watchId); // Cleanup when component unmounts
//   }, []);

//   return (
//     <div style={{ height: "100vh", width: "100vw" }}>
//       {currentLocation ? (
//         <MapContainer
//           center={currentLocation}
//           zoom={15}
//           style={{ height: "100%", width: "100%" }}
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//           {/* Keep map centered on user's location */}
//           <LocationUpdater position={currentLocation} />

//           {/* User Marker */}
//           <Marker position={currentLocation} icon={userIcon} />

//           {/* Destination Marker */}
//           <Marker position={destination} icon={destinationIcon} />

//           {/* Route Line */}
//           <Polyline
//             positions={[currentLocation, destination]}
//             color="blue"
//             weight={4}
//           />
//         </MapContainer>
//       ) : (
//         <p>Fetching location...</p>
//       )}
//     </div>
//   );
// };

// export default Travel;
