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
import Map from "@/pages/Map";
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

const fishingTechniques = [
  "Trawling",
  "Longlining",
  "Purse Seining",
  "Gillnetting",
  "Pole and Line",
  "Drift Netting",
  "Spearfishing",
];

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
    title: "Wind Speed",
    value: "12 knots",
    change: "-2 knots",
    icon: NavIcon,
    color: "text-gray-600",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />

      <main className="container mx-auto px-4 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-400">Dashboard</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

        {/* Fishing Techniques */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Fishing Techniques
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {fishingTechniques.map((technique, index) => (
              <li key={index} className="text-lg font-medium">
                {technique}
              </li>
            ))}
          </ul>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
