import Link from "next/link";

interface ButtonProps {
  url: string;
  label: string;
}

export default function Button({ url, label }: ButtonProps) {
  return (
    <Link className="rounded-md bg-white px-5 py-2" href={url}>
      <p className="text-base font-[500] text-black">{label}</p>
    </Link>
  );
}
