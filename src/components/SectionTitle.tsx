import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      {subtitle && (
        <motion.p 
          className="text-blue-500 mb-2 font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white relative inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
        <motion.span 
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </motion.h2>
    </div>
  );
};

export default SectionTitle;