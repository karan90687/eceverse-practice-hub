
import React, { useState } from 'react';
import { CircuitBoard, Component, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Interface for subject nodes
interface SubjectNode {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  progress: number;
  color: string;
  position: { x: number; y: number };
  connections: string[];
}

// Sample data for the flowchart
const subjects: SubjectNode[] = [
  {
    id: 'basics',
    title: 'Basic Electronics',
    description: 'Fundamentals of electronic circuits and components',
    icon: CircuitBoard,
    progress: 75,
    color: 'blue',
    position: { x: 50, y: 20 },
    connections: ['digital', 'analog'],
  },
  {
    id: 'digital',
    title: 'Digital Electronics',
    description: 'Logic gates, circuits, and digital systems design',
    icon: Component,
    progress: 50,
    color: 'green',
    position: { x: 30, y: 50 },
    connections: ['microprocessors', 'embedded'],
  },
  {
    id: 'analog',
    title: 'Analog Electronics',
    description: 'Amplifiers, filters, and signal processing',
    icon: Component,
    progress: 25,
    color: 'purple',
    position: { x: 70, y: 50 },
    connections: ['signals', 'communication'],
  },
  {
    id: 'microprocessors',
    title: 'Microprocessors',
    description: 'Architecture and programming of microprocessors',
    icon: Component,
    progress: 10,
    color: 'blue',
    position: { x: 20, y: 80 },
    connections: [],
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    description: 'Design and implementation of embedded systems',
    icon: CircuitBoard,
    progress: 0,
    color: 'green',
    position: { x: 40, y: 80 },
    connections: [],
  },
  {
    id: 'signals',
    title: 'Signals & Systems',
    description: 'Analysis and processing of signals',
    icon: Component,
    progress: 30,
    color: 'purple',
    position: { x: 60, y: 80 },
    connections: [],
  },
  {
    id: 'communication',
    title: 'Communication Systems',
    description: 'Principles of electronic communication systems',
    icon: Component,
    progress: 5,
    color: 'blue',
    position: { x: 80, y: 80 },
    connections: [],
  },
];

const Practice = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  // Find the active subject when a node is clicked
  const activeSubject = activeNode ? subjects.find(s => s.id === activeNode) : null;
  
  return (
    <div className="py-8">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Practice Hub</h1>
        <p className="text-white/70 mb-8 max-w-2xl">
          Navigate through different ECE subjects organized as a flowchart. Click on a subject to view resources and practice questions.
        </p>
        
        {/* Flowchart Visualization */}
        <div className="relative bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-4 h-[600px] overflow-hidden mb-8">
          <div className="circuit-overlay opacity-5"></div>
          
          {/* Render connections between nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {subjects.map(subject => (
              subject.connections.map(targetId => {
                const target = subjects.find(s => s.id === targetId);
                if (!target) return null;
                
                // Calculate start and end positions for lines
                const startX = subject.position.x;
                const startY = subject.position.y;
                const endX = target.position.x;
                const endY = target.position.y;
                
                // Determine color based on subject
                let strokeColor = "#00b4d8";
                if (subject.color === 'green') strokeColor = "#4ade80";
                if (subject.color === 'purple') strokeColor = "#8b5cf6";
                
                return (
                  <g key={`${subject.id}-${targetId}`}>
                    <path 
                      d={`M${startX}% ${startY}% L${endX}% ${endY}%`}
                      stroke={strokeColor}
                      strokeWidth="2"
                      strokeOpacity="0.5"
                      strokeDasharray="5,5"
                    />
                    <circle 
                      cx={`${endX}%`} 
                      cy={`${endY}%`} 
                      r="3" 
                      fill={strokeColor} 
                    />
                  </g>
                );
              })
            ))}
          </svg>
          
          {/* Render nodes */}
          {subjects.map(subject => {
            const colorClasses = {
              blue: 'border-ece-blue/50 bg-ece-blue/10 hover:border-ece-blue',
              green: 'border-ece-green/50 bg-ece-green/10 hover:border-ece-green',
              purple: 'border-ece-purple/50 bg-ece-purple/10 hover:border-ece-purple',
            };
            
            const progressColorClasses = {
              blue: 'bg-ece-blue',
              green: 'bg-ece-green',
              purple: 'bg-ece-purple',
            };
            
            const isActive = activeNode === subject.id;
            const IconComponent = subject.icon;
            
            return (
              <div 
                key={subject.id}
                className={`absolute p-3 rounded-lg border backdrop-blur-sm w-[180px] cursor-pointer transition-all duration-300 
                  ${colorClasses[subject.color as keyof typeof colorClasses]} 
                  ${isActive ? 'ring-2 ring-white/50 shadow-lg' : ''}`}
                style={{ 
                  left: `calc(${subject.position.x}% - 90px)`, 
                  top: `${subject.position.y}%`,
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                }}
                onClick={() => setActiveNode(subject.id)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${subject.color === 'blue' ? 'bg-ece-blue/20' : subject.color === 'green' ? 'bg-ece-green/20' : 'bg-ece-purple/20'}`}>
                    <IconComponent className={`h-4 w-4 ${subject.color === 'blue' ? 'text-ece-blue' : subject.color === 'green' ? 'text-ece-green' : 'text-ece-purple'}`} />
                  </div>
                  <h3 className="text-sm font-medium">{subject.title}</h3>
                </div>
                
                <div className="mb-2 text-xs text-white/70">{subject.description}</div>
                
                {/* Progress bar */}
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${progressColorClasses[subject.color as keyof typeof progressColorClasses]}`}
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
                <div className="mt-1 text-xs text-right text-white/50">
                  {subject.progress}% complete
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Selected Subject Details */}
        {activeSubject ? (
          <div className={`border rounded-lg p-6
            ${activeSubject.color === 'blue' ? 'border-ece-blue/50' : 
              activeSubject.color === 'green' ? 'border-ece-green/50' : 
              'border-ece-purple/50'}`}>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center
                  ${activeSubject.color === 'blue' ? 'bg-ece-blue/20' : 
                    activeSubject.color === 'green' ? 'bg-ece-green/20' : 
                    'bg-ece-purple/20'}`}>
                  <activeSubject.icon 
                    className={`h-6 w-6
                      ${activeSubject.color === 'blue' ? 'text-ece-blue' : 
                        activeSubject.color === 'green' ? 'text-ece-green' : 
                        'text-ece-purple'}`} 
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{activeSubject.title}</h2>
                  <p className="text-white/70">{activeSubject.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="bg-white/10 px-3 py-1 rounded text-sm">
                  Progress: {activeSubject.progress}%
                </div>
                <Button variant="ghost" size="sm" onClick={() => setActiveNode(null)}>
                  Close
                </Button>
              </div>
            </div>
            
            {/* Resources & Practice Questions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Learning Resources */}
              <div className="bg-ece-circuit/20 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-4">Learning Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 p-2 rounded hover:bg-white/5">
                    <CircuitBoard className="h-4 w-4 text-ece-blue" />
                    <div>
                      <p className="font-medium">Introduction to {activeSubject.title}</p>
                      <p className="text-sm text-white/60">PDF • 25 pages</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 p-2 rounded hover:bg-white/5">
                    <Component className="h-4 w-4 text-ece-green" />
                    <div>
                      <p className="font-medium">Video Tutorial Series</p>
                      <p className="text-sm text-white/60">Video • 5 lessons</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 p-2 rounded hover:bg-white/5">
                    <Component className="h-4 w-4 text-ece-purple" />
                    <div>
                      <p className="font-medium">Interactive Lab Simulation</p>
                      <p className="text-sm text-white/60">Simulation • 3 modules</p>
                    </div>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto text-ece-blue flex items-center">
                      View all resources
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </li>
                </ul>
              </div>
              
              {/* Practice Questions */}
              <div className="bg-ece-circuit/20 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-4">Practice Questions</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 p-2 rounded hover:bg-white/5">
                    <div className="h-5 w-5 rounded-full border border-ece-green/50 flex items-center justify-center text-xs text-ece-green">1</div>
                    <div>
                      <p className="font-medium">Beginner Level Questions</p>
                      <p className="text-sm text-white/60">10 questions • Multiple choice</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 p-2 rounded hover:bg-white/5">
                    <div className="h-5 w-5 rounded-full border border-ece-blue/50 flex items-center justify-center text-xs text-ece-blue">2</div>
                    <div>
                      <p className="font-medium">Intermediate Level Questions</p>
                      <p className="text-sm text-white/60">8 questions • Problem solving</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 p-2 rounded hover:bg-white/5">
                    <div className="h-5 w-5 rounded-full border border-ece-purple/50 flex items-center justify-center text-xs text-ece-purple">3</div>
                    <div>
                      <p className="font-medium">Advanced Level Questions</p>
                      <p className="text-sm text-white/60">5 questions • Design challenges</p>
                    </div>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto text-ece-blue flex items-center">
                      Start practicing
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-8 bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg">
            <Component className="h-12 w-12 mx-auto text-ece-blue mb-4 opacity-75" />
            <h3 className="text-xl font-medium mb-2">Select a Subject</h3>
            <p className="text-white/70 max-w-md mx-auto">
              Click on any subject in the flowchart above to view its resources and practice questions.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Practice;
