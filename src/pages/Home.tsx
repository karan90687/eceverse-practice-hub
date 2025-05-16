
import { Link } from 'react-router-dom';
import { CircuitBoard, Chip, ArrowRight, Component, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="space-y-24 py-8">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <CircuitBoard className="h-16 w-16 mx-auto text-ece-blue glow" />
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            ECE<span className="text-ece-blue">verse</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Practice. Learn. Connect.<br />
            <span className="text-ece-blue">The ECE Way.</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-ece-blue hover:bg-ece-blue/80 glow">
              <Link to="/practice">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-ece-blue/50 hover:border-ece-blue hover:text-ece-blue">
              <Link to="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
        
        {/* SVG circuit decoration */}
        <svg className="hidden md:block absolute bottom-0 left-0 w-full h-24 -mb-1" viewBox="0 0 1440 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,160 C320,100 520,240 720,160 C920,80 1120,220 1440,160 L1440,240 L0,240 Z" 
            fill="#00b4d8" 
            fillOpacity="0.05"
          />
          <path 
            className="stroke-ece-blue/30 animate-trace-flow" 
            d="M0,180 C280,120 580,260 720,180 C860,100 1160,240 1440,180" 
            strokeWidth="2" 
            strokeDasharray="6 6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </section>
      
      {/* Features Section */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">Experience Electronics Education <span className="text-ece-green">Reimagined</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-ece-circuit/20 backdrop-blur-sm border border-ece-circuit/50 rounded-lg p-6 hover:border-ece-blue/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-ece-blue/10 flex items-center justify-center mb-4">
                <Chip className="h-6 w-6 text-ece-blue" />
              </div>
              <h3 className="text-xl font-medium mb-2">Interactive Learning</h3>
              <p className="text-white/70">Subject-wise resources organized in intuitive flowcharts.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-ece-circuit/20 backdrop-blur-sm border border-ece-circuit/50 rounded-lg p-6 hover:border-ece-green/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-ece-green/10 flex items-center justify-center mb-4">
                <Component className="h-6 w-6 text-ece-green" />
              </div>
              <h3 className="text-xl font-medium mb-2">Practice Hub</h3>
              <p className="text-white/70">Curated practice questions for each topic to test your knowledge.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-ece-circuit/20 backdrop-blur-sm border border-ece-circuit/50 rounded-lg p-6 hover:border-ece-purple/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-ece-purple/10 flex items-center justify-center mb-4">
                <CircuitBoard className="h-6 w-6 text-ece-purple" />
              </div>
              <h3 className="text-xl font-medium mb-2">Community Forum</h3>
              <p className="text-white/70">Connect with fellow ECE students, ask questions, and share knowledge.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subject Categories Section */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">Explore Electronics <span className="text-ece-purple">Subjects</span></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Subject 1 */}
            <div className="group bg-ece-circuit/20 backdrop-blur-sm border border-ece-circuit/50 rounded-lg p-4 hover:border-ece-blue/50 transition-colors flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-ece-blue/10 flex items-center justify-center mb-3">
                <Chip className="h-6 w-6 text-ece-blue group-hover:animate-pulse-glow transition-all" />
              </div>
              <h3 className="text-lg font-medium">Digital Electronics</h3>
            </div>
            
            {/* Subject 2 */}
            <div className="group bg-ece-circuit/20 backdrop-blur-sm border border-ece-circuit/50 rounded-lg p-4 hover:border-ece-green/50 transition-colors flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-ece-green/10 flex items-center justify-center mb-3">
                <Component className="h-6 w-6 text-ece-green group-hover:animate-pulse-glow transition-all" />
              </div>
              <h3 className="text-lg font-medium">Microprocessors</h3>
            </div>
            
            {/* Subject 3 */}
            <div className="group bg-ece-circuit/20 backdrop-blur-sm border border-ece-circuit/50 rounded-lg p-4 hover:border-ece-purple/50 transition-colors flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-ece-purple/10 flex items-center justify-center mb-3">
                <Layers className="h-6 w-6 text-ece-purple group-hover:animate-pulse-glow transition-all" />
              </div>
              <h3 className="text-lg font-medium">VLSI Design</h3>
            </div>
            
            {/* Subject 4 */}
            <div className="group bg-ece-circuit/20 backdrop-blur-sm border border-ece-circuit/50 rounded-lg p-4 hover:border-ece-blue/50 transition-colors flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-ece-blue/10 flex items-center justify-center mb-3">
                <CircuitBoard className="h-6 w-6 text-ece-blue group-hover:animate-pulse-glow transition-all" />
              </div>
              <h3 className="text-lg font-medium">Signals & Systems</h3>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-ece-purple/50 hover:border-ece-purple hover:text-ece-purple">
              <Link to="/practice">
                View All Subjects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-r from-ece-blue/20 to-ece-purple/20 rounded-xl border border-white/10 overflow-hidden">
        <div className="circuit-overlay opacity-5"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to elevate your ECE knowledge?</h2>
          <p className="text-white/80 mb-8">Join the community of electronics enthusiasts and start your learning journey today.</p>
          <Button asChild size="lg" className="bg-ece-blue hover:bg-ece-blue/80 glow">
            <Link to="/signup">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
