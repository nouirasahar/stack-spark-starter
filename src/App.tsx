
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Templates from "./pages/Templates";
import Resources from "./pages/Resources";
import Deployment from "./pages/Deployment";
import Dashboard from "./pages/Dashboard";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Toaster />
        <Sonner position="top-right" closeButton theme="light" richColors />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/deployment" element={<Deployment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
