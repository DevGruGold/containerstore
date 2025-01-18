import React, { useState } from 'react';
import { containerTemplates } from '../data/templates';
import { Menu, X } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = Array.from(new Set(containerTemplates.map(t => t.category)));

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-white border-r border-gray-200
        transform transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Components</h2>
          
          <div className="space-y-6">
            {categories.map(category => (
              <div key={category}>
                <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">
                  {category}
                </h3>
                <div className="space-y-2">
                  {containerTemplates
                    .filter(t => t.category === category)
                    .map(template => {
                      const IconComponent = Icons[template.icon as keyof typeof Icons];
                      
                      return (
                        <div
                          key={template.id}
                          className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-grab active:cursor-grabbing"
                          draggable
                          onDragStart={(e) => {
                            e.dataTransfer.setData('template', template.id);
                            e.dataTransfer.effectAllowed = 'copy';
                          }}
                        >
                          <IconComponent className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-sm font-medium truncate">{template.name}</p>
                            <p className="text-xs text-gray-500 truncate">{template.description}</p>
                          </div>
                        </div>
                      );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}