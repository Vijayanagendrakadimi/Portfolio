import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Cloud Architect',
      company: 'CJSS Technologies Pvt Ltd',
      period: 'Current',
      description: 'Working on AWS and Azure cloud solutions, designing and implementing scalable architecture for enterprise applications.',
      skills: ['AWS', 'Azure', 'Terraform', 'CloudFormation', 'Docker', 'Kubernetes'],
      type: 'work'
    },
    {
      title: 'DevOps Engineer',
      company: 'CJSS Technologies Pvt Ltd',
      period: '2025 - Present',
      description: 'Implemented CI/CD pipelines, automated deployment processes, and managed infrastructure as code using Terraform and Ansible.',
      skills: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Docker', 'Kubernetes','ELK Stack'],
      type: 'work'
    },
    {
      title: 'Java Developer Intern',
      company: 'VTalent',
      period: '6 Months',
      description: 'Developed and maintained Java applications, worked with Spring Boot, and implemented RESTful APIs.',
      skills: ['Java', 'Spring Boot', 'RESTful APIs', 'Microservices', 'SQL'],
      type: 'internship'
    },
    {
      title: 'Bachelor of Technology in Computer Science',
      company: 'Avanthi st theressa',
      period: '2020 - 2024',
      description: 'Graduated with honors, specialized in Software Engineering and Cloud Computing.',
      type: 'education'
    },
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Issued Jan 2023',
      icon: '☁️'
    },
    {
      title: 'Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      date: 'Issued Jun 2022',
      icon: '⚡'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Experience & Education" subtitle="My Journey" />
        
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 transform md:translate-x-px"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-1/2 z-10">
                  <div className="absolute inset-0.5 rounded-full bg-white dark:bg-slate-900"></div>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                        {experience.type === 'work' || experience.type === 'internship' ? 
                          <Briefcase size={20} /> : 
                          <GraduationCap size={20} />
                        }
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{experience.title}</h3>
                        <p className="text-blue-500 font-medium">{experience.company}</p>
                        <p className="text-slate-500 dark:text-slate-400 mb-3">{experience.period}</p>
                        {experience.description && (
                          <p className="text-slate-600 dark:text-slate-300 mb-4">{experience.description}</p>
                        )}
                        {experience.skills && (
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill, idx) => (
                              <span 
                                key={idx} 
                                className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-2xl">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white">{cert.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300">{cert.issuer}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;