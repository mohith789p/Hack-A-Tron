import { Link } from "react-router-dom";
import {
  Anchor,
  Map,
  Droplets,
  Battery,
  Navigation as NavIcon,
  MapIcon,
  FuelIcon,
  Fuel,
  Cloud,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const features = [
  {
    icon: Cloud,
    title: "Weather Forecasting",
    description: "Real-time Weather updates.",
  },
  {
    icon: Map,
    title: "Advanced Fish Tracking",
    description:
      "Fish nearby",
  },
  {
    icon: Anchor,
    title: "Smart Navigation",
    description:
      "Real-time GPS tracking and movement prediction for optimal fishing locations.",
  },
  {
    icon: Droplets,
    title: "Fishing Techniques",
    description:
      "Fishing manual to promote sustainable fishing practices before setting out to sea.",
  },
  {
    icon: Fuel,
    title: "Fuel Monitoring",
    description: "Track fuel consumption and receive low fuel alerts.",
  },
  {
    icon: NavIcon,
    title: "Safety Features",
    description:
      "Emergency SOS and real-time weather alerts for safer fishing.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Fishing with
              <span className="text-primary"> FishMate</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Advanced AI-powered fishing analysis and navigation system for
              modern fishermen.
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Powerful Features for Smart Fishing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="stat-card animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="feature-icon" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-panel rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to Transform Your Fishing Experience?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join FishMate today and discover the power of AI-driven fishing
              analytics.
            </p>
            <Link to="/dashboard" className="btn-primary">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
