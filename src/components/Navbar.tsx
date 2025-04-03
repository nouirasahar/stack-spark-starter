
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, BookOpen, FileText } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="py-4 px-6 w-full glass sticky top-0 z-50 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-all">
          <div className="p-2 rounded-full bg-gradient-to-r from-primary to-accent text-white">
            <Rocket className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold text-gradient tracking-tight">DevStart</span>
        </Link>
        
        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/resources">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Call to Action */}
        <div className="flex items-center gap-4">
          <Link to="/get-started">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-md">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
