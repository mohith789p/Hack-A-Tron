import { useEffect, useState } from "react";
import axios from "axios";
import { Cloud, Droplet, Wind } from "lucide-react";

const API_KEY = "e9a1e5c83b9b4fc08e9182703252102";
const CITY = "Bhimavaram";

interface WeatherData {
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
}

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`
        );

        const data = response.data.current;
        setWeather({
          temp: data.temp_c,
          humidity: data.humidity,
          windSpeed: data.wind_kph / 3.6, // Convert km/h to m/s
          description: data.condition.text,
          icon: data.condition.icon,
        });

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading)
    return <p className="text-center text-white">Loading weather...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-6">
      {/* ✅ Glassmorphism Effect */}
      <div className="max-w-lg p-8 bg-white/80 backdrop-blur-md rounded-xl shadow-xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Weather in {CITY}
        </h2>
        <img
          src={weather?.icon}
          alt={weather?.description}
          className="mx-auto w-24 mb-4"
        />
        <p className="text-2xl font-semibold text-gray-900 mb-4">
          {weather?.description}
        </p>
        <div className="flex justify-center items-center space-x-8 mt-6">
          <div className="flex flex-col items-center space-y-2">
            <Cloud className="text-blue-500 w-8 h-8" />
            <p className="text-lg font-medium">{weather?.temp}°C</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Droplet className="text-blue-400 w-8 h-8" />
            <p className="text-lg font-medium">{weather?.humidity}%</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Wind className="text-gray-600 w-8 h-8" />
            <p className="text-lg font-medium">
              {weather?.windSpeed.toFixed(1)} m/s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
