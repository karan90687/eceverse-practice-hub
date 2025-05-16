
import React, { useState } from 'react';
import { CircuitBoard, Component, ArrowRight, BookOpen, MessageSquare, Filter, Search, BookText, Video, Audio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample forum posts for demo
const forumPosts = [
  {
    id: 1,
    title: "Help with RC circuit analysis",
    author: "circuit_enthusiast",
    tags: ["Circuit Analysis", "Basic Electronics"],
    upvotes: 15,
    responses: 7,
    excerpt: "I'm trying to understand how to calculate the time constant in an RC circuit when...",
    timestamp: "2 days ago"
  },
  {
    id: 2,
    title: "Recommended FPGA starter kit for beginners?",
    author: "digital_designer",
    tags: ["FPGA", "Digital Electronics"],
    upvotes: 24,
    responses: 12,
    excerpt: "I want to get started with FPGA programming but I'm not sure which development board...",
    timestamp: "1 week ago"
  },
  {
    id: 3,
    title: "Difference between MEMS and traditional accelerometers",
    author: "sensor_geek",
    tags: ["Sensors", "MEMS"],
    upvotes: 8,
    responses: 3,
    excerpt: "Could someone explain the key differences in performance and applications between...",
    timestamp: "4 hours ago"
  }
];

// Sample learning resources for the new learning section
const learningResources = [
  {
    id: 1,
    title: "Fundamentals of Circuit Theory",
    type: "course",
    format: "video",
    icon: Video,
    author: "Prof. Sarah Chen",
    duration: "8 hours",
    level: "Beginner",
    description: "A comprehensive course covering basic circuit analysis, Ohm's law, Kirchhoff's laws, and more."
  },
  {
    id: 2,
    title: "Digital Logic Design",
    type: "tutorial",
    format: "article",
    icon: BookText,
    author: "Michael Johnson",
    duration: "45 min read",
    level: "Intermediate",
    description: "Learn about combinational and sequential logic circuits, Boolean algebra, and logic gates."
  },
  {
    id: 3,
    title: "Embedded Systems Programming",
    type: "workshop",
    format: "interactive",
    icon: Component,
    author: "Tech Academy",
    duration: "5 hours",
    level: "Advanced",
    description: "Hands-on workshop for programming microcontrollers and building embedded applications."
  },
  {
    id: 4,
    title: "Signal Processing Basics",
    type: "podcast",
    format: "audio",
    icon: Audio,
    author: "ECE TalkShow",
    duration: "3 episodes",
    level: "Intermediate",
    description: "Audio series explaining sampling, filtering, and Fourier transforms in an accessible way."
  }
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("forum");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="py-8">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Community Hub</h1>
            <p className="text-white/70 max-w-2xl">
              Connect with fellow ECE students, share knowledge, ask questions, and access curated learning resources.
            </p>
          </div>
          <Button asChild className="bg-ece-purple hover:bg-ece-purple/80">
            <a href="#">
              New Post
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Tabs for Forum and Learning */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 bg-ece-circuit/30 border border-ece-circuit/50">
            <TabsTrigger 
              value="forum" 
              className="data-[state=active]:bg-ece-purple/20 data-[state=active]:text-ece-purple"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Discussion Forum
            </TabsTrigger>
            <TabsTrigger 
              value="learning" 
              className="data-[state=active]:bg-ece-green/20 data-[state=active]:text-ece-green"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Learning Resources
            </TabsTrigger>
          </TabsList>

          {/* Forum Content */}
          <TabsContent value="forum">
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                <Input 
                  placeholder="Search discussions..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-ece-circuit/20 border-ece-circuit/50 focus-visible:ring-ece-purple focus-visible:border-ece-purple/50"
                />
              </div>
              <Button variant="outline" className="border-ece-circuit/50 hover:border-ece-purple/50 hover:bg-ece-purple/10">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {forumPosts.map(post => (
                <div key={post.id} className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-4 hover:border-ece-purple/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <h3 className="font-medium text-lg">{post.title}</h3>
                    <span className="text-white/50 text-sm">{post.timestamp}</span>
                  </div>
                  <p className="text-white/70 mt-1 mb-3">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <div className="flex items-center text-white/60 text-xs">
                      <CircuitBoard className="h-3 w-3 mr-1" />
                      {post.upvotes} upvotes
                    </div>
                    <div className="flex items-center text-white/60 text-xs">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      {post.responses} responses
                    </div>
                    <div className="flex-grow"></div>
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-ece-purple/10 text-ece-purple px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" className="border-ece-circuit/50 hover:border-ece-purple/50">
                Load more posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          {/* Learning Resources Content */}
          <TabsContent value="learning">
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                <Input 
                  placeholder="Search learning resources..." 
                  className="pl-10 bg-ece-circuit/20 border-ece-circuit/50 focus-visible:ring-ece-green focus-visible:border-ece-green/50"
                />
              </div>
              <Button variant="outline" className="border-ece-circuit/50 hover:border-ece-green/50 hover:bg-ece-green/10">
                <Filter className="mr-2 h-4 w-4" />
                Filter by Type
              </Button>
            </div>

            {/* Learning Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningResources.map(resource => {
                const IconComponent = resource.icon;
                
                return (
                  <div key={resource.id} className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-4 hover:border-ece-green/50 transition-all hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-ece-green/10 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-ece-green" />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-medium text-lg">{resource.title}</h3>
                        <p className="text-white/70 text-sm mb-3">{resource.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="text-xs bg-ece-green/10 text-ece-green px-2 py-0.5 rounded-full">
                            {resource.format}
                          </span>
                          <span className="text-xs bg-ece-circuit/30 text-white/80 px-2 py-0.5 rounded-full">
                            {resource.duration}
                          </span>
                          <span className="text-xs bg-ece-circuit/30 text-white/80 px-2 py-0.5 rounded-full">
                            {resource.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Learning Resources Section */}
            <div className="mt-8 bg-ece-green/5 border border-ece-green/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-ece-green" />
                <h2 className="text-xl font-bold">Community Contributed Resources</h2>
              </div>
              
              <p className="text-white/70 mb-4">
                These are learning resources shared by our community members. You can also contribute your own materials to help others learn.
              </p>
              
              <Button className="bg-ece-green hover:bg-ece-green/80">
                Contribute Learning Material
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Community Guidelines */}
        <div className="mt-12 bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Community Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Be respectful and helpful to fellow community members</li>
            <li>Properly tag your questions to help others find them</li>
            <li>Search for existing questions before creating a new post</li>
            <li>Share your knowledge and expertise with others</li>
            <li>Provide detailed information when asking questions</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Community;
