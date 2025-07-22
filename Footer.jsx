import { SiNike, SiInstagram, SiX, SiYoutube, SiTiktok } from "react-icons/si";

const footerSections = [
  {
    title: "Products",
    links: ["Shoes", "Clothing", "Accessories", "Collections"]
  },
  {
    title: "Sports",
    links: ["Running", "Basketball", "Training", "Lifestyle"]
  },
  {
    title: "Support",
    links: ["Help", "Returns", "Shipping", "Contact Us"]
  }
];

const socialLinks = [
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiX, href: "#", label: "X (Twitter)" },
  { icon: SiYoutube, href: "#", label: "YouTube" },
  { icon: SiTiktok, href: "#", label: "TikTok" }
];

export default function Footer() {
  return (
    <footer className="bg-dark-surface py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold flex items-center">
              <SiNike className="text-neon-green mr-2 text-3xl" />
              <span>NIKE</span>
            </div>
            <p className="text-gray-400">
              Bringing inspiration and innovation to every athlete in the world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="text-gray-400 hover:text-neon-green transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Nike, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}