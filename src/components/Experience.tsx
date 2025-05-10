
import React, { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Experience: React.FC = () => {
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

  const jobs = [
    {
      id: "acmecorp",
      company: "ACME Corp",
      title: "Senior Software Engineer",
      period: "January 2022 - Present",
      achievements: [
        "Led development of a React-based dashboard that improved client engagement by 40%",
        "Architected and implemented a new API gateway resulting in 30% improved response times",
        "Mentored 5 junior developers through structured code reviews and pair programming sessions",
        "Revamped the CI/CD pipeline reducing deployment time from hours to minutes"
      ]
    },
    {
      id: "techstart",
      company: "TechStart Inc",
      title: "Frontend Developer",
      period: "June 2019 - December 2021",
      achievements: [
        "Built responsive web applications using React, Redux, and TypeScript",
        "Collaborated with UX designers to implement pixel-perfect interfaces",
        "Optimized application performance resulting in 25% faster load times",
        "Integrated RESTful APIs and implemented real-time features with WebSockets"
      ]
    },
    {
      id: "webinnovate",
      company: "WebInnovate",
      title: "Web Developer",
      period: "March 2017 - May 2019",
      achievements: [
        "Developed and maintained client websites using HTML, CSS, and JavaScript",
        "Created custom WordPress themes and plugins for content-managed websites",
        "Improved site accessibility to meet WCAG guidelines",
        "Performed cross-browser testing and responsive design implementation"
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`py-24 px-5 md:px-10 max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="section-heading">Where I've Worked</h2>

      <div className="mt-8">
        <Tabs defaultValue={jobs[0].id} className="w-full">
          <TabsList className="flex flex-col md:flex-row h-auto bg-transparent border-l-2 border-portfolio-lightBlue md:border-b-2 md:border-l-0">
            {jobs.map(job => (
              <TabsTrigger 
                key={job.id} 
                value={job.id}
                className="data-[state=active]:text-portfolio-accent data-[state=active]:border-l-2 md:data-[state=active]:border-b-2 data-[state=active]:border-portfolio-accent data-[state=active]:bg-portfolio-lightBlue bg-transparent rounded-none px-6 py-3 text-left"
              >
                {job.company}
              </TabsTrigger>
            ))}
          </TabsList>
          {jobs.map(job => (
            <TabsContent key={job.id} value={job.id} className="mt-6 px-2">
              <h3 className="text-xl text-portfolio-lightest">
                {job.title} <span className="text-portfolio-accent">@ {job.company}</span>
              </h3>
              <p className="text-sm font-mono mb-4">{job.period}</p>
              <ul className="space-y-4">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex">
                    <span className="text-portfolio-accent mr-2 mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
