
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
      id: "nyusoft",
      company: "Nyusoft Solutions LLP",
      title: "Sr. Software Programmer",
      period: "October 2019 - November 2022",
      achievements: [
        "Led the development of full-stack web applications using ReactJS, JavaScript, PHP (Laravel), Spring Boot and MySQL, aligning with business specifications and project timelines.",
        "Designed and maintained RESTful APIs and integrated cloud services (AWS EC2, S3, RDS) to ensure seamless backend connectivity and scalability.",
        "Played a key role in DevOps initiatives by implementing CI/CD pipelines (GitHub Actions), improving deployment reliability and consistency.",
        "Designed and created databases, optimized SQL queries, and enhanced data retrieval performance.",
        "Participated in Agile team ceremonies and collaborated across departments, demonstrating leadership and strong interpersonal communication skills."
      ]
    },
    {
      id: "pixometry",
      company: "Pixometry Infosoft",
      title: "Software Developer",
      period: "October 2018 - October 2019",
      achievements: [
        "Engineered interactive web solutions using ReactJS, Laravel, and JavaScript, based on detailed design specifications and client requirements.",
        "Collaborated with design and QA teams to develop UI components and convert Figma mockups into production-ready code.",
        "Demonstrated attention to detail while enhancing existing platforms, optimizing SQL queries, and refactoring legacy code.",
        "Engaged in regular problem-solving discussions and peer reviews, fostering team growth and delivering customer-centric features.",
        "Utilized Git, CI/CD pipelines, and AWS services in a DevOps culture to manage deployments and ensure high availability."
      ]
    },
    {
      id: "webratna",
      company: "Webratna LLP",
      title: "SEO Specialist",
      period: "May 2018 - September 2018",
      achievements: [
        "Conducted keyword research and implemented on-page SEO strategies to improve search rankings.",
        "Optimized metadata, structured data, and technical SEO aspects for client websites.",
        "Monitored and analyzed website performance using Google Analytics and Search Console.",
        "Assisted in content optimization and link-building strategies to enhance organic traffic."
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
