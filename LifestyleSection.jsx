import { Dumbbell, TrainTrack, Star } from "lucide-react";

const features = [
  {
    icon: TrainTrack,
    title: "Performance First",
    description: "Engineered for athletes who demand excellence in every step, jump, and sprint.",
    color: "bg-neon-green text-rich-black"
  },
  {
    icon: Dumbbell,
    title: "Built to Last",
    description: "Premium materials and innovative design for long-lasting durability and comfort.",
    color: "bg-electric-purple text-white"
  },
  {
    icon: Star,
    title: "Style Meets Function",
    description: "From the court to the street, our designs transition seamlessly with your lifestyle.",
    color: "bg-coral-pink text-white"
  }
];

const lifestyleImages = [
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
    alt: "Person doing yoga in Nike activewear",
    className: "rounded-2xl h-64 object-cover"
  },
  {
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    alt: "Basketball player shooting hoops in Nike gear",
    className: "rounded-2xl h-40 object-cover mt-8"
  },
  {
    src: "https://images.unsplash.com/photo-1544991875-5dc1b05f607d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    alt: "Athlete running on track in Nike gear",
    className: "rounded-2xl h-40 object-cover"
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
    alt: "Urban lifestyle Nike sneakers",
    className: "rounded-2xl h-64 object-cover"
  }
];

export default function LifestyleSection() {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              MOVE YOUR
              <span className="text-transparent bg-clip-text bg-gradient-neon ml-4">WORLD</span>
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${feature.color} rounded-full p-3`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {lifestyleImages.map((image, index) => (
              <img 
                key={index}
                src={image.src} 
                alt={image.alt} 
                className={image.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}