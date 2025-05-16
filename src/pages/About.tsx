
import { CircuitBoard, Chip, Component, Layers } from 'lucide-react';

const About = () => {
  return (
    <div className="py-8">
      <section className="max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About ECE<span className="text-ece-blue">verse</span></h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            A modern learning platform designed specifically for Electronics and Communication Engineering students.
            Our mission is to provide accessible, high-quality education resources and build a supportive community of ECE enthusiasts.
          </p>
        </div>
        
        {/* Our Mission */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b border-ece-circuit/50 pb-2">Our Mission</h2>
          <div className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-6">
            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 rounded-full bg-ece-blue/10 flex-shrink-0 flex items-center justify-center">
                <CircuitBoard className="h-6 w-6 text-ece-blue" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Democratizing Electronics Education</h3>
                <p className="text-white/70">
                  We believe that quality education in electronics and communication engineering should be 
                  accessible to everyone. ECEverse is built to break down barriers to learning complex 
                  electronics concepts through interactive resources, visual learning aids, and a supportive 
                  community platform.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* What We Offer */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b border-ece-circuit/50 pb-2">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-6">
              <div className="h-12 w-12 rounded-full bg-ece-green/10 flex items-center justify-center mb-4">
                <Component className="h-6 w-6 text-ece-green" />
              </div>
              <h3 className="text-xl font-medium mb-2">Structured Learning Paths</h3>
              <p className="text-white/70">
                Our flowchart-based learning paths guide you through electronics subjects in a logical, 
                progressive manner. Each topic connects to related concepts, helping you build a 
                comprehensive understanding of electronics engineering.
              </p>
            </div>
            
            <div className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-6">
              <div className="h-12 w-12 rounded-full bg-ece-purple/10 flex items-center justify-center mb-4">
                <Chip className="h-6 w-6 text-ece-purple" />
              </div>
              <h3 className="text-xl font-medium mb-2">Practice-Oriented Approach</h3>
              <p className="text-white/70">
                We emphasize learning by doing. Our platform provides numerous practice problems, 
                interactive circuit simulations, and hands-on projects to reinforce theoretical concepts.
                Track your progress and gradually tackle more advanced challenges.
              </p>
            </div>
            
            <div className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-6">
              <div className="h-12 w-12 rounded-full bg-ece-blue/10 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-ece-blue" />
              </div>
              <h3 className="text-xl font-medium mb-2">Curated Resources</h3>
              <p className="text-white/70">
                We've gathered the best learning materials from around the web and created original content 
                to supplement them. From textbook references to video tutorials and interactive simulations, 
                we provide a diverse range of resources for different learning styles.
              </p>
            </div>
            
            <div className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-6">
              <div className="h-12 w-12 rounded-full bg-ece-green/10 flex items-center justify-center mb-4">
                <CircuitBoard className="h-6 w-6 text-ece-green" />
              </div>
              <h3 className="text-xl font-medium mb-2">Supportive Community</h3>
              <p className="text-white/70">
                Learning electronics is more effective when done together. Our community forum connects you 
                with fellow students and experienced engineers who can help answer questions, provide feedback, 
                and share insights from industry experience.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b border-ece-circuit/50 pb-2">Our Team</h2>
          <p className="text-white/70 mb-6">
            ECEverse is built by a passionate team of electronics engineers, educators, and software developers 
            who believe in the power of accessible education.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-6 text-center">
              <div className="h-24 w-24 rounded-full bg-ece-blue/10 mx-auto mb-4 flex items-center justify-center">
                <Component className="h-10 w-10 text-ece-blue" />
              </div>
              <h3 className="text-lg font-medium">Dr. Sarah Chen</h3>
              <p className="text-white/60">Founder & Electronics Educator</p>
            </div>
            
            <div className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-6 text-center">
              <div className="h-24 w-24 rounded-full bg-ece-green/10 mx-auto mb-4 flex items-center justify-center">
                <Chip className="h-10 w-10 text-ece-green" />
              </div>
              <h3 className="text-lg font-medium">Prof. Michael Rivera</h3>
              <p className="text-white/60">Content Director</p>
            </div>
            
            <div className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-6 text-center">
              <div className="h-24 w-24 rounded-full bg-ece-purple/10 mx-auto mb-4 flex items-center justify-center">
                <CircuitBoard className="h-10 w-10 text-ece-purple" />
              </div>
              <h3 className="text-lg font-medium">Jamie Wilson</h3>
              <p className="text-white/60">Lead Developer</p>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b border-ece-circuit/50 pb-2">Contact Us</h2>
          <div className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-6">
            <p className="text-white/70 mb-4">
              Have questions, suggestions, or feedback? We'd love to hear from you!
            </p>
            <div className="space-y-2 text-white/60">
              <p>✉️ Email: contact@eceverse.edu</p>
              <p>🌐 Social Media: @ECEverse</p>
              <p>📍 Location: Global (Remote)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
