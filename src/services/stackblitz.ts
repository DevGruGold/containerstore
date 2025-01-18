import sdk from '@stackblitz/sdk';
import type { Project } from '@stackblitz/sdk';

export class StackBlitzService {
  async exportProject(containers: any[]) {
    // Store in localStorage before "exporting"
    localStorage.setItem('container-store-last-export', JSON.stringify(containers));
    
    // Show success message
    alert('Project saved locally! StackBlitz export will be enabled when API keys are configured.');
  }

  async importProject(projectId: string) {
    // For now, return the last exported project from localStorage
    const lastExport = localStorage.getItem('container-store-last-export');
    if (!lastExport) {
      throw new Error('No exported project found');
    }
    return JSON.parse(lastExport);
  }
}