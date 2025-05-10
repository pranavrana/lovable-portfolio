
import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
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

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "TailwindCSS",
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-24 px-5 md:px-10 max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="section-heading">About Me</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="mb-4">
            Hello! I'm John, a software engineer who enjoys creating things that live on the internet. 
            My interest in web development started back in 2010 when I decided to customize my Tumblr theme — turns out hacking 
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p className="mb-4">
            Fast-forward to today, and I've had the privilege of working at <span className="text-portfolio-accent">a startup</span>, 
            <span className="text-portfolio-accent"> a large corporation</span>, and <span className="text-portfolio-accent">a student-led design studio</span>. 
            My main focus these days is building accessible, inclusive products and digital experiences.
          </p>
          <p className="mb-4">
            I also recently launched a course that covers everything you need to build a web app with the React ecosystem.
          </p>
          <p className="mb-8">Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center text-sm font-mono">
                <span className="text-portfolio-accent mr-2">▹</span> {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1 relative group mx-auto md:mx-0">
          <div className="relative border-2 border-portfolio-accent rounded overflow-hidden w-64 h-64">
            <div className="absolute inset-0 bg-portfolio-accent opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Profile" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-64 h-64 border-2 border-portfolio-accent rounded -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
