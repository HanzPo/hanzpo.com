'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import { container } from './animations';
import { useParallaxScroll } from './hooks';
import { workExperiences, type WorkId } from './data/work-experience';
import { HeroSection, SocialLinks, ExperienceModal } from './components';

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<WorkId | null>(null);
  useParallaxScroll();

  const handleSelectRole = useCallback((id: WorkId) => setSelectedRole(id), []);
  const handleCloseModal = useCallback(() => setSelectedRole(null), []);

  const selectedExperience = selectedRole
    ? workExperiences.find((exp) => exp.id === selectedRole) ?? null
    : null;

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <Image src="/opengraph-image.png" alt="site preview image" width={0} height={0} />
      <HeroSection onSelectRole={handleSelectRole} />
      <SocialLinks />
      <ExperienceModal experience={selectedExperience} onClose={handleCloseModal} />
    </motion.div>
  );
}
