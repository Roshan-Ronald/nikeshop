import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    // Normally you'd send the email to your backend here
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-neon">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-rich-black mb-6">
          STAY IN THE LOOP
        </h2>
        <p className="text-rich-black/80 text-lg mb-8">
          Get the latest drops, exclusive releases, and behind-the-scenes content delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-rich-black placeholder-rich-black/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button 
            type="submit"
            className="bg-rich-black text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-rich-black transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
