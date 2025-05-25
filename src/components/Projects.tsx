import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
  details?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Academic Project",
      description: "Developed a full-stack e-commerce application with secure user authentication, product catalog, and payment processing integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Java", "Spring Boot", "MySQL", "React", "AWS"],
      links: {
        demo: "https://example.com/ecommerce",
        github: "https://github.com/yourusername/ecommerce"
      },
      details: "This project was built as part of my academic curriculum. I implemented a secure user authentication system, product catalog with search and filter functionality, shopping cart, and integrated payment processing. The application was deployed on AWS using EC2 and RDS for the database."
    },
    {
      id: 2,
      title: "Task Management System",
      category: "Academic Project",
      description: "Created a task management application with real-time updates, collaborative features, and analytics dashboard.",
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Java", "Spring Boot", "MongoDB", "Angular", "Docker"],
      links: {
        github: "https://github.com/yourusername/taskmanager"
      },
      details: "The Task Management System allows users to create and assign tasks, track progress, and collaborate in real-time. Features include task prioritization, deadline tracking, file attachments, and an analytics dashboard for productivity insights. The application is containerized using Docker for easy deployment."
    },
    {
      id: 3,
      title: "Cloud-Based CRM Solution",
      category: "Work Project",
      description: "Designed and implemented a scalable, cloud-native CRM solution with multi-tenant architecture.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Java", "Spring Boot", "AWS", "Kubernetes", "React", "PostgreSQL"],
      links: {},
      details: "Developed a highly scalable CRM solution deployed on AWS using microservices architecture. Implemented features including contact management, lead tracking, sales pipeline visualization, and reporting dashboard. Used Kubernetes for container orchestration and implemented CI/CD pipelines for automated deployment."
    },
    {
      id: 4,
      title: "DevOps Automation Framework",
      category: "Work Project",
      description: "Built a comprehensive DevOps automation framework for streamlining deployment processes and infrastructure management.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Terraform", "Ansible", "Jenkins", "AWS", "Docker", "Python"],
      links: {},
      details: "Developed a comprehensive DevOps automation framework that reduced deployment time by 70% and improved infrastructure reliability. The solution includes infrastructure as code using Terraform, configuration management with Ansible, and CI/CD pipelines with Jenkins. Implemented automated testing and monitoring to ensure system reliability and performance."
    }
  ];
  
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Projects" subtitle="My Recent Work" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => openProjectDetails(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{project.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <p className="text-blue-500 text-sm">Click to view details</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectDetails}
            >
              <motion.div 
                className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                    onClick={closeProjectDetails}
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{selectedProject.title}</h2>
                    <span className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6">{selectedProject.details || selectedProject.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {selectedProject.links.demo && (
                      <a 
                        href={selectedProject.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    
                    {selectedProject.links.github && (
                      <a 
                        href={selectedProject.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium transition-colors"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;