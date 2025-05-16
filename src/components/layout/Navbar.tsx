
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CircuitBoard, Chip, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="relative z-40 w-full border-b border-ece-circuit/30 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <CircuitBoard className="h-6 w-6 text-ece-blue animate-pulse-glow" />
            <span className="font-mono text-xl font-bold tracking-tight">ECE<span className="text-ece-blue">verse</span></span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-ece-blue transition-colors">Home</Link>
          <Link to="/practice" className="text-sm font-medium hover:text-ece-green transition-colors">Practice Hub</Link>
          <Link to="/community" className="text-sm font-medium hover:text-ece-purple transition-colors">Community Forum</Link>
          <Link to="/about" className="text-sm font-medium hover:text-white/80 transition-colors">About Us</Link>
          <div className="pl-6 border-l border-ece-circuit/50">
            <Button asChild variant="outline" className="border-ece-blue/50 hover:border-ece-blue hover:text-ece-blue">
              <Link to="/login">Login</Link>
            </Button>
          </div>
          <Button asChild className="bg-ece-blue hover:bg-ece-blue/80">
            <Link to="/signup">Signup</Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-white hover:bg-ece-circuit"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-ece-darker/95 backdrop-blur-md border-b border-ece-circuit/30 transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="container py-4 flex flex-col gap-4">
          <Link to="/" className="p-2 hover:bg-ece-circuit/20 rounded-md flex items-center gap-2" onClick={toggleMenu}>
            <Chip className="h-4 w-4 text-ece-blue" />
            Home
          </Link>
          <Link to="/practice" className="p-2 hover:bg-ece-circuit/20 rounded-md flex items-center gap-2" onClick={toggleMenu}>
            <Chip className="h-4 w-4 text-ece-green" />
            Practice Hub
          </Link>
          <Link to="/community" className="p-2 hover:bg-ece-circuit/20 rounded-md flex items-center gap-2" onClick={toggleMenu}>
            <Chip className="h-4 w-4 text-ece-purple" />
            Community Forum
          </Link>
          <Link to="/about" className="p-2 hover:bg-ece-circuit/20 rounded-md flex items-center gap-2" onClick={toggleMenu}>
            <CircuitBoard className="h-4 w-4 text-white" />
            About Us
          </Link>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <Button asChild variant="outline" className="border-ece-blue/50 hover:border-ece-blue hover:text-ece-blue">
              <Link to="/login" onClick={toggleMenu}>Login</Link>
            </Button>
            <Button asChild className="bg-ece-blue hover:bg-ece-blue/80">
              <Link to="/signup" onClick={toggleMenu}>Signup</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
