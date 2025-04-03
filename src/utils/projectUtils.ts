
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
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 1;
      
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        onProgress(progress);
        resolve();
      } else {
        onProgress(progress);
      }
    }, 600);
  });
};

// Fonction pour simuler le téléchargement du fichier
export const downloadProject = () => {
  // Dans une application réelle, nous générerions un vrai fichier ZIP
  // Pour cette démonstration, nous allons juste créer un lien qui simule un téléchargement
  
  const element = document.createElement('a');
  element.setAttribute('href', 'data:application/zip;charset=utf-8,');
  element.setAttribute('download', 'projet.zip');
  element.style.display = 'none';
  
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  
  console.log('Téléchargement simulé du projet');
};
