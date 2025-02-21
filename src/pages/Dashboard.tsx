import { Card } from "@/components/ui/card";
import {
  Battery,
  Droplets,
  Fish,
  Navigation as NavIcon,
  AlertTriangle,
  Waves,
  ThermometerSun,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Map from "@/components/Map";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for charts
const fuelData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  level: Math.round(80 - Math.random() * 20),
}));

const waterData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  temperature: Math.round(18 + Math.sin(i / 4) * 2),
  salinity: Math.round(35 + Math.cos(i / 4) * 1),
  oxygen: Math.round(8 + Math.sin(i / 6) * 1),
}));

const statCards = [
  {
    title: "Active Fish Trackers",
    value: "24",
    change: "+2",
    icon: Fish,
    color: "text-primary",
  },
  {
    title: "Fuel Level",
    value: "75%",
    change: "-5%",
    icon: Battery,
    color: "text-accent",
  },
  {
    title: "Water Temperature",
    value: "18°C",
    change: "+1°C",
    icon: Droplets,
    color: "text-blue-500",
  },
  {
    title: "Wind Speed",
    value: "12 knots",
    change: "-2 knots",
    icon: NavIcon,
    color: "text-gray-600",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="container mx-auto px-4 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Monitor your fishing operations in real-time
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <Card
              key={index}
              className="p-6 animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <span
                  className={`text-sm font-medium ${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-600">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Fish Tracking Map */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Fish Tracking Map
              </h2>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm text-gray-600">Active Trackers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-sm text-gray-600">Recent Activity</span>
                </div>
              </div>
            </div>
            <Map />
          </Card>

          {/* Activity Feed */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Fish className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      New fish movement detected
                    </p>
                    <p className="text-sm text-gray-500">
                      Location: 34°N 118°W
                    </p>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">
                    {index + 1}m ago
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Monitoring Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Fuel Monitoring */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Battery className="h-6 w-6 text-accent" />
                <h2 className="text-xl font-bold text-gray-900">
                  Fuel Monitoring
                </h2>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <span className="text-yellow-500">Low Fuel Warning at 25%</span>
              </div>
            </div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={fuelData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis unit="%" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="level"
                    stroke="#FF7F5C"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Water Analysis */}
          <Card className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Waves className="h-6 w-6 text-blue-500" />
              <h2 className="text-xl font-bold text-gray-900">
                Fishning Techniques
              </h2>
            </div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={waterData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#4A90A0"
                    strokeWidth={2}
                    name="Temperature (°C)"
                  />
                  <Line
                    type="monotone"
                    dataKey="salinity"
                    stroke="#FF7F5C"
                    strokeWidth={2}
                    name="Salinity (ppt)"
                  />
                  <Line
                    type="monotone"
                    dataKey="oxygen"
                    stroke="#1A2B3C"
                    strokeWidth={2}
                    name="Dissolved O₂ (mg/L)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <ThermometerSun className="h-5 w-5 mx-auto mb-1 text-primary" />
                <p className="text-sm text-gray-600">Temperature</p>
                <p className="font-bold">18.2°C</p>
              </div>
              <div className="text-center">
                <Droplets className="h-5 w-5 mx-auto mb-1 text-accent" />
                <p className="text-sm text-gray-600">Salinity</p>
                <p className="font-bold">35.1 ppt</p>
              </div>
              <div className="text-center">
                <Waves className="h-5 w-5 mx-auto mb-1 text-blue-500" />
                <p className="text-sm text-gray-600">Dissolved O₂</p>
                <p className="font-bold">8.2 mg/L</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
