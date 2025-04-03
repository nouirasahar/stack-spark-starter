
import React from 'react';
import { Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type DatabaseFormProps = {
  dbType: string;
  formData: {
    username: string;
    password: string;
    host: string;
    port: string;
    database: string;
  };
  onFormChange: (field: string, value: string) => void;
  onSubmit: () => void;
  isValid: boolean;
};

const DatabaseForm: React.FC<DatabaseFormProps> = ({
  dbType,
  formData,
  onFormChange,
  onSubmit,
  isValid,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange(e.target.name, e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="glass rounded-xl p-6 mb-8 animate-fadeIn">
      <div className="flex items-center gap-2 mb-4">
        <Database className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Configuration de {dbType}</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="username">Nom d'utilisateur</Label>
            <Input
              id="username"
              name="username"
              placeholder="ex: admin"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="host">Hôte</Label>
            <Input
              id="host"
              name="host"
              placeholder="ex: localhost"
              value={formData.host}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="port">Port</Label>
            <Input
              id="port"
              name="port"
              placeholder={getDefaultPort(dbType)}
              value={formData.port}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="database">Nom de la base de données</Label>
            <Input
              id="database"
              name="database"
              placeholder="ex: my_app_db"
              value={formData.database}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={!isValid}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            Valider la configuration
          </Button>
        </div>
      </form>
    </div>
  );
};

function getDefaultPort(dbType: string): string {
  switch (dbType) {
    case 'PostgreSQL':
      return '5432';
    case 'MySQL':
      return '3306';
    case 'MongoDB':
      return '27017';
    default:
      return '5432';
  }
}

export default DatabaseForm;
