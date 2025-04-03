import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import {
  Anchor,
  Map,
  Droplets,
  Fuel,
  Cloud,
  Navigation as NavIcon,
} from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Weather Forecasting",
    description: "Real-time Weather updates.",
    link: "/weather",
  },
  {
    icon: Map,
    title: "Advanced Fish Tracking",
    description: "Tracking Fish nearby",
    link: "/map",
  },
  {
    icon: Anchor,
    title: "Smart Navigation",
    description: "Real-time GPS tracking and movement prediction.",
    link: "/connector",
  },
  {
    icon: Droplets,
    title: "Fishing Techniques",
    description: "Sustainable fishing practices.",
    link: "/techniques",
  },
  {
    icon: Fuel,
    title: "Fuel Monitoring",
    description: "Track fuel consumption and receive low fuel alerts.",
    link: "/analysis",
  },
  {
    icon: NavIcon,
    title: "Safety Features",
    description: "Emergency SOS and real-time weather alerts.",
    link: "/safety",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 relative overflow-hidden bg-gray/75">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Fishing with{" "}
            <span className="text-white bg-clip-text">AquaHub</span>
          </h1>

          <p className="text-xl text-primary-300 mb-8 max-w-2xl mx-auto">
            Fishing analysis and navigation system for modern fishermen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard" className="btn-primary">
              Get Started
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Powerful Features for Smart Fishing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Link
                to={feature.link}
                key={index}
                className="stat-card animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="feature-icon" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
