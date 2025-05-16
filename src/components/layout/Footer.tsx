
import { CircuitBoard, Chip, Home, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-ece-circuit/30 mt-auto">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <CircuitBoard className="h-5 w-5 text-ece-blue" />
              <span className="font-mono text-lg font-bold">ECE<span className="text-ece-blue">verse</span></span>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Practice. Learn. Connect.<br />
              The ECE Way.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-4 text-white/80">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-white/60 hover:text-ece-blue transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/practice" className="text-white/60 hover:text-ece-green transition-colors">Practice Hub</Link>
                </li>
                <li>
                  <Link to="/community" className="text-white/60 hover:text-ece-purple transition-colors">Community Forum</Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white/80">Account</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/login" className="text-white/60 hover:text-ece-blue transition-colors">Login</Link>
                </li>
                <li>
                  <Link to="/signup" className="text-white/60 hover:text-ece-blue transition-colors">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-white/80">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-ece-blue">
                <Home className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/60 hover:text-ece-blue">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-white/60 hover:text-ece-blue">
                <Chip className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-ece-circuit/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ECEverse. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-white/40">
            <Link to="/privacy" className="hover:text-white/60">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/60">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
