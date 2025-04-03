
import React from 'react';
import { Book, Video, Link, FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const resourceCategories = [
  {
    title: 'Tutorials',
    description: 'Step-by-step guides to learn development',
    icon: <Book className="h-6 w-6 text-blue-500" />,
    items: [
      { title: 'Getting Started with React', type: 'Article', link: '#' },
      { title: 'Building APIs with Node.js', type: 'Video', link: '#' },
      { title: 'Database Design Fundamentals', type: 'Guide', link: '#' },
    ],
  },
  {
    title: 'Video Courses',
    description: 'In-depth video lessons for various technologies',
    icon: <Video className="h-6 w-6 text-red-500" />,
    items: [
      { title: 'Full Stack Development Bootcamp', type: 'Course', link: '#' },
      { title: 'Advanced React Patterns', type: 'Workshop', link: '#' },
      { title: 'Backend Development with Spring Boot', type: 'Series', link: '#' },
    ],
  },
  {
    title: 'Documentation',
    description: 'Official documentation for popular frameworks',
    icon: <FileText className="h-6 w-6 text-green-500" />,
    items: [
      { title: 'React Documentation', type: 'Docs', link: '#' },
      { title: 'Node.js API Reference', type: 'Reference', link: '#' },
      { title: 'PostgreSQL Manual', type: 'Manual', link: '#' },
    ],
  },
  {
    title: 'Tools & Resources',
    description: 'Helpful tools and resources for developers',
    icon: <Link className="h-6 w-6 text-purple-500" />,
    items: [
      { title: 'VS Code Extensions for Web Development', type: 'Collection', link: '#' },
      { title: 'Git Command Cheatsheet', type: 'PDF', link: '#' },
      { title: 'Design Resources for Developers', type: 'List', link: '#' },
    ],
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Developer Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover tutorials, documentation, tools, and more to enhance your development skills
          </p>
          <div className="inline-flex items-center bg-white rounded-full shadow-md p-1.5 border border-slate-200">
            <Button variant="ghost" className="rounded-full hover:bg-transparent hover:text-primary">All</Button>
            <Button variant="ghost" className="rounded-full hover:bg-transparent hover:text-primary">Tutorials</Button>
            <Button className="rounded-full bg-primary text-white hover:bg-primary/90">Videos</Button>
            <Button variant="ghost" className="rounded-full hover:bg-transparent hover:text-primary">Docs</Button>
            <Button variant="ghost" className="rounded-full hover:bg-transparent hover:text-primary">Tools</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {resourceCategories.map((category, index) => (
            <div 
              key={index}
              className="glass rounded-xl overflow-hidden border border-white/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-white/80 shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <Separator className="my-4" />
                
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i}>
                      <a 
                        href={item.link} 
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/50 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-gray-900 font-medium">{item.title}</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                            {item.type}
                          </span>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 p-4 border-t border-slate-100">
                <Button className="w-full" variant="outline">
                  View All {category.title}
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 mb-6">Can't find what you're looking for?</p>
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 py-6 px-8 text-lg shadow-md">
            Suggest a Resource
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
