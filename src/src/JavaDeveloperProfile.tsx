import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Mail, Github, Linkedin, Code2, Database, Server, Coffee, Award, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePic from '../img/Senthil-profile.jpeg';

interface JavaDeveloperProfileProps {
  'data-id'?: string;
}

function JavaDeveloperProfile({
  'data-id': dataId
}: JavaDeveloperProfileProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ['scalable', 'enterprise', 'robust', 'efficient', 'modern'], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const skills = [{
    name: 'Java',
    icon: Coffee,
    level: 95
  }, {
    name: 'Spring Boot',
    icon: Server,
    level: 90
  }, {
    name: 'Microservices',
    icon: Code2,
    level: 85
  }, {
    name: 'PostgreSQL',
    icon: Database,
    level: 88
  }, {
    name: 'Docker & K8s',
    icon: Server,
    level: 82
  }, {
    name: 'REST APIs',
    icon: Code2,
    level: 92
  }];
  const projects = [{
    title: 'E-Commerce Platform',
    description: 'Built a scalable microservices-based e-commerce platform handling 100K+ daily transactions',
    tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop'
  }, {
    title: 'Banking API Gateway',
    description: 'Developed secure API gateway for banking operations with OAuth2 and JWT authentication',
    tech: ['Java', 'Spring Security', 'MongoDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'
  }, {
    title: 'Real-time Analytics Dashboard',
    description: 'Created real-time data processing system using Apache Kafka and Spring WebFlux',
    tech: ['Java', 'Kafka', 'WebFlux', 'Elasticsearch'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  }];
  const experience = [{
    role: 'Senior Java Developer',
    company: 'TATA Consultancy Limited',
    period: '2023 - Present',
    description: 'Leading backend development for Guidewire application for insurance industry'
  }, {
    role: 'Java Engineer',
    company: 'JSainsburys PLC',
    period: '2022 - 2023',
    description: 'Developed microservices architecture for the UK Retailer'
  }, {
    role: 'Java Developer',
    company: 'Torry Harris Integration Solutions',
    period: '2022 - 2011',
    description: 'Built Webapplications and Microservices'
  }];
  return <div className="w-full bg-gradient-to-b from-slate-50 to-white" data-id={dataId}>
      {/* Hero Section with Profile Photo - Adjusted for better viewport fit */}
      <div className="container mx-auto px-4">
        <div className="flex gap-5 py-10 lg:py-16 items-center justify-center flex-col min-h-[85vh] md:min-h-[80vh]">
          {/* Profile Photo Section */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} className="relative mt-4 flex flex-col items-center">
            <h2 className="text-5xl font-bold text-center mb-4 font-playfair">SENTHILKUMAR</h2>
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img src={profilePic} alt="Java Developer Profile" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <Button variant="secondary" size="sm" className="gap-4">
              Developer | Cloud Practitioner | Architect | Mentor
            </Button>
          </motion.div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-6xl max-w-3xl tracking-tighter text-center font-regular">
              <span className="text-slate-900">I build</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-2 md:pt-1">
                &nbsp;
                {titles.map((title, index) => <motion.span key={index} className="absolute font-semibold text-blue-600" initial={{
                opacity: 0,
                y: '-100'
              }} transition={{
                type: 'spring',
                stiffness: 50
              }} animate={titleNumber === index ? {
                y: 0,
                opacity: 1
              } : {
                y: titleNumber > index ? -150 : 150,
                opacity: 0
              }}>
                    {title}
                  </motion.span>)}
              </span>
              <span className="text-slate-900">Java applications</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed tracking-tight text-slate-600 max-w-2xl text-center mt-2">
              Senior Java Developer specializing in building high-performance,
              scalable enterprise applications using Spring Boot, microservices,
              and cloud technologies.
            </p>
          </div>
          <div className="flex flex-row gap-3 flex-wrap justify-center mt-3">
            <Button size="lg" className="gap-4">
              View My Work <MoveRight className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4" variant="outline">
              Contact Me <Mail className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      {/* About Me Section with Additional Photos */}
      <div className="bg-slate-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-slate-600 text-lg">
              My journey as a Java developer
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop" alt="Working on laptop" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Team collaboration" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md col-span-2">
                  <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=300&fit=crop" alt="Developer workspace" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Passionate Java Developer
              </h3>
              <p className="text-slate-600 mb-4">
                With over 14 years of experience in Java development, I've built
                everything from high-throughput microservices to elegant
                enterprise applications. My passion lies in creating clean,
                maintainable code that solves real business problems.
              </p>
              <p className="text-slate-600 mb-6">
                When I'm not coding, you'll find me contributing to open-source
                projects, mentoring junior developers, or exploring the latest
                advancements in cloud technologies and containerization.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 font-medium">
                    10k+ cups of coffee
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 font-medium">
                    500k+ lines of code
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-slate-600 text-lg">
              Technologies I work with daily
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => <motion.div key={skill.name} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <skill.icon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <motion.div initial={{
                width: 0
              }} whileInView={{
                width: `${skill.level}%`
              }} viewport={{
                once: true
              }} transition={{
                duration: 1,
                delay: index * 0.1
              }} className="bg-blue-600 h-2 rounded-full" />
                </div>
                <p className="text-sm text-slate-600 mt-2">
                  {skill.level}% Proficiency
                </p>
              </motion.div>)}
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-600 text-lg">Some of my recent work</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => <motion.div key={project.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {tech}
                      </span>)}
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
      {/* Experience Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Work Experience
            </h2>
            <p className="text-slate-600 text-lg">My professional journey</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((exp, index) => <motion.div key={exp.role} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-slate-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-slate-600">{exp.description}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>
            <Button size="lg" variant="secondary" className="gap-4">
              Get In Touch <Mail className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>;
}

export { JavaDeveloperProfile };
