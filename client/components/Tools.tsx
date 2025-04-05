import { FaGolang, FaWrench, FaGitAlt } from "react-icons/fa6";
import { IoMdColorPalette } from "react-icons/io";
import { GiSnake } from "react-icons/gi";

import Tool from "./Tools/Tool";

export default function Tools() {
  return (
    <section className="relative grid h-dvh cursor-default grid-cols-1 place-items-center items-center">
      <h4 className="text-center text-6xl font-semibold tracking-tight">
        <span className="title-fade">The Ember Behind</span>{" "}
        <span className="title-flame">The Flame</span>
      </h4>

      <div className="grid grid-cols-1 place-items-center items-center justify-center gap-5">
        <div className="flex flex-row place-items-center items-center justify-center gap-5">
          <Tool
            icon={
              <FaGolang
                className="-mt-[1rem] mb-[1.8rem] opacity-50 transition-all group-hover:text-white group-hover:opacity-100"
                size="4.65rem"
              />
            }
            url="https://go.dev/"
            label="Golang"
            description="Ensures high performance, efficiency, and concurrency, making Blaze CLI fast and lightweight while handling complex operations and tasks smoothly."
          />

          <Tool
            icon={
              <FaWrench
                className="mb-[3rem] opacity-50 transition-all group-hover:text-white group-hover:opacity-100"
                size="2.5rem"
              />
            }
            url="https://github.com/rivo/tview"
            label="Tview"
            description="An intuitive and interactive TUI, enabling seamless navigation, structured layouts, customizations, and a highly enhanced terminal experience."
          />

          <Tool
            icon={
              <FaGitAlt
                className="mb-[2.5rem] opacity-50 transition-all group-hover:text-white group-hover:opacity-100"
                size="3rem"
              />
            }
            url="https://git-scm.com/"
            label="Git"
            description="With version control directly integrated into Blaze, developers can easily track commits, manage branches, and view logs without leaving the editor."
          />
        </div>

        <div className="flex flex-row place-items-center items-center justify-center gap-5">
          <Tool
            icon={
              <GiSnake
                className="mb-[2.5rem] opacity-50 transition-all group-hover:text-white group-hover:opacity-100"
                size="3rem"
              />
            }
            url="https://git-scm.com/"
            label="Viper"
            description="With Viper, you can configure keymaps, behavior, and appearance effortlessly, ensuring the editor is adaptable to your development style and workflow."
          />

          <Tool
            icon={
              <IoMdColorPalette
                className="mb-[2.5rem] opacity-50 transition-all group-hover:text-white group-hover:opacity-100"
                size="3rem"
              />
            }
            url="https://git-scm.com/"
            label="Chroma"
            description="A flexible syntax highlighter supporting multiple languages, providing clean and customizable highlighting for a better development experience."
          />
        </div>
      </div>
    </section>
  );
}
