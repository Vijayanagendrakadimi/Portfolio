import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import profilePic2 from '../assets/image.png';
import resume from '../assets/K.Nag.pdf' // Adjust the path as necessary

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <SectionTitle title="About Me" subtitle="My Introduction" />
        
        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          <motion.div 
            className="md:w-5/12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/3] shadow-xl">
              <img
                src={profilePic2}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-7/12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              I am a passionate Full Stack Java Developer and Cloud/DevOps Engineer currently working at CJSS Technologies Pvt Ltd. 
              With expertise in both AWS and Azure cloud platforms, I design and implement scalable, efficient architecture solutions.
            </p>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              My journey in technology began with a strong foundation in Java development, which I've expanded to include modern cloud technologies, 
              containerization, and DevOps practices. I'm constantly learning and adapting to the ever-evolving tech landscape to deliver the best solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-5 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-4xl font-bold text-blue-500 mb-2">1+</h3>
                <p className="text-slate-600 dark:text-slate-400">Years of experience</p>
              </div>
              
              <div className="p-5 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-4xl font-bold text-blue-500 mb-2">3+</h3>
                <p className="text-slate-600 dark:text-slate-400">Projects completed</p>
              </div>
            </div>
            
            <a 
              href={resume}
              download="K.Nagendra_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Education</h3>
            <p className="text-slate-600 dark:text-slate-400">Bachelor's degree in Computer Science</p>
            <p className="text-slate-500 dark:text-slate-500">Avanthi's st Therressa,  <br/>2020-2024</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Hobbies</h3>
            <p className="text-slate-600 dark:text-slate-400">Cricket, Badminton</p>
            <p className="text-slate-500 dark:text-slate-500">Exploring new technologies</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Interests</h3>
            <p className="text-slate-600 dark:text-slate-400">Cloud Architecture, DevOps</p>
            <p className="text-slate-500 dark:text-slate-500">Continuous Learning</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;