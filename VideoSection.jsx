import { Play, Volume2, Maximize } from "lucide-react";

const videoStats = [
  { label: "Views", value: "2.4M", color: "text-neon-green" },
  { label: "Likes", value: "156K", color: "text-electric-purple" },
  { label: "Shares", value: "23K", color: "text-coral-pink" }
];

export default function VideoSection() {
  return (
    <section className="py-20 bg-rich-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            SEE IT IN
            <span className="text-transparent bg-clip-text bg-gradient-purple ml-4">ACTION</span>
          </h2>
          <p className="text-gray-400 text-lg">Experience the innovation behind every step</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-dark-surface aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=675" 
              alt="Nike athletes in action video thumbnail" 
              className="w-full h-full object-cover" 
            />
            
            <div className="absolute inset-0 bg-rich-black/40 flex items-center justify-center">
              <button className="group bg-white/20 backdrop-blur-md rounded-full p-8 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Play className="text-white text-4xl ml-2 group-hover:text-neon-green transition-colors" />
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <button className="text-white hover:text-neon-green transition-colors">
                      <Play className="w-5 h-5" />
                    </button>
                    <button className="text-white hover:text-neon-green transition-colors">
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <span className="text-sm text-gray-300">0:00 / 2:30</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="text-white hover:text-neon-green transition-colors">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-neon h-2 rounded-full w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {videoStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}