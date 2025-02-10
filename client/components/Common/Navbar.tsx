import Button from "./Navbar/Button";
import Link from "./Navbar/Link";

export default function Navbar() {
  return (
    <nav className="flex h-fit items-center justify-between border-b-2 border-[#ffffff20] px-6 py-4">
      <div className="flex items-center justify-center gap-1">
        <a
          className="cursor-pointer font-orbitron text-[1.7rem] font-semibold"
          href="#"
        >
          BLAZE
        </a>

        <hr className="w-10 -rotate-[65deg] border-t-[2.35px] opacity-20" />
      </div>

      <div className="flex items-center justify-center space-x-8">
        <Link url="#" label="Docs" />
        <Link url="#" label="GitHub" />
        <Button url="#" label="Download" />
      </div>
    </nav>
  );
}
