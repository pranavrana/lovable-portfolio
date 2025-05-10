
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-mono text-portfolio-accent text-lg mb-5 animate-fadeIn opacity-0" style={{ animationDelay: '100ms' }}>
          Hi, my name is
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-lightest mb-4 animate-fadeIn opacity-0" style={{ animationDelay: '200ms' }}>
          John Doe.
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-light mb-7 animate-fadeIn opacity-0" style={{ animationDelay: '300ms' }}>
          I build things for the web.
        </h3>
        <p className="max-w-xl text-lg text-portfolio-light mb-12 animate-fadeIn opacity-0" style={{ animationDelay: '400ms' }}>
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I'm focused on building accessible, user-centered products.
        </p>
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: '500ms' }}>
          <Button 
            onClick={scrollToContact}
            className="bg-transparent hover:bg-portfolio-accent hover:bg-opacity-10 border border-portfolio-accent text-portfolio-accent text-base px-8 py-6"
          >
            Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
