"use client";

import { ReactNode } from "react";
import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";

interface ToolProps {
  url: string;
  icon: ReactNode;
  label: string;
  description: string;
}

export default function Tool({ url, icon, label, description }: ToolProps) {
  return (
    <Link
      className="group relative grid w-[360px] grid-cols-1 items-stretch justify-stretch rounded-md border-2 border-white/[20%] p-1 transition-all hover:border-white/[30%]"
      href={url}
    >
      <div className="relative grid grid-cols-1 items-start justify-start gap-1 rounded-sm bg-gradient-to-t from-transparent to-white/[10%] p-4">
        {icon}

        <div className="flex items-center justify-start gap-1">
          <h4 className="text-2xl font-semibold">{label}</h4>
          <FiArrowUpRight className="opacity-25" size="2rem" />
        </div>

        <p className="font-light opacity-60">{description}</p>
      </div>
    </Link>
  );
}
