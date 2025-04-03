
import React, { useState } from 'react';
import { Code, Database, Server, Rocket } from 'lucide-react';
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
      <header className="py-8 px-6 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gradient">
          <span className="text-gradient">DevStart</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Générez rapidement un projet complet en choisissant votre stack technologique préférée
        </p>
      </header>
      
      <main className="container px-6 pb-16 max-w-4xl mx-auto">
        <div className="glass rounded-xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Rocket className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">Sélectionnez votre stack</h2>
          </div>
          
          <div className="space-y-8 staggered">
            <TechIconGrid
              title="Frontend"
              technologies={frontendTechnologies}
              selected={frontend}
              onSelect={setFrontend}
              icon={<Code className="h-5 w-5 text-primary" />}
            />
            
            <TechIconGrid
              title="Backend"
              technologies={backendTechnologies}
              selected={backend}
              onSelect={setBackend}
              icon={<Server className="h-5 w-5 text-primary" />}
            />
            
            <TechIconGrid
              title="Base de données"
              technologies={databaseTechnologies}
              selected={database}
              onSelect={setDatabase}
              icon={<Database className="h-5 w-5 text-primary" />}
            />
            
            <div className="flex justify-end">
              <Button
                onClick={handleNextStep}
                disabled={!hasSelectedAllTechnologies}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                Configurer la base de données
              </Button>
            </div>
          </div>
        </div>
        
        {showDbForm && (
          <DatabaseForm
            dbType={database}
            formData={dbFormData}
            onFormChange={handleDbFormChange}
            onSubmit={handleGenerateProject}
            isValid={isDbFormValid()}
          />
        )}
        
        <ProjectGenerator
          isGenerating={isGenerating}
          progress={generationProgress}
          onDownload={handleDownload}
          techStack={{ frontend, backend, database }}
        />
      </main>
      
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>© 2025 DevStart - Génération rapide de projets web</p>
      </footer>
    </div>
  );
};

export default Index;
