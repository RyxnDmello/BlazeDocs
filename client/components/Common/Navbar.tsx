import Button from "./Navbar/Button";
import Link from "./Navbar/Link";

export default function Navbar() {
  return (
    <nav className="flex h-fit items-center justify-between px-6 py-4">
      <a href="#" className="cursor-pointer font-orbitron text-[1.5rem]">
        BLAZE
      </a>

      <div className="flex place-items-center space-x-8">
        <Link url="#" label="Docs" />
        <Link url="#" label="GitHub" />
        <Button url="#" label="Download" />
      </div>
    </nav>
  );
}
