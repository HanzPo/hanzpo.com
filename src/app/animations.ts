import type { Variants } from 'framer-motion';

export const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.12 },
  },
};

export const listContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const itemUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const cardHover = {
  scale: 1.02,
};

export const cardTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
};
