"use client";

import { useEffect, useMemo, useState } from 'react';

interface ClockProps {
  className?: string;
}

export function Clock({ className }: ClockProps) {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    let frameId = 0;
    let timerId: number | undefined;

    function scheduleNextTick() {
      const ms = 1000 - (Date.now() % 1000) + 2;
      timerId = window.setTimeout(() => {
        frameId = window.requestAnimationFrame(() => {
          setNow(new Date());
          scheduleNextTick();
        });
      }, ms);
    }

    scheduleNextTick();
    return () => {
      if (timerId) window.clearTimeout(timerId);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const timeFormatter = useMemo(() => new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }), []);

  const tzFormatter = useMemo(() => new Intl.DateTimeFormat(undefined, {
    timeZoneName: 'short',
  }), []);

  const timeString = timeFormatter.format(now);
  const tzString = tzFormatter.formatToParts(now).find(p => p.type === 'timeZoneName')?.value ?? '';

  return (
    <div
      role="timer"
      aria-live="polite"
      className={
        [
          "inline-flex items-center gap-2 px-3 py-1.5",
          "rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm",
          "text-stone-200 font-lora",
          className ?? ''
        ].join(' ')
      }
    >
      <span className="sr-only">Current local time</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="w-4 h-4 text-stone-300"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="tabular-nums tracking-tight" suppressHydrationWarning>
        {timeString}
      </span>
      <span className="text-stone-400 text-sm" suppressHydrationWarning>{tzString}</span>
    </div>
  );
}


