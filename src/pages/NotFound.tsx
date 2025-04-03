
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-6 text-center relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-400/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-8">
          <div className="p-6 rounded-full bg-amber-100 inline-block animate-pulse-slow">
            <AlertTriangle className="h-16 w-16 text-amber-500" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-gradient">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
        
        <p className="text-gray-600 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/">
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-md">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </Link>
        
        <div className="mt-12 glass rounded-xl p-6 border border-white/30 max-w-md mx-auto">
          <h3 className="font-bold mb-2">Looking for something else?</h3>
          <p className="text-gray-600 mb-4">
            Check out these popular destinations:
          </p>
          <div className="space-y-2">
            <Link to="/resources" className="block hover:text-primary transition-colors">
              Developer Resources
            </Link>
            <Link to="/get-started" className="block hover:text-primary transition-colors">
              Create New Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
