
import { useState } from 'react';
import { CircuitBoard, Component, Search, Filter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Sample mock data for forum posts
const posts = [
  {
    id: 1,
    title: "Help with MOSFET biasing in amplifier circuit",
    author: "circuit_wizard",
    authorAvatar: "CW",
    tags: ["analog", "amplifiers"],
    content: "I'm working on a MOSFET common-source amplifier and having trouble with the biasing arrangement. The gain is much lower than expected...",
    votes: 12,
    replies: 6,
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    title: "Best FPGA development board for beginners?",
    author: "digital_dave",
    authorAvatar: "DD",
    tags: ["fpga", "digital"],
    content: "I'm looking to get started with FPGAs for the first time. Which development board would you recommend for a beginner with some Verilog knowledge?",
    votes: 24,
    replies: 15,
    timestamp: "1 day ago",
  },
  {
    id: 3,
    title: "Difference between FFT and DFT in practice",
    author: "signal_sam",
    authorAvatar: "SS",
    tags: ["signals", "dsp"],
    content: "I understand the theoretical difference between FFT and DFT, but when should I use one over the other in real applications?",
    votes: 18,
    replies: 8,
    timestamp: "3 days ago",
  },
  {
    id: 4,
    title: "Arduino vs STM32 for motor control project",
    author: "embedded_emma",
    authorAvatar: "EE",
    tags: ["embedded", "microcontrollers"],
    content: "I'm building a precision motor control system for a robotics project. Should I use an Arduino or step up to an STM32 microcontroller?",
    votes: 15,
    replies: 12,
    timestamp: "5 days ago",
  },
];

// Sample tags for filtering
const tags = [
  { name: "analog", color: "blue" },
  { name: "digital", color: "green" },
  { name: "fpga", color: "purple" },
  { name: "microcontrollers", color: "blue" },
  { name: "signals", color: "green" },
  { name: "dsp", color: "purple" },
  { name: "embedded", color: "blue" },
  { name: "vlsi", color: "green" },
];

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest"); // Options: newest, votes, replies
  
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  // Filter posts based on search query and selected tags
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
                       post.tags.some(tag => selectedTags.includes(tag));
    
    return matchesSearch && matchesTags;
  });
  
  return (
    <div className="py-8">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Community Forum</h1>
            <p className="text-white/70">
              Connect with fellow electronics enthusiasts, ask questions, and share knowledge.
            </p>
          </div>
          <Button className="bg-ece-blue hover:bg-ece-blue/80">
            Ask a Question
          </Button>
        </div>
        
        {/* Search and Filter Controls */}
        <div className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-4 mb-8">
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-ece-darker border-ece-circuit"
              />
            </div>
            <div className="w-full md:w-auto flex items-center gap-2">
              <Filter className="h-4 w-4 text-white/60" />
              <span className="text-sm text-white/60">Filter:</span>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <button
                    key={tag.name}
                    onClick={() => toggleTag(tag.name)}
                    className={`px-2 py-1 text-xs rounded-full border transition-colors ${
                      selectedTags.includes(tag.name)
                        ? tag.color === 'blue' ? 'bg-ece-blue/20 border-ece-blue text-ece-blue' 
                          : tag.color === 'green' ? 'bg-ece-green/20 border-ece-green text-ece-green' 
                          : 'bg-ece-purple/20 border-ece-purple text-ece-purple'
                        : 'border-ece-circuit/50 text-white/60 hover:border-white/40'
                    }`}
                  >
                    #{tag.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Forum Posts */}
        <div className="space-y-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <div key={post.id} className="bg-ece-circuit/20 border border-ece-circuit/50 rounded-lg p-4 hover:border-white/20 transition-colors">
                <div className="flex flex-wrap gap-4">
                  {/* Vote Counter */}
                  <div className="hidden sm:flex flex-col items-center px-2">
                    <button className="text-white/40 hover:text-white">▲</button>
                    <span className="my-1 font-medium">{post.votes}</span>
                    <button className="text-white/40 hover:text-white">▼</button>
                  </div>
                  
                  {/* Post Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-medium hover:text-ece-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 line-clamp-2">{post.content}</p>
                    
                    <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-ece-blue/20 flex items-center justify-center text-xs">
                          {post.authorAvatar}
                        </div>
                        <span className="text-white/60">{post.author}</span>
                      </div>
                      <span className="text-white/40">{post.timestamp}</span>
                      <div className="flex gap-2">
                        {post.tags.map(tag => (
                          <span key={tag} className="text-ece-blue hover:underline cursor-pointer">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-white/60">{post.replies} {post.replies === 1 ? 'reply' : 'replies'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-12 bg-ece-circuit/10 border border-ece-circuit/30 rounded-lg">
              <CircuitBoard className="h-12 w-12 mx-auto text-white/30 mb-4" />
              <h3 className="text-xl font-medium mb-2">No posts found</h3>
              <p className="text-white/60 mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchQuery("");
                setSelectedTags([]);
              }}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
        
        {/* Pagination or Load More */}
        {filteredPosts.length > 0 && (
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-ece-purple/50 hover:border-ece-purple hover:bg-ece-purple/10">
              Load More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Community;
