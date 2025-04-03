
import React from 'react';
import { Cloud, Server, ShieldCheck, Zap, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const deploymentOptions = [
  {
    name: 'Basic',
    description: 'Perfect for personal projects and experiments',
    price: '$0',
    period: 'Free forever',
    features: [
      'Single project deployment',
      'Shared resources',
      'Community support',
      'Manual scaling',
      'Basic analytics'
    ],
    icon: <Cloud className="h-10 w-10 text-blue-500" />,
    popular: false,
    buttonText: 'Start Free'
  },
  {
    name: 'Professional',
    description: 'Ideal for startups and growing teams',
    price: '$19',
    period: 'per month',
    features: [
      'Up to 10 project deployments',
      'Dedicated resources',
      'Priority support',
      'Auto-scaling',
      'Advanced analytics',
      'Custom domain'
    ],
    icon: <Server className="h-10 w-10 text-purple-500" />,
    popular: true,
    buttonText: 'Go Professional'
  },
  {
    name: 'Enterprise',
    description: 'For large teams with advanced needs',
    price: '$49',
    period: 'per month',
    features: [
      'Unlimited project deployments',
      'Premium resources',
      '24/7 dedicated support',
      'Advanced auto-scaling',
      'Full analytics suite',
      'Multiple custom domains',
      'SOC2 compliance'
    ],
    icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
    popular: false,
    buttonText: 'Contact Sales'
  }
];

const Deployment = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Deploy Your Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get your application online in minutes with our seamless deployment platform
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 py-6 px-8 text-lg shadow-md">
              Deploy Now <Zap className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="py-6 px-8 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Deployment Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the right deployment plan for your project needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {deploymentOptions.map((option, index) => (
            <div 
              key={index} 
              className={`glass rounded-xl p-8 border transition-all duration-300 hover:shadow-xl card-shine relative ${
                option.popular 
                  ? 'border-primary/30 shadow-lg' 
                  : 'border-white/30'
              }`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="flex flex-col items-center mb-6">
                <div className={`p-4 rounded-full bg-white/80 shadow-sm mb-4 ${
                  option.popular ? 'ring-2 ring-primary/20' : ''
                }`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold">{option.name}</h3>
                <p className="text-gray-600 text-center mt-2">{option.description}</p>
              </div>
              
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">{option.price}</span>
                <span className="text-gray-500 text-sm"> {option.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  option.popular 
                    ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                    : ''
                }`}
                variant={option.popular ? 'default' : 'outline'}
              >
                {option.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="glass rounded-xl p-8 border border-white/30 max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Need a Custom Plan?</h3>
            <p className="text-gray-600">
              Contact our team for a tailored deployment solution that fits your specific requirements
            </p>
          </div>
          <div className="flex justify-center">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-md">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deployment;
