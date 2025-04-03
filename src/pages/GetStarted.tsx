
import React, { useState } from 'react';
import { Check, ChevronRight, Code, Database, Server, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TechIconGrid } from '@/components/TechStackIcons';
import DatabaseForm from '@/components/DatabaseForm';
import ProjectGenerator from '@/components/ProjectGenerator';
import { generateProject, downloadProject } from '@/utils/projectUtils';
import { toast } from '@/hooks/use-toast';

const GetStarted = () => {
  // States for technology choices
  const [frontend, setFrontend] = useState('');
  const [backend, setBackend] = useState('');
  const [database, setDatabase] = useState('');
  
  // State for database form
  const [dbFormData, setDbFormData] = useState({
    username: '',
    password: '',
    host: '',
    port: '',
    database: '',
  });
  
  // States for project generation
  const [showDbForm, setShowDbForm] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  
  // Available technologies
  const frontendTechnologies = ['React', 'Angular', 'Vue.js'];
  const backendTechnologies = ['Node.js', 'Spring Boot', 'Django'];
  const databaseTechnologies = ['PostgreSQL', 'MySQL', 'MongoDB'];
  
  // Handle database form change
  const handleDbFormChange = (field: string, value: string) => {
    setDbFormData(prev => ({ ...prev, [field]: value }));
  };
  
  // Validate database form
  const isDbFormValid = () => {
    return (
      dbFormData.username.trim() !== '' &&
      dbFormData.password.trim() !== '' &&
      dbFormData.host.trim() !== '' &&
      dbFormData.port.trim() !== '' &&
      dbFormData.database.trim() !== ''
    );
  };
  
  // Generate the project
  const handleGenerateProject = async () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    
    try {
      await generateProject(
        frontend,
        backend,
        database,
        dbFormData,
        (progress) => setGenerationProgress(progress)
      );
      
      toast({
        title: "Project generated successfully!",
        description: "Your project is ready to download.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generation Error",
        description: "An error occurred during project generation.",
      });
      console.error('Generation error:', error);
    }
  };
  
  // Download the project
  const handleDownload = () => {
    downloadProject();
    toast({
      title: "Download started",
      description: "The project.zip file is being downloaded.",
    });
  };
  
  // Check if user has selected all technologies
  const hasSelectedAllTechnologies = frontend && backend && database;
  
  // Go to next step
  const handleNextStep = () => {
    if (hasSelectedAllTechnologies) {
      setShowDbForm(true);
    }
  };
  
  const steps = [
    { number: 1, title: 'Choose Technologies', completed: hasSelectedAllTechnologies },
    { number: 2, title: 'Configure Database', completed: showDbForm && isDbFormValid() },
    { number: 3, title: 'Generate Project', completed: isGenerating && generationProgress === 100 }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Create Your Project</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Select your preferred technologies, configure the database, and generate a complete project in minutes
          </p>
          
          {/* Steps indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center max-w-3xl w-full">
              {steps.map((step, i) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      step.completed ? 'bg-primary border-primary' : 'border-gray-300'
                    }`}>
                      {step.completed ? (
                        <Check className="h-5 w-5 text-white" />
                      ) : (
                        <span className={`text-sm font-medium ${step.completed ? 'text-white' : 'text-gray-500'}`}>
                          {step.number}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-medium mt-2">{step.title}</span>
                  </div>
                  
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 ${
                      steps[i + 1].completed ? 'bg-primary' : 'bg-gray-300'
                    }`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="glass rounded-xl p-8 mb-10 transform hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <Rocket className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Select Your Stack
            </h2>
          </div>
          
          <div className="space-y-10 staggered">
            <TechIconGrid
              title="Frontend"
              technologies={frontendTechnologies}
              selected={frontend}
              onSelect={setFrontend}
              icon={<Code className="h-5 w-5" />}
            />
            
            <TechIconGrid
              title="Backend"
              technologies={backendTechnologies}
              selected={backend}
              onSelect={setBackend}
              icon={<Server className="h-5 w-5" />}
            />
            
            <TechIconGrid
              title="Database"
              technologies={databaseTechnologies}
              selected={database}
              onSelect={setDatabase}
              icon={<Database className="h-5 w-5" />}
            />
            
            <div className="flex justify-end pt-4">
              <Button
                onClick={handleNextStep}
                disabled={!hasSelectedAllTechnologies}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 font-semibold py-6 px-8 text-lg rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 group"
              >
                Configure Database
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        {showDbForm && (
          <div className="animate-fadeIn">
            <DatabaseForm
              dbType={database}
              formData={dbFormData}
              onFormChange={handleDbFormChange}
              onSubmit={handleGenerateProject}
              isValid={isDbFormValid()}
            />
          </div>
        )}
        
        <ProjectGenerator
          isGenerating={isGenerating}
          progress={generationProgress}
          onDownload={handleDownload}
          techStack={{ frontend, backend, database }}
        />
      </div>
    </div>
  );
};

export default GetStarted;
