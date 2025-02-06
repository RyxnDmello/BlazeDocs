import Button from "./Navbar/Button";
import Link from "./Navbar/Link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b-2 border-[#ffffff20] p-6">
      <div className="flex items-center justify-center gap-[0.25rem]">
        <a
          className="font-orbitron cursor-pointer text-[1.7rem] font-semibold"
          href="#"
        >
          BLAZE
        </a>

        <hr className="mt-1 w-8 -rotate-[70deg] border-t-[2.35px] opacity-20" />
      </div>

      <div className="flex items-center justify-center space-x-8">
        <Link url="#" label="Docs" />
        <Link url="#" label="GitHub" />
        <Button url="#" label="Download" />
      </div>
    </nav>
  );
}
