
// Fonction pour simuler la génération de projet
export const generateProject = (
  frontend: string,
  backend: string,
  database: string,
  dbConfig: any,
  onProgress: (progress: number) => void
): Promise<void> => {
  return new Promise((resolve) => {
    let progress = 0;
    
    // Simuler des étapes de génération avec des délais différents pour être plus réaliste
    const steps = [
      { target: 10, message: "Initialisation du projet..." },
      { target: 25, message: "Création de la structure de base..." },
      { target: 40, message: "Configuration de " + frontend + "..." },
      { target: 55, message: "Configuration de " + backend + "..." },
      { target: 70, message: "Configuration de " + database + "..." },
      { target: 85, message: "Génération des modèles et services..." },
      { target: 95, message: "Finalisation du projet..." },
      { target: 100, message: "Projet prêt !" }
    ];
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        
        if (progress < step.target) {
          progress += Math.floor(Math.random() * 3) + 1;
          progress = Math.min(progress, step.target);
          onProgress(progress);
          console.log(step.message);
        } else {
          currentStep++;
        }
      } else {
        clearInterval(interval);
        resolve();
      }
    }, 400);
  });
};

// Fonction pour simuler le téléchargement du fichier
export const downloadProject = () => {
  // Dans une application réelle, nous générerions un vrai fichier ZIP
  // Pour cette démonstration, nous allons juste créer un lien qui simule un téléchargement
  
  // Ajouter un petit délai pour rendre l'expérience plus réaliste
  setTimeout(() => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:application/zip;charset=utf-8,');
    element.setAttribute('download', 'projet.zip');
    element.style.display = 'none';
    
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    console.log('Téléchargement simulé du projet');
  }, 800);
};
