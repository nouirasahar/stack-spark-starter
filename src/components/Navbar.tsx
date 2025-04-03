
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, BookOpen, Github, Coffee } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
              <NavigationMenuTrigger className="bg-transparent">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <ListItem title="Project Generator" href="/" Icon={Rocket}>
                    Generate complete projects in seconds
                  </ListItem>
                  <ListItem title="Templates" href="/templates" Icon={BookOpen}>
                    Pre-configured templates for quick starts
                  </ListItem>
                  <ListItem title="Deployment" href="/deployment" Icon={Github}>
                    Deploy your projects with one click
                  </ListItem>
                  <ListItem title="Resources" href="/resources" Icon={Coffee}>
                    Discover learning resources and tools
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/templates" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Templates
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/resources" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Call to Action */}
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="hidden sm:inline-block">
            <Button variant="outline" className="border-primary/20 hover:border-primary/50 font-medium">
              Dashboard
            </Button>
          </Link>
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

// Helper component for navigation menu items
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { Icon?: React.ComponentType<any> }
>(({ className, title, children, Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {Icon && <Icon className="h-4 w-4" />} 
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
