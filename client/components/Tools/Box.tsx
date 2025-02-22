"use client";

import { useState, ReactNode } from "react";

interface SignalWrapperProps {
  className: string;
  children: ReactNode;
}

interface SignalProps {
  width: string;
  height: string;
  animate: boolean;
}

export default function Box() {
  const [animate, setAnimate] = useState<boolean>(false);

  const handleAnimate = () => {
    if (animate) return;

    setAnimate(true);

    setTimeout(() => setAnimate(false), 1000 * 2);
  };

  return (
    <div className="group relative cursor-pointer rounded-md border-2 border-white/[15%] p-[0.15rem]">
      <div
        className="rounded-[2.5px] bg-[#252525] p-6 py-5"
        onClick={handleAnimate}
      >
        <p className="title-fade text-2xl font-bold">Forged From</p>
      </div>

      <SignalWrapper className="absolute -left-[418px] bottom-0 top-0 -z-10 my-auto grid grid-cols-1 items-center justify-center">
        <Signal width="400px" height="1px" animate={animate} />
        <Signal width="200px" height="1px" animate={animate} />
        <Signal width="400px" height="1px" animate={animate} />
      </SignalWrapper>

      <SignalWrapper className="absolute -right-[418px] bottom-0 top-0 -z-10 my-auto grid rotate-180 grid-cols-1 items-center justify-center">
        <Signal width="400px" height="1px" animate={animate} />
        <Signal width="200px" height="1px" animate={animate} />
        <Signal width="400px" height="1px" animate={animate} />
      </SignalWrapper>
    </div>
  );
}

function SignalWrapper({ className, children }: SignalWrapperProps) {
  return <div className={className}>{children}</div>;
}

function Signal({ width, height, animate }: SignalProps) {
  return (
    <div className="grid grid-flow-col items-center justify-end">
      <div className="h-4 w-4 rounded-full border-2 border-white/[15%]" />

      <div className="relative bg-white/[15%]" style={{ width, height }}>
        {animate && (
          <div className="absolute bottom-0 left-auto right-0 top-0 my-auto h-[2px] w-[25%] animate-signal rounded-full bg-gradient-to-l from-transparent to-white opacity-0" />
        )}
      </div>
    </div>
  );
}
