
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, Server, Database, Code, 
  ArrowRight, Zap, Shield,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const features = [
  {
    title: 'Full Stack Generation',
    description: 'Generate complete frontend and backend code with a single click',
    icon: <Code className="h-6 w-6 text-blue-500" />
  },
  {
    title: 'Database Integration',
    description: 'Automatic database schema creation and API endpoints',
    icon: <Database className="h-6 w-6 text-green-500" />
  },
  {
    title: 'Multiple Frameworks',
    description: 'Support for various frontend and backend frameworks',
    icon: <Server className="h-6 w-6 text-purple-500" />
  },
  {
    title: 'Ready for Deployment',
    description: 'Get production-ready code with best practices built in',
    icon: <Rocket className="h-6 w-6 text-orange-500" />
  }
];

const techStacks = [
  { name: 'React', category: 'frontend', color: 'blue' },
  { name: 'Angular', category: 'frontend', color: 'red' },
  { name: 'Vue.js', category: 'frontend', color: 'green' },
  { name: 'Node.js', category: 'backend', color: 'green' },
  { name: 'Spring Boot', category: 'backend', color: 'green' },
  { name: 'Django', category: 'backend', color: 'blue' },
  { name: 'PostgreSQL', category: 'database', color: 'blue' },
  { name: 'MySQL', category: 'database', color: 'orange' },
  { name: 'MongoDB', category: 'database', color: 'green' }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Design */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-400/30 rounded-full filter blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-pulse-slow">
              Rapid Development Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Build Complete <span className="text-gradient">Web Projects</span> in Minutes
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              DevStart generates full-stack applications based on your preferred technologies, 
              saving you weeks of development time.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/get-started">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg py-6 px-10 text-lg rounded-xl w-full sm:w-auto">
                  Start Building <Rocket className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" className="border-primary/30 hover:border-primary/70 py-6 px-8 text-lg rounded-xl w-full sm:w-auto">
                  Explore Resources
                </Button>
              </Link>
            </div>

            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
              <div className="glass rounded-xl shadow-xl border border-white/30 overflow-hidden transform perspective">
                <img 
                  src="https://ui-snippets.dev/dashboard-hero.png" 
                  alt="DevStart Platform" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Platform Capabilities
            </div>
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to accelerate your development workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass rounded-xl p-8 border border-white/30 hover:shadow-xl transition-all duration-300 card-shine group"
              >
                <div className="bg-white/90 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:bg-primary/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-12 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-violet-400/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full bg-green-400/10 text-green-600 font-medium text-sm mb-4">
              Simple Process
            </div>
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to get your project up and running
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center relative">
              <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent md:w-1 md:h-full md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-0 md:bg-gradient-to-b"></div>
              
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Code className="h-10 w-10 text-primary" />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Choose Your Stack</h3>
              <p className="text-gray-600">
                Select your preferred frontend, backend, and database technologies
              </p>
            </div>

            <div className="text-center relative">
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Database className="h-10 w-10 text-blue-600" />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Configure Database</h3>
              <p className="text-gray-600">
                Enter your database credentials and connection details
              </p>
            </div>

            <div className="text-center relative">
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Rocket className="h-10 w-10 text-green-600" />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Generate Project</h3>
              <p className="text-gray-600">
                Download your complete project and start coding right away
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/get-started">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg py-6 px-10 text-lg">
                Start Building Now <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full bg-blue-400/10 text-blue-600 font-medium text-sm mb-4">
              Technology Stack
            </div>
            <h2 className="text-4xl font-bold mb-4">Supported Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of modern frameworks and databases
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStacks.map((tech, index) => (
              <div 
                key={index}
                className={`px-6 py-3 rounded-full bg-${tech.color}-100 text-${tech.color}-800 font-medium text-sm md:text-base flex items-center gap-2 shadow-sm border border-${tech.color}-200 hover:shadow-md transition-all duration-300`}
              >
                {tech.category === 'frontend' && <Code className="h-4 w-4" />}
                {tech.category === 'backend' && <Server className="h-4 w-4" />}
                {tech.category === 'database' && <Database className="h-4 w-4" />}
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-blue-500/5"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-12 border border-white/30 shadow-2xl bg-gradient-to-r from-violet-50/80 to-blue-50/80">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Development?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are building faster with DevStart
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Free starter plan</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Unlimited projects</span>
                </div>
              </div>
              <Link to="/get-started">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg py-7 px-12 text-lg rounded-xl">
                  Get Started for Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="gradient-border inline-block px-6 py-3">
          <p className="text-gray-600">© 2025 DevStart - Rapid Web Project Generation</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
