import { ReactElement } from "react";

interface FeatureProps {
  icon?: ReactElement;
  label: string;
  details: string;
}

export default function Feature({ icon, label, details }: FeatureProps) {
  return (
    <article className="group grid w-[350px] grid-cols-1 items-start justify-stretch gap-4 rounded-lg border border-[#ffffff25] hover:border-[#ffffff50] p-6">
      {icon}

      <div className="grid grid-cols-1 items-start justify-start gap-1">
        <h5 className="text-xl font-semibold">{label}</h5>

        <p className="text-base font-light tracking-tight opacity-50">
          {details}
        </p>
      </div>
    </article>
  );
}
