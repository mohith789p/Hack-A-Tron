import Navigation from "@/components/Navigation";
import { Fish, Globe, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-primary">FishMate</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FishMate fishing analysis and navigation system designed to help
            modern fishermen track fish movements, predict hotspots, and
            optimize fuel usage for a smarter fishing experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose FishMate?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
    </div>
  );
};

const features = [
  {
    icon: Fish,
    title: "AI-Powered Fish Tracking",
    description: "Track fish movements and predict the best fishing spots.",
  },
  {
    icon: Globe,
    title: "Real-Time Navigation",
    description: "Get precise GPS tracking and smart route suggestions.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with other fishermen and share insights.",
  },
  {
    icon: Lightbulb,
    title: "Eco-Friendly Approach",
    description: "Sustainable fishing techniques for a better future.",
  },
];

export default About;
