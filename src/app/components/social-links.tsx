'use client';

import { motion } from 'framer-motion';
import { container, listContainer, itemUp } from '../animations';
import { socialLinks } from '../data/work-experience';

export function SocialLinks() {
  return (
    <motion.div
      id="next"
      className="min-h-screen flex items-center justify-center p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
    >
      <div className="space-y-4 text-center">
        <motion.h2
          variants={itemUp}
          className="text-3xl md:text-4xl text-stone-200 font-crimson-pro mb-6"
        >
          find me here:
        </motion.h2>
        <motion.div variants={listContainer} className="space-y-3 font-lora">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={itemUp}
              href={link.href}
              className="block text-stone-400 text-lg md:text-xl hover:text-stone-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
