import React from 'react';
import { Github as GitHub, Linkedin, Mail, FileText, ArrowDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePic from '../assets/image of nag.png'; // Adjust the path as necessary
import resume from '../assets/K.Nag.pdf'; // Adjust the path as necessary

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <motion.span 
                className="inline-block px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium mb-4 animate-gradient bg-[length:200%_auto] hover:scale-105 transition-transform cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                DevOps+Cloud Engineer & Full Stack Developer
              </motion.span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-gradient bg-[length:200%_auto]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hi, I'm <span className="text-blue-500">Vijaya Nagendra</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg mb-8 text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              A passionate full stack Java developer and DevOps+cloud engineer specializing in AWS and Azure architecture, currently working at CJSS Technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-gradient bg-[length:200%_auto]"
              >
                Contact Me
              </a>
              
              <a 
                href="#about" 
                className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-white/50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-200 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group"
              >
                <span>About Me</span>
                <ArrowDown size={16} className="group-hover:animate-bounce" />
              </a>
            </motion.div>
            
            <motion.div 
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {[
                { icon: <GitHub size={20} />, href: "https://github.com/Vijayanagendrakadimi", color: "hover:bg-slate-800 hover:text-white" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/vijaya-nagendra-kadimi-46976926b/", color: "hover:bg-[#0A66C2] hover:text-white" },
                { icon: <Mail size={20} />, href: "mailto:nagendrachowdary397@gmail.com", color: "hover:bg-red-500 hover:text-white" },
                { icon: <FileText size={20} />, href: resume,Download:true, color: "hover:bg-green-500 hover:text-white" }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href}
                  download={item.Download || undefined}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full border border-slate-300 dark:border-slate-700 ${item.color} transition-all duration-300 hover:scale-110 hover:border-transparent hover:shadow-lg`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-5/12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative animate-float">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 opacity-75 blur animate-gradient bg-[length:200%_auto]"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl aspect-square w-64 md:w-80 mx-auto hover:scale-105 transition-transform duration-300">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;