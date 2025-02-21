import { useEffect, useState } from "react";
import axios from "axios";
import { Cloud, Droplet, Wind } from "lucide-react";

const API_KEY = "e9a1e5c83b9b4fc08e9182703252102"; // Use environment variables
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
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`
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

  if (loading) return <p className="text-center">Loading weather...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Weather in {CITY}
      </h2>
      <img
        src={weather?.icon}
        alt={weather?.description}
        className="mx-auto w-20"
      />
      <p className="text-xl font-semibold text-gray-900">
        {weather?.description}
      </p>
      <div className="flex justify-center items-center space-x-6 mt-4">
        <div className="flex flex-col items-center">
          <Cloud className="text-blue-500 w-6 h-6" />
          <p className="text-lg font-medium">{weather?.temp}°C</p>
        </div>
        <div className="flex flex-col items-center">
          <Droplet className="text-blue-400 w-6 h-6" />
          <p className="text-lg font-medium">{weather?.humidity}%</p>
        </div>
        <div className="flex flex-col items-center">
          <Wind className="text-gray-600 w-6 h-6" />
          <p className="text-lg font-medium">
            {weather?.windSpeed.toFixed(1)} m/s
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
