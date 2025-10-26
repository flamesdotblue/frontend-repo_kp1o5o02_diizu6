import { ArrowRight, MapPin } from "lucide-react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability, non-interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 dark:from-black/60 dark:via-black/50 dark:to-black/70" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white">
              Open to opportunities
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Hi, I’m Sagar — a full‑stack developer crafting clean, fast experiences.
            </h1>
            <p className="mt-5 text-lg text-gray-200 leading-relaxed">
              I build modern web apps with React on the front and Python/Node on the back. I care about performance,
              accessibility, and thoughtful UI that solves real problems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/sagar-chopda"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-yellow-400 px-4 py-2 text-black shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                Connect on LinkedIn <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-white border border-white/20 shadow-sm hover:bg-white/15"
              >
                View Projects
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-200">
              <MapPin className="h-4 w-4" />
              <span>Remote • Open to relocation</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl">
              <div className="absolute inset-4 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.18),transparent_40%)]" />
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-widest text-gray-200">Tech stack</p>
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Node.js",
                      "Python",
                      "FastAPI",
                      "Tailwind",
                      "MongoDB",
                    ].map((t) => (
                      <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
