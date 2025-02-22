import { FaGolang, FaWrench, FaGitAlt } from "react-icons/fa6";

import Box from "./Tools/Box";
import Tool from "./Tools/Tool";

export default function Tools() {
  return (
    <section className="grid h-dvh cursor-default grid-cols-1 place-items-center items-start justify-start px-32 py-16">
      <h4 className="text-center text-6xl font-semibold tracking-tight">
        <span className="title-fade">The Ember Behind</span>{" "}
        <span className="title-flame">The Flame</span>
      </h4>

      <div className="grid grid-cols-1 place-items-center items-center justify-center gap-10">
        <Box />

        <div className="grid grid-flow-col items-center justify-center gap-8">
          <Tool
            icon={
              <FaGolang
                className="-mt-[1rem] mb-[1.8rem] opacity-50 transition-all group-hover:text-white group-hover:opacity-100"
                size="4.65rem"
              />
            }
            url="https://go.dev/"
            label="Golang"
            description="Ensures high performance, efficiency, and concurrency, making CLI tools fast and lightweight while handling complex operations and tasks smoothly."
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
            description="Integrates real-time version control, allowing developers to track commits, manage branches, and view logs without leaving the terminal."
          />
        </div>
      </div>
    </section>
  );
}
