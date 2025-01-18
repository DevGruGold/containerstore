export interface ContainerTemplate {
  id: string;
  name: string;
  description: string;
  category: 'layout' | 'content' | 'web3' | 'ai' | 'media';
  icon: string;
  defaultStyles: Record<string, string>;
  jamstackPrompt?: string;
}

export interface ContainerInstance {
  id: string;
  templateId: string;
  styles: Record<string, string>;
  content: any;
  position: {
    x: number;
    y: number;
  };
  selected?: boolean;
}

export interface PageData {
  containers: ContainerInstance[];
  title: string;
  layout: 'fixed' | 'fluid';
}