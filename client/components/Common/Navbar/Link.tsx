import Linkable from "next/link";

import { FiArrowUpRight } from "react-icons/fi";

interface LinkProps {
  url: string;
  label: string;
}

export default function Link({ url, label }: LinkProps) {
  return (
    <Linkable className="group relative" href={url}>
      <p className="text-base">{label}</p>
      <FiArrowUpRight className="absolute -right-3 -top-2 aspect-square w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-60" />
    </Linkable>
  );
}
