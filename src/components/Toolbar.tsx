import React, { useState } from 'react';
import { Save, Undo, Redo, Settings, Eye, Code, Github, Import, Import as Export, Menu } from 'lucide-react';
import { GitHubService } from '../services/github';
import { StackBlitzService } from '../services/stackblitz';

const githubService = new GitHubService();
const stackblitzService = new StackBlitzService();

export default function Toolbar({ containers }: { containers: any[] }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGitHubLogin = async () => {
    const success = await githubService.login();
    setIsAuthenticated(success);
  };

  const handleExport = async () => {
    try {
      if (!isAuthenticated) {
        await handleGitHubLogin();
        return;
      }

      const gist = await githubService.createGist(
        JSON.stringify(containers, null, 2)
      );

      await stackblitzService.exportProject(containers);
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  const handleImport = async () => {
    try {
      const projectId = prompt('Enter project ID (any value will load the last saved project):');
      if (!projectId) return;

      const importedContainers = await stackblitzService.importProject(projectId);
      alert('Project loaded from local storage!');
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Import failed:', error);
      alert('No saved project found');
    }
  };

  const ToolbarButtons = () => (
    <>
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <Undo className="w-5 h-5" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <Redo className="w-5 h-5" />
      </button>
      <div className="h-6 w-px bg-gray-200" />
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <Settings className="w-5 h-5" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <Eye className="w-5 h-5" />
      </button>
      <button 
        onClick={handleImport}
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Import from local storage"
      >
        <Import className="w-5 h-5" />
      </button>
      <button 
        onClick={handleExport}
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Export to local storage"
      >
        <Export className="w-5 h-5" />
      </button>
      <button 
        onClick={handleGitHubLogin}
        className={`p-2 rounded-lg ${
          isAuthenticated ? 'bg-green-100' : 'hover:bg-gray-100'
        }`}
        title={isAuthenticated ? 'Connected (Demo)' : 'Connect (Demo)'}
      >
        <Github className={`w-5 h-5 ${isAuthenticated ? 'text-green-600' : ''}`} />
      </button>
      <button 
        onClick={handleExport}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
      >
        <Save className="w-4 h-4" />
        <span>Save</span>
      </button>
    </>
  );

  return (
    <div className="border-b border-gray-200 bg-white">
      {/* Desktop Toolbar */}
      <div className="hidden md:flex h-14 px-4 items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold">The Container Store</h1>
        </div>
        <div className="flex items-center space-x-4">
          <ToolbarButtons />
        </div>
      </div>

      {/* Mobile Toolbar */}
      <div className="md:hidden">
        <div className="h-14 px-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">The Container Store</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 px-4 py-2 space-y-2">
            <div className="grid grid-cols-4 gap-2">
              <ToolbarButtons />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}