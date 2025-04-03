
import React, { useState } from 'react';
import { Code, Database, Server, Rocket, Sparkles, Download } from 'lucide-react';
import { TechIconGrid } from '@/components/TechStackIcons';
import DatabaseForm from '@/components/DatabaseForm';
import ProjectGenerator from '@/components/ProjectGenerator';
import { generateProject, downloadProject } from '@/utils/projectUtils';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  // États pour les choix de technologie
  const [frontend, setFrontend] = useState('');
  const [backend, setBackend] = useState('');
  const [database, setDatabase] = useState('');
  
  // État pour le formulaire de base de données
  const [dbFormData, setDbFormData] = useState({
    username: '',
    password: '',
    host: '',
    port: '',
    database: '',
  });
  
  // États pour la génération du projet
  const [showDbForm, setShowDbForm] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  
  // Liste des technologies disponibles
  const frontendTechnologies = ['React', 'Angular', 'Vue.js'];
  const backendTechnologies = ['Node.js', 'Spring Boot', 'Django'];
  const databaseTechnologies = ['PostgreSQL', 'MySQL', 'MongoDB'];
  
  // Gérer le changement de formulaire de base de données
  const handleDbFormChange = (field: string, value: string) => {
    setDbFormData(prev => ({ ...prev, [field]: value }));
  };
  
  // Valider le formulaire de base de données
  const isDbFormValid = () => {
    return (
      dbFormData.username.trim() !== '' &&
      dbFormData.password.trim() !== '' &&
      dbFormData.host.trim() !== '' &&
      dbFormData.port.trim() !== '' &&
      dbFormData.database.trim() !== ''
    );
  };
  
  // Générer le projet
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
        title: "Projet généré avec succès!",
        description: "Votre projet est prêt à être téléchargé.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur de génération",
        description: "Une erreur s'est produite lors de la génération du projet.",
      });
      console.error('Erreur de génération:', error);
    }
  };
  
  // Télécharger le projet
  const handleDownload = () => {
    downloadProject();
    toast({
      title: "Téléchargement démarré",
      description: "Le fichier projet.zip est en cours de téléchargement.",
    });
  };
  
  // Vérifier si l'utilisateur a choisi toutes les technologies
  const hasSelectedAllTechnologies = frontend && backend && database;
  
  // Passer à l'étape suivante
  const handleNextStep = () => {
    if (hasSelectedAllTechnologies) {
      setShowDbForm(true);
    }
  };
  
  return (
    <div className="min-h-screen">
      <header className="py-8 px-6 text-center mb-12">
        <div className="inline-block relative mb-2">
          <span className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-primary via-accent to-primary rounded-full"></span>
          <h1 className="text-5xl md:text-6xl font-bold relative z-10">
            <span className="text-gradient">DevStart</span>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse-slow" />
          <p className="text-xl font-medium text-gray-700">Créez des projets web complets en un instant</p>
          <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse-slow" />
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Sélectionnez votre stack préférée et obtenez un projet prêt à l'emploi
        </p>
      </header>
      
      <main className="container px-6 pb-16 max-w-4xl mx-auto">
        <div className="glass rounded-xl p-8 mb-10 transform hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <Rocket className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Sélectionnez votre stack
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
              title="Base de données"
              technologies={databaseTechnologies}
              selected={database}
              onSelect={setDatabase}
              icon={<Database className="h-5 w-5" />}
            />
            
            <div className="flex justify-end pt-4">
              <Button
                onClick={handleNextStep}
                disabled={!hasSelectedAllTechnologies}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 font-semibold py-6 px-8 text-lg rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Configurer la base de données
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
      </main>
      
      <footer className="py-8 text-center">
        <div className="gradient-border inline-block px-4 py-2">
          <p className="text-sm text-gray-600">© 2025 DevStart - Génération rapide de projets web</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
