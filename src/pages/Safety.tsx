import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "antd";
import {
  Shield,
  CloudLightning,
  MapPin,
  AlertTriangle,
  Lock,
} from "lucide-react";

const SafetyFeatures = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="pt-20 lg:pt-32 pb-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Safety <span className="text-primary">Features</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensuring your safety with advanced features like emergency SOS,
            weather alerts, and more.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Safety Matters?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 text-center"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center mt-10">
        <Button
          type="primary"
          onClick={() => navigate("/home")}
          className="h-12 text-lg px-10"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Shield,
    title: "Emergency SOS",
    description: "Quickly reach emergency contacts in critical situations.",
  },
  {
    icon: CloudLightning,
    title: "Real-Time Weather Alerts",
    description: "Stay informed about weather conditions in your area.",
  },
  {
    icon: MapPin,
    title: "Live Location Sharing",
    description: "Share your location with trusted contacts for safety.",
  },
  {
    icon: AlertTriangle,
    title: "Automatic Distress Signals",
    description: "Detects unusual activity and sends alerts automatically.",
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "OTP-based login for enhanced security and protection.",
  },
];

export default SafetyFeatures;
