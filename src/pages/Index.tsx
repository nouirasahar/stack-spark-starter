
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, Server, Database, Code, 
  ArrowRight, BarChart, Zap, Shield,
  CheckCircle, Users
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

const testimonials = [
  {
    quote: "DevStart saved me weeks of boilerplate coding. I had a working prototype in hours instead of days.",
    author: "Sarah Johnson",
    role: "Frontend Developer"
  },
  {
    quote: "The generated code quality is impressive. Clean architecture and follows best practices.",
    author: "Michael Chen",
    role: "Senior Software Engineer"
  },
  {
    quote: "As a startup founder, DevStart helped us iterate quickly on our MVP without compromising quality.",
    author: "Emma Rodriguez",
    role: "CTO at TechLaunch"
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
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
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
              <Link to="/templates">
                <Button variant="outline" className="border-primary/30 hover:border-primary/70 py-6 px-8 text-lg rounded-xl w-full sm:w-auto">
                  View Templates
                </Button>
              </Link>
            </div>

            <div className="mt-12 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10"></div>
              <div className="glass rounded-xl shadow-xl border border-white/30 overflow-hidden">
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

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to accelerate your development workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass rounded-xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300 card-shine"
              >
                <div className="bg-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/resources">
              <Button variant="outline" size="lg" className="rounded-full">
                Discover More Features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to get your project up and running
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
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

            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
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

            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Supported Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of modern frameworks and databases
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStacks.map((tech, index) => (
              <div 
                key={index}
                className={`px-6 py-3 rounded-full bg-${tech.color}-100 text-${tech.color}-800 font-medium text-sm md:text-base flex items-center gap-2 shadow-sm`}
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Developers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied developers using DevStart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass rounded-xl p-8 border border-white/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 text-primary">
                  <svg width="45" height="36" className="fill-current">
                    <path d="M13.415.43c-2.523 0-4.75 1.49-6.333 3.76C5.5 6.46 4.5 9.56 4.5 12.5c0 3.93 1.582 7.43 4.113 9.96 2.53 2.53 5.97 3.96 9.387 3.96 2.473 0 4.893-.76 6.917-2.07 2.023-1.31 3.61-3.23 4.23-5.88.5-2.15.2-4.43-.76-6.29-.96-1.86-2.48-3.4-4.333-4.56.23-5.17-2.078-7.15-3.917-8.07-1.017-.51-2.088-.57-2.898-.57-1.58 0-3.36.36-4.76.99-.185.07-.37.22-.423.41-.053.19.008.38.143.53.503.55.777 1.2.777 1.95 0 1.57-1.26 2.84-2.813 2.84-1.553 0-2.812-1.27-2.812-2.84 0-1.3.39-2.59 1.213-3.65C10.228 2.16 11.355 1.7 12.67 1.7c.914 0 1.85.22 2.724.84 1.677 1.19 2.585 3.7 2.43 7.54-.012.34.207.65.54.8 2.263.99 4.523 4.47 4.523 8.03 0 2.62-1.142 5.21-3.183 7.06-2.04 1.85-4.813 2.84-7.727 2.84-3.097 0-5.98-1.27-8.087-3.37-2.106-2.1-3.373-4.99-3.373-8.05 0-3.31 1.494-6.68 3.686-9.01 2.192-2.33 5.15-3.98 8.188-3.98.772 0 1.52.09 2.24.25.367.08.743-.12.88-.47.136-.35 0-.75-.337-.92-.71-.18-1.46-.27-2.22-.27H13.415z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass rounded-2xl p-12 border border-white/30 shadow-xl bg-gradient-to-r from-purple-50 to-indigo-50">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Development?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are building faster with DevStart
              </p>
              <div className="flex flex-wrap justify-center gap-6">
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
              <div className="mt-10">
                <Link to="/get-started">
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg py-7 px-10 text-lg rounded-xl">
                    Get Started for Free
                  </Button>
                </Link>
              </div>
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
