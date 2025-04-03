
import React from 'react';
import { Check, Code, Database, Server } from 'lucide-react';
import { cn } from '@/lib/utils';

type TechIconProps = {
  name: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
};

export const TechIcon: React.FC<TechIconProps> = ({ name, selected = false, onClick, className }) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "relative w-24 h-24 flex flex-col items-center justify-center rounded-xl transition-all duration-300 cursor-pointer",
        selected 
          ? "bg-primary/10 border-2 border-primary shadow-lg scale-105" 
          : "bg-white/50 border border-white/20 hover:bg-white/70 hover:shadow-md",
        className
      )}
    >
      <div className="text-3xl mb-2">{getTechIcon(name)}</div>
      <span className="text-sm font-medium">{name}</span>
      {selected && (
        <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-1">
          <Check size={14} />
        </div>
      )}
    </div>
  );
};

// Composant pour afficher une grille d'icônes technologiques
export const TechIconGrid: React.FC<{
  title: string;
  technologies: string[];
  selected: string;
  onSelect: (tech: string) => void;
  icon: React.ReactNode;
}> = ({ title, technologies, selected, onSelect, icon }) => {
  return (
    <div className="animate-fadeIn">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {technologies.map((tech) => (
          <TechIcon
            key={tech}
            name={tech}
            selected={selected === tech}
            onClick={() => onSelect(tech)}
          />
        ))}
      </div>
    </div>
  );
};

// Helper pour obtenir l'icône en fonction du nom de la technologie
function getTechIcon(name: string): React.ReactNode {
  switch (name) {
    // Frontend
    case 'React':
      return '⚛️';
    case 'Angular':
      return '🅰️';
    case 'Vue.js':
      return '🍃';
      
    // Backend
    case 'Node.js':
      return '🟢';
    case 'Spring Boot':
      return '🍃';
    case 'Django':
      return '🐍';
      
    // Databases
    case 'PostgreSQL':
      return '🐘';
    case 'MySQL':
      return '🐬';
    case 'MongoDB':
      return '🍃';
      
    default:
      return '🔧';
  }
}
