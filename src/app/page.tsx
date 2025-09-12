"use client";

import Image from 'next/image';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.12 },
  },
};

const listContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<null | 'shopify' | 'cohere' | 'uw'>(null);

  const closeModal = useCallback(() => setSelectedRole(null), []);

  useEffect(() => {
    if (!selectedRole) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedRole, closeModal]);

  useEffect(() => {
    let rafId = 0;
    const update = () => {
      const y = window.scrollY * -0.25;
      document.documentElement.style.setProperty('--bg-offset-y', `${y}px`);
    };
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        update();
        rafId = 0;
      });
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);
  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <Image src="/opengraph-image.png" alt="site preview image" width={0} height={0} />
      <div className="min-h-screen flex items-start md:items-center pt-16 md:pt-0">
        <div className="w-full px-4 md:px-0 md:ml-[10%] lg:ml-[20%] mt-8 md:-mt-10">
          <motion.h1 variants={itemUp} className="text-4xl md:text-5xl lg:text-6xl font-crimson-pro mb-4 text-center md:text-left">
            hey, i&apos;m hanz.
          </motion.h1>

          <motion.p variants={itemUp} className="text-lg md:text-xl font-crimson-pro mb-8 text-stone-300 text-center md:text-left max-w-lg">
            i&apos;m a computer science student at the university of waterloo with an interest in machine learning. i also enjoy learning about finance, urban planning, and languages in my spare time.
          </motion.p>

          <motion.h2 variants={itemUp} className="text-xl md:text-2xl font-crimson-pro mb-3 text-stone-200 text-center md:text-left">
            recent roles:
          </motion.h2>

          <motion.div variants={listContainer} className="space-y-2 w-full md:w-[400px] lg:w-[500px] mx-auto md:mx-0 font-lora">
            {/* Work Experience Card 1 */}
            <motion.div
              variants={itemUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="p-2 md:p-3 flex items-center justify-between rounded-xl border border-white/10 hover:border-white/20 transition-colors cursor-pointer backdrop-blur-[1px]"
              onClick={() => setSelectedRole('shopify')}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-lg mr-2 md:mr-3 p-2 md:p-2.5 flex items-center justify-center">
                   <Image
                     src="/images/shopify_glyph.svg"
                     alt="shopify logo"
                     width={48}
                     height={48}
                     className="w-full h-full object-contain"
                   />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base text-stone-200">shopify</h3>
                  <p className="text-stone-400 text-sm md:text-base">engineering intern</p>
                </div>
              </div>
              <div className="hidden md:block text-stone-400 text-sm md:text-base whitespace-nowrap">may 2025 - aug 2025</div>
            </motion.div>

            {/* Work Experience Card 2 */}
            <motion.div
              variants={itemUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="p-2 md:p-3 flex items-center justify-between rounded-xl border border-white/10 hover:border-white/20 transition-colors cursor-pointer backdrop-blur-[1px]"
              onClick={() => setSelectedRole('cohere')}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-lg mr-2 md:mr-3 p-2 md:p-2.5 flex items-center justify-center">
                  <Image
                    src="/images/cohere_logo.svg"
                    alt="cohere logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base text-stone-200">cohere</h3>
                  <p className="text-stone-400 text-sm md:text-base">senior data quality specialist</p>
                </div>
              </div>
              <div className="hidden md:block text-stone-400 text-sm md:text-base whitespace-nowrap">sept 2024 - aug 2025</div>
            </motion.div>

            <motion.div
              variants={itemUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="p-2 md:p-3 flex items-center justify-between rounded-xl border border-white/10 hover:border-white/20 transition-colors cursor-pointer backdrop-blur-[1px]"
              onClick={() => setSelectedRole('uw')}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-lg mr-2 md:mr-3 p-2 md:p-2.5 flex items-center justify-center">
                  <Image
                    src="/images/uw_logo.svg"
                    alt="university of waterloo logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base text-stone-200">university of waterloo</h3>
                  <p className="text-stone-400 text-sm md:text-base">bachelor of computer science</p>
                </div>
              </div>
              <div className="hidden md:block text-stone-400 text-sm md:text-base whitespace-nowrap">sept 2024 - present</div>
            </motion.div>
          </motion.div>

          <a href="#next" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center group">
            <motion.p variants={itemUp} className="text-stone-400 text-sm mb-2 group-hover:text-stone-200 transition-colors">
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

      <motion.div
        id="next"
        className="min-h-screen flex items-center justify-center p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
      >
        <div className="space-y-4 text-center">
          <motion.h2 variants={itemUp} className="text-3xl md:text-4xl text-stone-200 font-crimson-pro mb-6">
            find me here:
          </motion.h2>
          <motion.div variants={listContainer} className="space-y-3 font-lora">
            <motion.a
              variants={itemUp}
              href="https://resume.hanzpo.com/resume.pdf"
              className="block text-stone-400 text-lg md:text-xl hover:text-stone-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </motion.a>
            <motion.a
              variants={itemUp}
              href="https://www.github.com/HanzPo"
              className="block text-stone-400 text-lg md:text-xl hover:text-stone-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </motion.a>
            <motion.a
              variants={itemUp}
              href="https://www.linkedin.com/in/hanznathanpo/"
              className="block text-stone-400 text-lg md:text-xl hover:text-stone-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </motion.a>
            <motion.a
              variants={itemUp}
              href="https://x.com/hanznathanpo"
              className="block text-stone-400 text-lg md:text-xl hover:text-stone-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </motion.a>
            <motion.a
              variants={itemUp}
              href="https://www.instagram.com/hanznathanpo"
              className="block text-stone-400 text-lg md:text-xl hover:text-stone-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {selectedRole && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60" onClick={closeModal} />
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-stone-900/80 backdrop-blur-xl p-5 shadow-2xl text-stone-200"
              initial={{ scale: 0.96, opacity: 0, y: 8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 8 }}
            >
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute right-3 top-3 rounded-md p-1.5 text-stone-400 hover:text-stone-200 hover:bg-white/5 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {selectedRole === 'uw' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/90 rounded-lg p-2 flex items-center justify-center">
                      <Image src="/images/uw_logo.svg" alt="university of waterloo logo" width={40} height={40} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">university of waterloo — bachelor of computer science</h3>
                      <p className="text-sm text-stone-400">sept 2024 - present</p>
                    </div>
                  </div>
                  <p className="text-stone-300 text-sm md:text-base">
                    writing a lot of programs, proofs, and essays.
                  </p>
                </div>
              )}

              {selectedRole === 'shopify' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/90 rounded-lg p-2 flex items-center justify-center">
                      <Image src="/images/shopify_glyph.svg" alt="shopify logo" width={40} height={40} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">shopify — engineering intern</h3>
                      <p className="text-sm text-stone-400">may 2025 - aug 2025</p>
                    </div>
                  </div>
                  <p className="text-stone-300 text-sm md:text-base">
                    wrote mostly ruby code to streamline checkouts for retail merchants and customers. i used gRPC and GraphQL to connect things together and made fancy grafana dashboards to keep track of everything.
                  </p>
                </div>
              )}

              {selectedRole === 'cohere' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/90 rounded-lg p-2 flex items-center justify-center">
                      <Image src="/images/cohere_logo.svg" alt="cohere logo" width={40} height={40} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">cohere — senior data quality specialist</h3>
                      <p className="text-sm text-stone-400">sept 2024 - aug 2025</p>
                    </div>
                  </div>
                  <p className="text-stone-300 text-sm md:text-base">
                    working on data quality and evaluation for language models on coding tasks.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
