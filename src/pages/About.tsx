
import { CircuitBoard, Component, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="py-8">
      <section className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <CircuitBoard className="h-12 w-12 mx-auto text-ece-blue mb-2" />
          <h1 className="text-3xl md:text-4xl font-bold">About ECE<span className="text-ece-blue">verse</span></h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We're building the ultimate learning platform for electronics and communication engineering students.
          </p>
        </div>
        
        {/* Our Mission */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <div className="bg-ece-circuit/20 rounded-lg p-6 border border-ece-circuit/50">
            <p className="text-white/80 leading-relaxed">
              ECEverse was created with a single mission: to make electronics education more accessible, 
              interactive, and enjoyable. We believe that learning complex electronics concepts should be 
              structured in a way that makes sense, with clear pathways from fundamentals to advanced topics.
            </p>
            <p className="text-white/80 leading-relaxed mt-4">
              By combining structured learning pathways, interactive practice, and community support, 
              we're creating an ecosystem where students can truly master electronics and communication engineering.
            </p>
          </div>
        </div>
        
        {/* What We Offer */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-ece-circuit/20 rounded-lg p-6 border border-ece-blue/30">
              <Component className="h-8 w-8 text-ece-blue mb-4" />
              <h3 className="text-xl font-medium mb-2">Structured Learning</h3>
              <p className="text-white/70">
                Subject-wise resources organized in intuitive flowcharts, allowing you to see connections between topics.
              </p>
            </div>
            
            <div className="bg-ece-circuit/20 rounded-lg p-6 border border-ece-green/30">
              <Component className="h-8 w-8 text-ece-green mb-4" />
              <h3 className="text-xl font-medium mb-2">Practice Hub</h3>
              <p className="text-white/70">
                Curated practice questions for each topic to test your knowledge and reinforce learning.
              </p>
            </div>
            
            <div className="bg-ece-circuit/20 rounded-lg p-6 border border-ece-purple/30">
              <CircuitBoard className="h-8 w-8 text-ece-purple mb-4" />
              <h3 className="text-xl font-medium mb-2">Community Forum</h3>
              <p className="text-white/70">
                Connect with fellow ECE students, ask questions, and share knowledge in our supportive community.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Team</h2>
          <div className="bg-ece-circuit/20 rounded-lg p-6 border border-ece-circuit/50">
            <p className="text-white/80 leading-relaxed">
              ECEverse is built by a team of passionate electronics engineers, educators, and developers 
              who understand the challenges of learning complex technical subjects. 
            </p>
            <p className="text-white/80 leading-relaxed mt-4">
              We've experienced firsthand the gaps in traditional electronics education, and we're committed 
              to creating a platform that bridges those gaps with intuitive learning paths and practical resources.
            </p>
          </div>
        </div>
        
        {/* Join Us */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Join Our Community</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Whether you're a student just starting your ECE journey or an experienced professional looking to 
            share knowledge, ECEverse is the platform for you.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-ece-blue hover:bg-ece-blue/80">
              <Link to="/signup">
                Create an Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-ece-circuit hover:border-ece-blue hover:text-ece-blue">
              <Link to="/community">
                Explore Community
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
