
import React from 'react';
import { BookOpen, Code, Server, Database, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const templates = [
  {
    title: 'E-Commerce Starter',
    description: 'Complete store with products, cart and checkout',
    technologies: ['React', 'Node.js', 'MongoDB'],
    icon: <Star className="h-8 w-8 text-yellow-500" />,
    popular: true,
  },
  {
    title: 'Blog Platform',
    description: 'Blog with articles, comments and user profiles',
    technologies: ['Vue.js', 'Express.js', 'PostgreSQL'],
    icon: <BookOpen className="h-8 w-8 text-blue-500" />,
    popular: false,
  },
  {
    title: 'Admin Dashboard',
    description: 'Feature-rich admin panel with statistics',
    technologies: ['React', 'Spring Boot', 'MySQL'],
    icon: <Code className="h-8 w-8 text-purple-500" />,
    popular: true,
  },
  {
    title: 'API Backend',
    description: 'RESTful API with authentication and authorization',
    technologies: ['Express.js', 'MongoDB'],
    icon: <Server className="h-8 w-8 text-green-500" />,
    popular: false,
  },
  {
    title: 'Social Network',
    description: 'Social platform with profiles, posts and messaging',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    icon: <Database className="h-8 w-8 text-indigo-500" />,
    popular: false,
  },
];

const Templates = () => {
  return (
    <div className="min-h-screen pb-16">
      <div className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Ready-to-Use Templates</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Jumpstart your development with our professionally designed project templates
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 py-6 px-8 text-lg shadow-md">
              Browse All Templates
            </Button>
            <Button variant="outline" className="py-6 px-8 text-lg">
              How It Works
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Templates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of templates designed for various use cases
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {templates.map((template, index) => (
            <div 
              key={index} 
              className="glass rounded-xl p-6 border border-white/30 transition-all duration-300 hover:shadow-xl card-shine"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-full bg-white/80 shadow-sm">
                  {template.icon}
                </div>
                {template.popular && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{template.title}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <Separator className="my-4" />
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {template.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <Button className="w-full mt-2 group">
                Use Template
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            Load More Templates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
