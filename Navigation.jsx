import { useState, useEffect } from "react";
import { Menu, Search, Heart, ShoppingBag, X } from "lucide-react";
import { SiNike } from "react-icons/si";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-rich-black/95' : 'bg-rich-black/90'
    } backdrop-blur-md border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex items-center">
              <SiNike className="text-neon-green mr-2 text-3xl" />
              <span>NIKE</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-neon-green transition-colors">New Releases</a>
            <a href="#" className="hover:text-neon-green transition-colors">Men</a>
            <a href="#" className="hover:text-neon-green transition-colors">Women</a>
            <a href="#" className="hover:text-neon-green transition-colors">Kids</a>
            <a href="#" className="hover:text-neon-green transition-colors">Collections</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Search className="text-gray-400 hover:text-white cursor-pointer w-5 h-5" />
            <Heart className="text-gray-400 hover:text-white cursor-pointer w-5 h-5" />
            <ShoppingBag className="text-gray-400 hover:text-white cursor-pointer w-5 h-5" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-neon-green transition-colors">New Releases</a>
              <a href="#" className="hover:text-neon-green transition-colors">Men</a>
              <a href="#" className="hover:text-neon-green transition-colors">Women</a>
              <a href="#" className="hover:text-neon-green transition-colors">Kids</a>
              <a href="#" className="hover:text-neon-green transition-colors">Collections</a>
              <div className="flex items-center space-x-4 pt-4">
                <Search className="text-gray-400 hover:text-white cursor-pointer w-5 h-5" />
                <Heart className="text-gray-400 hover:text-white cursor-pointer w-5 h-5" />
                <ShoppingBag className="text-gray-400 hover:text-white cursor-pointer w-5 h-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
