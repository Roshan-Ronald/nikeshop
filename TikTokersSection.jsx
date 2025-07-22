import { Play } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const tiktokers = [
  {
    id: 1,
    name: "@FitnessQueen",
    followers: "2.3M",
    content: "Workout routines & Nike gear reviews",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    color: "text-neon-green"
  },
  {
    id: 2,
    name: "@UrbanStyle",
    followers: "1.8M",
    content: "Street style & sneaker culture",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    color: "text-electric-purple"
  },
  {
    id: 3,
    name: "@CourtKing",
    followers: "3.1M",
    content: "Basketball skills & gear reviews",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    color: "text-coral-pink"
  }
];

export default function TikTokersSection() {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            TRENDING
            <span className="text-transparent bg-clip-text bg-gradient-purple ml-4">CREATORS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how your favorite influencers are styling their Nike gear
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiktokers.map((tiktoker) => (
            <div key={tiktoker.id} className="group relative bg-dark-surface rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <img 
                src={tiktoker.image} 
                alt={`${tiktoker.name} content creator`} 
                className="w-full h-64 object-cover" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/90 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{tiktoker.name}</h3>
                  <div className={`flex items-center space-x-2 ${tiktoker.color}`}>
                    <SiTiktok />
                    <span>{tiktoker.followers}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{tiktoker.content}</p>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-all">
                  <Play className="text-white text-2xl ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}