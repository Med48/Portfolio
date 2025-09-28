import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Zap } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { personalInfo } from '../../utils/data';

const stats = [
  { key: 'experience', value: '3+', icon: Code },
  { key: 'projects', value: '12+', icon: Zap },
  { key: 'technologies', value: '25+', icon: Database },
  { key: 'certifications', value: '3', icon: Brain },
];

export const About: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <div className="relative w-64 h-64 lg:w-72 lg:h-72">
              <motion.div
                className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/image.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </div>
          </motion.div>

          {/* Right: Bio Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {t('about.bio1')}
              </motion.p>

              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t('about.bio2')}
              </motion.p>

              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                {t('about.bio3')}
              </motion.p>
            </div>

            {/* Key Highlights */}
            <motion.div
              className="space-y-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-4">
                {currentLanguage === 'fr' ? 'Domaines d\'expertise' : 'Areas of Expertise'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(currentLanguage === 'fr' ? [
                  'Intelligence Artificielle',
                  'Machine Learning & NLP',
                  'Systèmes BI & Analytics',
                  'Agents IA Autonomes',
                  'Solutions RPA',
                  'Développement Web'
                ] : [
                  'Artificial Intelligence',
                  'Machine Learning & NLP',
                  'BI & Analytics Systems',
                  'Autonomous AI Agents',
                  'RPA Solutions',
                  'Web Development'
                ]).map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{currentLanguage === 'fr' ? 'Discutons ensemble' : 'Let\'s talk'}</span>
                <Zap className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};