import Navbar from "./Common/Navbar";
import Command from "./Header/Command";

export default function Header() {
  return (
    <header className="relative grid h-dvh grid-cols-1 items-start justify-center">
      <Navbar />

      <div className="grid cursor-default grid-cols-1 place-items-center gap-10">
        <h1 className="title-fade pb-3 text-center text-[6.5rem] font-bold tracking-tighter">
          The Blazingly Fast CLI
        </h1>

        <p className="text-center text-2xl font-light tracking-tight text-[#ffffff50]">
          A{" "}
          <span className="text-white opacity-70">Command Line Interface</span>{" "}
          designed for developer productivity. <br />
          Experience a Code Editor and API Testing Suite directly in your
          terminal.
        </p>

        <button className="w-fit rounded-md bg-white px-8 py-3">
          <p className="font-[500] text-black">Get Started</p>
        </button>

        <Command
          url="go get github.com/ryxndmello/blaze@master"
          label="blaze@master"
        />
      </div>
    </header>
  );
}
