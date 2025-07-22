import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Air Force 1 '07",
    category: "Men's Shoes",
    price: "$110",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    colors: ["bg-white", "bg-rich-black", "bg-neon-green"],
    badge: "NEW",
    badgeColor: "bg-neon-green text-rich-black",
    buttonColor: "bg-gradient-neon text-rich-black"
  },
  {
    id: 2,
    name: "Air Max 270",
    category: "Men's Shoes",
    price: "$150",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    colors: ["bg-rich-black", "bg-gray-600", "bg-electric-purple"],
    buttonColor: "bg-gradient-purple text-white"
  },
  {
    id: 3,
    name: "Air Jordan 1 Retro",
    category: "Basketball Shoes",
    price: "$170",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    colors: ["bg-coral-pink", "bg-rich-black", "bg-white"],
    badge: "LIMITED",
    badgeColor: "bg-coral-pink text-white",
    buttonColor: "bg-coral-pink text-white"
  },
  {
    id: 4,
    name: "React Infinity Run",
    category: "Running Shoes",
    price: "$160",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    colors: ["bg-neon-green", "bg-yellow-400", "bg-blue-500"],
    buttonColor: "bg-gradient-neon text-rich-black"
  }
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-rich-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            FEATURED
            <span className="text-transparent bg-clip-text bg-gradient-neon ml-4">DROPS</span>
          </h2>
          <p className="text-gray-400 text-lg">The latest and greatest from Nike</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-dark-surface rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className={`${product.badgeColor} px-3 py-1 rounded-full text-sm font-semibold`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                
                <div className="absolute top-4 right-4">
                  <button className="bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-all">
                    <Heart className="text-white w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm">{product.category}</p>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {product.colors.map((color, index) => (
                      <div key={index} className={`w-6 h-6 ${color} rounded-full border-2 border-gray-300`}></div>
                    ))}
                  </div>
                  <span className="text-2xl font-bold">{product.price}</span>
                </div>
                
                <button className={`w-full ${product.buttonColor} py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}>
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}