
import { useState } from 'react';
import { CircuitBoard, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

type AuthMode = 'login' | 'signup';

interface AuthProps {
  mode?: AuthMode;
}

const Auth = ({ mode = 'login' }: AuthProps) => {
  const [authMode, setAuthMode] = useState<AuthMode>(mode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now just log the form data - would connect to backend auth system
    console.log({
      mode: authMode,
      email,
      password,
      ...(authMode === 'signup' && { name }),
    });
    
    // Show a toast notification
    toast({
      title: authMode === 'login' ? "Login Successful" : "Account Created",
      description: authMode === 'login' 
        ? "Welcome back to ECEverse!" 
        : "Your account has been created. Welcome to ECEverse!",
      duration: 3000,
    });
    
    // For demo purposes, redirect to homepage after a short delay
    setTimeout(() => {
      window.location.href = '/';
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-ece-dark to-ece-darker py-12 px-4">
      <div className="circuit-overlay"></div>
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <CircuitBoard className="h-8 w-8 text-ece-blue" />
            <span className="font-mono text-2xl font-bold tracking-tight">ECE<span className="text-ece-blue">verse</span></span>
          </Link>
        </div>
        
        <div className="bg-ece-circuit/20 backdrop-blur-sm border border-ece-circuit/50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">
              {authMode === 'login' ? 'Login to Your Account' : 'Create an Account'}
            </h1>
            <p className="text-white/60">
              {authMode === 'login' 
                ? 'Welcome back! Enter your details to continue learning.' 
                : 'Join the community of electronics enthusiasts.'}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {authMode === 'signup' && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name"
                  placeholder="John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-ece-darker border-ece-circuit focus:border-ece-blue"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email"
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-ece-darker border-ece-circuit focus:border-ece-blue"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password"
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-ece-darker border-ece-circuit focus:border-ece-blue"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-ece-blue hover:bg-ece-blue/80"
            >
              {authMode === 'login' ? 'Login' : 'Create Account'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-ece-circuit/50"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-ece-darker text-white/40">or</span>
              </div>
            </div>
            
            <Button 
              type="button"
              variant="outline"
              className="w-full border-ece-circuit hover:border-ece-blue hover:bg-ece-blue/10"
              onClick={() => console.log("Google sign-in would be implemented here")}
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>
            
            <div className="text-center mt-6">
              <p className="text-sm text-white/60">
                {authMode === 'login' 
                  ? "Don't have an account? " 
                  : "Already have an account? "}
                <button
                  type="button"
                  className="text-ece-blue hover:underline"
                  onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                >
                  {authMode === 'login' ? 'Sign up' : 'Login'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
