import React, { useState, useRef } from 'react';
import { ContainerInstance } from '../types/containers';
import { containerTemplates } from '../data/templates';
import * as Icons from 'lucide-react';

export default function Canvas() {
  const [containers, setContainers] = useState<ContainerInstance[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const templateId = e.dataTransfer.getData('template');
    const containerId = e.dataTransfer.getData('container');
    
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const scrollTop = canvasRef.current.scrollTop;
      const scrollLeft = canvasRef.current.scrollLeft;

      if (templateId) {
        // New container from sidebar
        const template = containerTemplates.find(t => t.id === templateId);
        if (template) {
          const newContainer: ContainerInstance = {
            id: Math.random().toString(36).substr(2, 9),
            templateId,
            styles: { ...template.defaultStyles },
            content: null,
            position: {
              x: e.clientX - rect.left + scrollLeft,
              y: e.clientY - rect.top + scrollTop
            }
          };
          setContainers([...containers, newContainer]);
        }
      } else if (containerId && draggedId) {
        // Reposition existing container
        setContainers(containers.map(container => 
          container.id === draggedId
            ? {
                ...container,
                position: {
                  x: e.clientX - rect.left + scrollLeft,
                  y: e.clientY - rect.top + scrollTop
                }
              }
            : container
        ));
      }
    }
    setDraggedId(null);
  };

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('container', id);
    setDraggedId(id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleContainerClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedId(id === selectedId ? null : id);
  };

  const handleCanvasClick = () => {
    setSelectedId(null);
  };

  return (
    <div 
      ref={canvasRef}
      className="flex-1 bg-gray-50 p-4 md:p-8 overflow-auto"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={handleCanvasClick}
    >
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm min-h-[calc(100vh-4rem)] p-4 md:p-8 relative">
        {containers.map(container => {
          const template = containerTemplates.find(t => t.id === container.templateId);
          const IconComponent = template ? Icons[template.icon as keyof typeof Icons] : null;
          
          return (
            <div
              key={container.id}
              style={{
                position: 'absolute',
                left: container.position.x,
                top: container.position.y,
                ...container.styles
              }}
              className={`
                group transition-all duration-200
                ${selectedId === container.id ? 'ring-2 ring-blue-500' : ''}
                hover:ring-2 hover:ring-blue-200
              `}
              onClick={(e) => handleContainerClick(e, container.id)}
              draggable
              onDragStart={(e) => handleDragStart(e, container.id)}
            >
              <div className="relative">
                {IconComponent && (
                  <div className="absolute top-2 right-2 opacity-50 group-hover:opacity-100">
                    <IconComponent className="w-4 h-4" />
                  </div>
                )}
                <div className="text-sm text-gray-500">
                  {template?.name || 'Unknown Component'}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {selectedId && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-md">
          <h3 className="font-semibold mb-2">Selected Container</h3>
          <pre className="text-xs bg-gray-50 p-2 rounded overflow-auto max-h-40">
            {JSON.stringify(containers.find(c => c.id === selectedId), null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}