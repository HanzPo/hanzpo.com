'use client';

import { motion } from 'framer-motion';
import { listContainer, itemUp } from '../animations';
import { workExperiences, type WorkId } from '../data/work-experience';
import { WorkCard } from './work-card';

interface HeroSectionProps {
  onSelectRole: (id: WorkId) => void;
}

export function HeroSection({ onSelectRole }: HeroSectionProps) {
  return (
    <div className="min-h-svh flex items-center">
      <div className="w-full px-4 md:px-0 md:ml-[10%] lg:ml-[20%]">
        <motion.h1
          variants={itemUp}
          className="text-4xl md:text-5xl lg:text-6xl font-crimson-pro mb-4 text-center md:text-left"
        >
          hey, i&apos;m hanz.
        </motion.h1>

        <motion.p
          variants={itemUp}
          className="text-lg md:text-xl font-crimson-pro mb-8 text-stone-300 text-center md:text-left max-w-lg"
        >
          i&apos;m a computer science student at the university of waterloo with an interest in
          building useful, elegant, and scalable software. i also enjoy learning about finance,
          urban planning, and languages in my spare time.
        </motion.p>

        <motion.h2
          variants={itemUp}
          className="text-xl md:text-2xl font-crimson-pro mb-3 text-stone-200 text-center md:text-left"
        >
          recently:
        </motion.h2>

        <motion.div
          variants={listContainer}
          className="space-y-2 w-full md:w-[400px] lg:w-[500px] mx-auto md:mx-0 font-lora"
        >
          {workExperiences.map((experience) => (
            <WorkCard
              key={experience.id}
              experience={experience}
              onClick={() => onSelectRole(experience.id)}
            />
          ))}
        </motion.div>

        <a href="#next" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center group">
          <motion.p
            variants={itemUp}
            className="text-stone-400 text-sm mb-2 group-hover:text-stone-200 transition-colors"
          >
            <span className="md:hidden">swipe to see more</span>
            <span className="hidden md:inline">scroll to see more</span>
          </motion.p>
          <svg
            className="w-6 h-6 mx-auto text-stone-400 group-hover:text-stone-200 transition-colors animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
