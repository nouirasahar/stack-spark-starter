
import React from 'react';
import { 
  Rocket, Server, Database, Clock, 
  AlertCircle, CheckCircle, ArrowUpRight,
  Activity, BarChart, Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Mock data for the dashboard
const recentProjects = [
  {
    name: 'E-Commerce API',
    date: '2 days ago',
    stack: { frontend: 'React', backend: 'Node.js', database: 'MongoDB' },
    status: 'active'
  },
  {
    name: 'Portfolio Website',
    date: '1 week ago',
    stack: { frontend: 'Vue.js', backend: 'Express', database: 'PostgreSQL' },
    status: 'error'
  },
  {
    name: 'Task Manager',
    date: '2 weeks ago',
    stack: { frontend: 'React', backend: 'Django', database: 'MySQL' },
    status: 'active'
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen py-6">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Developer Dashboard</h1>
            <p className="text-gray-600">Manage your projects and resources</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-md">
              <Rocket className="mr-2 h-4 w-4" /> New Project
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass rounded-xl p-6 border border-white/30">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-100">
                <Rocket className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Projects</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-xl p-6 border border-white/30">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-100">
                <Server className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Deployments</p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-xl p-6 border border-white/30">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-100">
                <Database className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Databases</p>
                <h3 className="text-2xl font-bold">5</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Projects & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="glass rounded-xl border border-white/30 lg:col-span-2">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Recent Projects</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          {project.status === 'active' ? (
                            <CheckCircle className="h-8 w-8 text-green-500" />
                          ) : (
                            <AlertCircle className="h-8 w-8 text-red-500" />
                          )}
                          <span className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                            project.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                          }`}></span>
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">{project.name}</h3>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{project.date}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="ml-11 mt-2 flex flex-wrap gap-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        {project.stack.frontend}
                      </span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                        {project.stack.backend}
                      </span>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                        {project.stack.database}
                      </span>
                    </div>
                    
                    {index < recentProjects.length - 1 && (
                      <Separator className="my-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-xl flex justify-center">
              <Button variant="outline">Generate New Project</Button>
            </div>
          </div>
          
          <div className="glass rounded-xl border border-white/30">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Analytics</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  Details
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-blue-500" />
                    <span>API Requests</span>
                  </div>
                  <span className="font-medium">1,245</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <BarChart className="h-5 w-5 text-green-500" />
                    <span>Performance</span>
                  </div>
                  <span className="font-medium">97%</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-purple-500" />
                    <span>Downloads</span>
                  </div>
                  <span className="font-medium">43</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-4">Project Generation Activity</p>
                <div className="h-24 w-full bg-slate-100 rounded-lg flex items-end p-2">
                  <div className="w-1/7 h-[20%] bg-blue-200 rounded-sm mx-0.5"></div>
                  <div className="w-1/7 h-[60%] bg-blue-400 rounded-sm mx-0.5"></div>
                  <div className="w-1/7 h-[40%] bg-blue-300 rounded-sm mx-0.5"></div>
                  <div className="w-1/7 h-[30%] bg-blue-200 rounded-sm mx-0.5"></div>
                  <div className="w-1/7 h-[80%] bg-blue-500 rounded-sm mx-0.5"></div>
                  <div className="w-1/7 h-[50%] bg-blue-400 rounded-sm mx-0.5"></div>
                  <div className="w-1/7 h-[70%] bg-blue-500 rounded-sm mx-0.5"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="glass rounded-xl p-6 border border-white/30">
          <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Rocket className="h-6 w-6 text-purple-500" />
              <span>New Project</span>
            </Button>
            
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Server className="h-6 w-6 text-blue-500" />
              <span>Deploy</span>
            </Button>
            
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Database className="h-6 w-6 text-green-500" />
              <span>Databases</span>
            </Button>
            
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Activity className="h-6 w-6 text-orange-500" />
              <span>Analytics</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
