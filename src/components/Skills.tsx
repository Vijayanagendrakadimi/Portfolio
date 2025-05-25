import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 75 }
  ];
  
  const backendSkills = [
    { name: 'Java', percentage: 95 },
    { name: 'Spring Boot', percentage: 90 },
    { name: 'SQL', percentage: 85 },
    { name: 'REST API', percentage: 90 }
  ];
  
  const devOpsSkills = [
    { name: 'AWS', percentage: 88 },
    { name: 'Azure', percentage: 85 },
    { name: 'Docker', percentage: 80 },
    { name: 'Kubernetes', percentage: 75 },
    { name: 'Jenkins', percentage: 80 },
    { name: 'Terraform', percentage: 78 }
  ];
  
  const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-slate-700 dark:text-slate-300 font-medium">{name}</span>
          <span className="text-slate-500 dark:text-slate-400">{percentage}%</span>
        </div>
        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Skills" subtitle="My Technical Level" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
          
          <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
          
          <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">DevOps & Cloud</h3>
            {devOpsSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 p-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-8 text-slate-800 dark:text-white text-center">Other Skills & Tools</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'CI/CD', 'Microservices', 'RESTful APIs', 'Maven', 'Gradle', 
              'NoSQL', 'MongoDB', 'Agile', 'Scrum', 'Linux', 'Shell Scripting'
            ].map((skill, index) => (
              <motion.span 
                key={index}
                className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, backgroundColor: '#3b82f6', color: '#ffffff' }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;