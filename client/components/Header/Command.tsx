"use client";

import { useState } from "react";

import { IoCopyOutline, IoCheckmark } from "react-icons/io5";
import { PiFireSimple } from "react-icons/pi";

interface CommandProps {
  url: string;
  label: string;
}

export default function Command({ url, label }: CommandProps) {
  const [selected, setSelected] = useState<boolean>(false);

  const toggleVisibility = async () => {
    navigator.clipboard.writeText(url);
    setSelected((visible) => !visible);
    setTimeout(() => setSelected(false), 2500);
  };

  return (
    <div
      className="group relative flex cursor-pointer items-center justify-center gap-1 opacity-40 transition-opacity hover:opacity-65"
      onClick={toggleVisibility}
    >
      <PiFireSimple className="h-6 w-6" />

      <p className="font-light tracking-wide text-white">~ {label}</p>

      {selected ? (
        <IoCheckmark className="absolute -right-8 h-5 w-5 opacity-0 group-hover:opacity-100" />
      ) : (
        <IoCopyOutline className="absolute -right-8 h-5 w-5 opacity-0 group-hover:opacity-100" />
      )}
    </div>
  );
}
