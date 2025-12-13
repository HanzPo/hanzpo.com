'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { itemUp, cardHover, cardTransition } from '../animations';
import type { WorkExperience } from '../data/work-experience';

interface WorkCardProps {
  experience: WorkExperience;
  onClick: () => void;
}

export function WorkCard({ experience, onClick }: WorkCardProps) {
  const { company, role, dates, logo, logoAlt, logoStyle, hasWhiteBg } = experience;

  return (
    <motion.div
      variants={itemUp}
      whileHover={cardHover}
      transition={cardTransition}
      className="p-2 md:p-3 flex items-center justify-between rounded-xl border border-white/10 hover:border-white/20 transition-colors cursor-pointer backdrop-blur-[1px]"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-lg mr-2 md:mr-3 ${
            hasWhiteBg ? 'bg-white/90 p-2 md:p-2.5 flex items-center justify-center' : 'overflow-hidden'
          }`}
        >
          <Image
            src={logo}
            alt={logoAlt}
            width={48}
            height={48}
            className={`w-full h-full ${logoStyle === 'cover' ? 'object-cover' : 'object-contain'}`}
          />
        </div>
        <div>
          <h3 className="font-medium text-sm md:text-base text-stone-200">{company}</h3>
          <p className="text-stone-400 text-sm md:text-base">{role}</p>
        </div>
      </div>
      <div className="hidden md:block text-stone-400 text-sm md:text-base whitespace-nowrap">
        {dates}
      </div>
    </motion.div>
  );
}
