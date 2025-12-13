'use client';

import { useEffect } from 'react';

export function useParallaxScroll(factor: number = -0.25) {
  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const y = window.scrollY * factor;
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
  }, [factor]);
}
