import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CostCalculator from "./pages/CostCalculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Get base path - detects if using custom domain or GitHub Pages subdomain
const getBasePath = () => {
  // In development, always use root
  if (import.meta.env.MODE === 'development') {
    return '/';
  }
  
  // In production, check the hostname
  const hostname = window.location.hostname;
  
  // If using custom domain (tscc.co.in), use root path
  if (hostname === 'tscc.co.in' || hostname === 'www.tscc.co.in') {
    return '/';
  }
  
  // If using GitHub Pages subdomain, use repository path
  if (hostname.includes('github.io')) {
    return '/tscc-constructive-portfolio-e69c9832/';
  }
  
  // Default to root for any other domain
  return '/';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getBasePath()}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/calculator" element={<CostCalculator />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
