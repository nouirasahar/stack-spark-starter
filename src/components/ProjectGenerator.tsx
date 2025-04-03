
import React from 'react';
import { Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

type ProjectGeneratorProps = {
  isGenerating: boolean;
  progress: number;
  onDownload: () => void;
  techStack: {
    frontend: string;
    backend: string;
    database: string;
  };
};

const ProjectGenerator: React.FC<ProjectGeneratorProps> = ({
  isGenerating,
  progress,
  onDownload,
  techStack,
}) => {
  if (!isGenerating && progress === 0) {
    return null;
  }

  return (
    <div className="glass rounded-xl p-6 mt-8 animate-fadeIn">
      <h3 className="text-lg font-semibold mb-4">
        {progress < 100 ? 'Génération en cours...' : 'Projet généré avec succès!'}
      </h3>
      
      {progress < 100 ? (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progression</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Création du projet {techStack.frontend}</span>
              {progress >= 30 ? (
                <span className="text-green-500 text-sm">Terminé</span>
              ) : (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Configuration de {techStack.backend}</span>
              {progress >= 60 ? (
                <span className="text-green-500 text-sm">Terminé</span>
              ) : progress >= 30 ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <span className="text-muted-foreground text-sm">En attente...</span>
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Configuration de {techStack.database}</span>
              {progress >= 90 ? (
                <span className="text-green-500 text-sm">Terminé</span>
              ) : progress >= 60 ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <span className="text-muted-foreground text-sm">En attente...</span>
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Finalisation</span>
              {progress >= 100 ? (
                <span className="text-green-500 text-sm">Terminé</span>
              ) : progress >= 90 ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <span className="text-muted-foreground text-sm">En attente...</span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
            <p className="font-medium">Projet généré avec succès! Votre projet contient:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Frontend: {techStack.frontend}</li>
              <li>Backend: {techStack.backend}</li>
              <li>Base de données: {techStack.database}</li>
              <li>Connexion DB configurée</li>
              <li>Configuration prête pour le déploiement</li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <Button 
              onClick={onDownload}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity px-6"
            >
              <Download className="mr-2 h-4 w-4" />
              Télécharger projet.zip
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGenerator;
