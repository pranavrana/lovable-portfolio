
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Github, Link } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A fully featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product listings, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-responsive web application that allows users to track workouts, set fitness goals, and monitor progress over time.",
      technologies: ["React", "Firebase", "Chart.js", "TailwindCSS"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Content Management System",
      description: "A custom CMS built for content creators with a focus on performance and ease of use. Features a WYSIWYG editor, media library, and API endpoints.",
      technologies: ["Vue.js", "GraphQL", "PostgreSQL", "AWS"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-24 px-5 md:px-10 max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="section-heading">Some Things I've Built</h2>
      
      <div className="space-y-24 mt-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`relative grid md:grid-cols-12 gap-2 items-center ${
              index % 2 === 1 ? 'md:text-right' : ''
            }`}
          >
            {/* Project Image (changes position based on index) */}
            <div 
              className={`md:col-span-7 relative group ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}
            >
              <a 
                href={project.external} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-64 md:h-80 overflow-hidden rounded bg-portfolio-accent bg-opacity-10">
                  <div className="absolute inset-0 bg-portfolio-accent opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            </div>

            {/* Project Details */}
            <div 
              className={`md:col-span-7 md:absolute ${
                index % 2 === 1 ? 'md:left-0' : 'md:right-0'
              } z-10`}
            >
              <Card className="bg-portfolio-lightBlue p-6 shadow-xl">
                <p className="font-mono text-portfolio-accent text-sm mb-1">Featured Project</p>
                <h3 className="text-portfolio-lightest text-2xl font-semibold mb-4">{project.title}</h3>
                
                <div className="text-sm mb-4">{project.description}</div>
                
                <ul className={`flex flex-wrap gap-3 text-xs font-mono mb-6 ${
                  index % 2 === 1 ? 'md:justify-end' : ''
                }`}>
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                
                <div className={`flex gap-4 ${
                  index % 2 === 1 ? 'md:justify-end' : ''
                }`}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-lightest hover:text-portfolio-accent"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.external} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-lightest hover:text-portfolio-accent"
                  >
                    <Link size={20} />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
