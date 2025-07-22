import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-neon">
      <div className="absolute inset-0 bg-rich-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                JUST
                <span className="block text-rich-black">DO IT</span>
              </h1>
              <p className="text-xl text-white/80 max-w-md">
                Unleash your potential with our latest collection of performance footwear designed for champions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-rich-black text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-rich-black transition-all duration-300 transform hover:scale-105">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-rich-black transition-all duration-300">
                Watch Film
              </button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Nike Air Jordan sneakers floating" 
              className="w-full max-w-md mx-auto animate-float drop-shadow-2xl" 
            />
            
            <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="text-white text-xl" />
        </div>
      </div>
    </section>
  );
}