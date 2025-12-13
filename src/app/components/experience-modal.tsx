'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback } from 'react';
import { useEscapeKey } from '../hooks';
import type { WorkExperience } from '../data/work-experience';

interface ExperienceModalProps {
  experience: WorkExperience | null;
  onClose: () => void;
}

export function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  const handleClose = useCallback(() => onClose(), [onClose]);
  useEscapeKey(handleClose, !!experience);

  return (
    <AnimatePresence>
      {experience && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={handleClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-stone-900/80 backdrop-blur-xl p-5 shadow-2xl text-stone-200"
            initial={{ scale: 0.96, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 8 }}
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-md p-1.5 text-stone-400 hover:text-stone-200 hover:bg-white/5 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg ${
                    experience.hasWhiteBg
                      ? 'bg-white/90 p-2 flex items-center justify-center'
                      : 'overflow-hidden'
                  }`}
                >
                  <Image
                    src={experience.logo}
                    alt={experience.logoAlt}
                    width={40}
                    height={40}
                    className={`w-full h-full ${
                      experience.logoStyle === 'cover' ? 'object-cover' : 'object-contain'
                    }`}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    {experience.company} — {experience.role}
                  </h3>
                  <p className="text-sm text-stone-400">{experience.dates}</p>
                </div>
              </div>
              <p className="text-stone-300 text-sm md:text-base">{experience.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
