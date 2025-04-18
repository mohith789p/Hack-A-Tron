import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./pages/Layout"; // ✅ Import Layout
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import MapComponent from "./pages/Map";
import FuelMonitor from "./pages/Fuel";
import NotFound from "./pages/NotFound";
import Weather from "./pages/weather";
import FishingTechniques from "./pages/FishningTechniques";
import Login from "./pages/Login";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SafetyFeatures from "./pages/Safety";
import Connector from "./pages/connector";
// import Travel from "./pages/Travel";

const queryClient = new QueryClient();

const encodedPolyline =
  "mfpwF`n`uMo@~AaFvJ_C`EgCzDiDbHiG`N}AnDsC`JwKrb@aEpKsIhSyChGuAdEmHtR}CpJuC`L";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Login Page (No Layout) */}
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes (With Layout) */}
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/map" element={<MapComponent />} />
            <Route path="/analysis" element={<FuelMonitor />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/techniques" element={<FishingTechniques />} />
            <Route path="/home" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/safety" element={<SafetyFeatures />} />
            <Route path="/connector" element={<Connector />} />
          </Route>

          {/* 404 Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
