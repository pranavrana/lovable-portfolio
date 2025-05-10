
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-24 px-5 md:px-10 max-w-3xl mx-auto text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="font-mono text-portfolio-accent text-base mb-4">04. What's Next?</h2>
      <h3 className="text-4xl md:text-5xl text-portfolio-lightest font-bold mb-6">Get In Touch</h3>
      <p className="mb-12 text-lg">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
        I'll do my best to get back to you!
      </p>
      <Button 
        asChild
        className="bg-transparent hover:bg-portfolio-accent hover:bg-opacity-10 border border-portfolio-accent text-portfolio-accent text-base px-10 py-6 mb-14"
      >
        <a href="mailto:hello@example.com">
          Say Hello <Mail className="ml-2 h-4 w-4" />
        </a>
      </Button>

      <div className="flex justify-center space-x-8 mb-8">
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-portfolio-light hover:text-portfolio-accent transition-colors"
        >
          <Github size={24} />
        </a>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-portfolio-light hover:text-portfolio-accent transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-portfolio-light hover:text-portfolio-accent transition-colors"
        >
          <Twitter size={24} />
        </a>
      </div>
      
      <p className="font-mono text-sm text-center text-portfolio-light">
        Designed & Built by John Doe
      </p>
    </section>
  );
};

export default Contact;
