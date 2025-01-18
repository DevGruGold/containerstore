import { ContainerTemplate } from '../types/containers';
import { 
  LayoutGrid, 
  Type, 
  Wallet, 
  Bot,
  Image,
  Video,
  MessageSquare,
  Table,
  BarChart,
  Code,
  Layout,
  ListTodo,
  ShoppingCart,
  Calendar,
  Map,
  Share2
} from 'lucide-react';

export const containerTemplates: ContainerTemplate[] = [
  {
    id: 'hero-section',
    name: 'Hero Section',
    description: 'Full-width hero with image background',
    category: 'layout',
    icon: 'Layout',
    defaultStyles: {
      width: '100%',
      minHeight: '400px',
      padding: '2rem',
      backgroundColor: '#f8fafc',
      borderRadius: '0.5rem',
    },
    jamstackPrompt: 'Create a responsive hero section with a background image, heading, subheading, and call-to-action buttons. Support dark/light variants and mobile optimization.'
  },
  {
    id: 'text-block',
    name: 'Text Block',
    description: 'Rich text content with styling',
    category: 'content',
    icon: 'Type',
    defaultStyles: {
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      width: '100%',
    },
    jamstackPrompt: 'Create a responsive text block component with customizable typography, spacing, and color schemes. Include support for markdown content and rich text editing capabilities.'
  },
  {
    id: 'grid-layout',
    name: 'Grid Layout',
    description: 'Responsive grid container',
    category: 'layout',
    icon: 'LayoutGrid',
    defaultStyles: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      padding: '1rem',
      width: '100%',
    },
    jamstackPrompt: 'Implement a flexible grid layout system with configurable columns, gaps, and responsive breakpoints. Support nested grids and content areas.'
  },
  {
    id: 'web3-wallet',
    name: 'Web3 Wallet',
    description: 'Connect wallet and crypto balances',
    category: 'web3',
    icon: 'Wallet',
    defaultStyles: {
      padding: '1.5rem',
      backgroundColor: '#f8fafc',
      borderRadius: '0.75rem',
      width: '100%',
    },
    jamstackPrompt: 'Build a Web3 wallet component that supports multiple chains, displays balances, and handles transactions. Include MetaMask integration.'
  },
  {
    id: 'gemini-chat',
    name: 'Gemini Chat',
    description: 'AI chat powered by Gemini',
    category: 'ai',
    icon: 'Bot',
    defaultStyles: {
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      width: '100%',
    },
    jamstackPrompt: 'Create an AI chat interface using Gemini API with support for text and multimodal inputs. Include streaming responses and message history.'
  },
  {
    id: 'task-list',
    name: 'Task List',
    description: 'Interactive todo list',
    category: 'content',
    icon: 'ListTodo',
    defaultStyles: {
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      width: '100%',
    },
    jamstackPrompt: 'Build a task list component with drag-and-drop reordering, categories, and progress tracking.'
  },
  {
    id: 'product-card',
    name: 'Product Card',
    description: 'E-commerce product display',
    category: 'commerce',
    icon: 'ShoppingCart',
    defaultStyles: {
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      width: '100%',
    },
    jamstackPrompt: 'Create a product card component with image gallery, pricing, variants, and add-to-cart functionality.'
  },
  {
    id: 'calendar',
    name: 'Calendar',
    description: 'Interactive calendar widget',
    category: 'content',
    icon: 'Calendar',
    defaultStyles: {
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      width: '100%',
    },
    jamstackPrompt: 'Build a calendar component with event management, multiple views, and recurring events support.'
  },
  {
    id: 'map',
    name: 'Map View',
    description: 'Interactive map display',
    category: 'content',
    icon: 'Map',
    defaultStyles: {
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      width: '100%',
      height: '400px',
    },
    jamstackPrompt: 'Create a map component with markers, custom styling, and location search functionality.'
  },
  {
    id: 'social-share',
    name: 'Social Share',
    description: 'Social media sharing buttons',
    category: 'content',
    icon: 'Share2',
    defaultStyles: {
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      width: '100%',
    },
    jamstackPrompt: 'Build a social sharing component with support for multiple platforms and share count tracking.'
  }
];