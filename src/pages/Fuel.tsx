import React, { useState, useEffect } from "react";
import { Battery, Fuel } from "lucide-react";

const FuelMonitor = () => {
  const [fuelLevel, setFuelLevel] = useState(75); // Initial fuel level in percentage

  useEffect(() => {
    // Simulating real-time fuel level updates (Replace this with actual sensor data)
    const interval = setInterval(() => {
      setFuelLevel((prev) => (prev > 0 ? prev - Math.random() * 2 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getFuelStatus = () => {
    if (fuelLevel > 50) return "bg-green-500";
    if (fuelLevel > 30) return "bg-yellow-500";
    return "bg-red-500"; // Low fuel warning
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-6">
      {/* ✅ Glassmorphism Effect */}
      <div className="max-w-md w-full p-8 bg-white/80 backdrop-blur-md shadow-lg rounded-xl text-center">
        <h2 className="text-2xl font-semibold flex justify-center items-center space-x-2">
          <Fuel className="h-7 w-7 text-primary" />
          <span>Fuel Monitor</span>
        </h2>

        <div className="mt-6">
          <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${getFuelStatus()} transition-all duration-500`}
              style={{ width: `${fuelLevel}%` }}
            />
          </div>
          <p className="text-lg font-semibold mt-3">
            {fuelLevel.toFixed(1)}% Remaining
          </p>
        </div>

        {fuelLevel < 20 && (
          <p className="mt-4 text-red-600 font-bold text-lg">
            ⚠ Low Fuel! Refill soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default FuelMonitor;
