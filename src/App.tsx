import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

function App() {
  const [containers, setContainers] = useState([]);

  return (
    <div className="h-screen flex flex-col">
      <Toolbar containers={containers} />
      <div className="flex-1 flex">
        <Sidebar />
        <Canvas />
      </div>
    </div>
  );
}

export default App;