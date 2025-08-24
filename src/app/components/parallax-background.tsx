'use client';

import { useEffect } from 'react';

export function ParallaxBackground() {
  useEffect(() => {
    let ticking = false;

    function update() {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const offset = scrollY * 0.6; // background moves slower than content
      document.body.style.setProperty('--bg-offset', `${offset}px`);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
