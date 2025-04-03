
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
        "relative w-24 h-24 flex flex-col items-center justify-center rounded-xl transition-all duration-300 cursor-pointer card-shine",
        selected 
          ? "bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary shadow-lg scale-110 animate-pulse-slow" 
          : "bg-white/50 border border-white/30 hover:border-primary/30 hover:bg-white/70 hover:shadow-md hover:scale-105",
        className
      )}
    >
      <div className={cn(
        "text-3xl mb-2 transition-transform duration-300",
        selected ? "animate-float" : "group-hover:scale-110"
      )}>
        {getTechIcon(name)}
      </div>
      <span className="text-sm font-medium">{name}</span>
      {selected && (
        <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-1 animate-scale-in">
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
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-full bg-gradient-to-r from-primary to-accent text-white">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
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
      return <span className="text-[#61DAFB]">⚛️</span>;
    case 'Angular':
      return <span className="text-[#DD0031]">🅰️</span>;
    case 'Vue.js':
      return <span className="text-[#42B883]">🍃</span>;
      
    // Backend
    case 'Node.js':
      return <span className="text-[#68A063]">🟢</span>;
    case 'Spring Boot':
      return <span className="text-[#6DB33F]">🍃</span>;
    case 'Django':
      return <span className="text-[#092E20]">🐍</span>;
      
    // Databases
    case 'PostgreSQL':
      return <span className="text-[#336791]">🐘</span>;
    case 'MySQL':
      return <span className="text-[#4479A1]">🐬</span>;
    case 'MongoDB':
      return <span className="text-[#47A248]">🍃</span>;
      
    default:
      return '🔧';
  }
}
