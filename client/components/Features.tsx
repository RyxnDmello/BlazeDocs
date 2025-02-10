import Feature from "./Opener/Feature";

import {
  FaGitAlt,
  FaRocket,
  FaServer,
  FaPalette,
  FaTerminal,
  FaBoltLightning,
} from "react-icons/fa6";

export default function Features() {
  return (
    <section className="grid h-dvh cursor-default grid-cols-1 place-items-center items-start justify-center gap-10 py-16">
      <div className="grid grid-cols-1 items-end justify-center gap-4">
        <h4 className="title-fade text-center text-6xl font-semibold tracking-tight">
          What is Blaze?
        </h4>

        <p className="text-center text-2xl font-light tracking-tight opacity-60">
          A code editor. An API testing suite. Something kinda cool.
        </p>
      </div>

      <div className="grid grid-cols-3 place-items-center items-center justify-center gap-4 px-20">
        <Feature
          label="A CLI Powerhouse"
          icon={<FaTerminal className="opacity-50" size="2.25rem" />}
          details="Blaze is a terminal-only tool designed to streamline development workflows with intuitive and powerful features."
        />

        <Feature
          label="Everything in One Place"
          icon={<FaRocket className="opacity-50" size="2.25rem" />}
          details="Edit code, navigate directories, manage Git logs, and test APIs, all within Blaze's seamless Terminal User Interface."
        />

        <Feature
          label="Stay in Sync with Git"
          icon={<FaGitAlt className="opacity-50" size="2.25rem" />}
          details="View your commit history, branches, and stash changes effortlessly with Blaze's Git integration."
        />

        <Feature
          label="Seamless API Testing"
          icon={<FaServer className="opacity-50" size="2.25rem" />}
          details="BlazeAPI provides an intuitive way to create, test, and manage your APIs with real-time response formatting."
        />

        <Feature
          label="Fast, Light, and Efficient"
          icon={<FaBoltLightning className="opacity-50" size="2.25rem" />}
          details="Optimized for performance, Blaze ensures quick execution and smooth transition for an efficient experience."
        />

        <Feature
          label="Snip, Snap, Your Way"
          icon={<FaPalette className="opacity-50" size="2.25rem" />}
          details="Configure shortcuts, customize themes, and extend functionality to match your style with Blaze's flexible settings."
        />
      </div>
    </section>
  );
}
