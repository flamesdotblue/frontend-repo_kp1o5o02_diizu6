import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              Open to opportunities
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Hi, I’m Sagar — a full‑stack developer crafting clean, fast experiences.
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              I build modern web apps with React on the front and Python/Node on the back. I care about performance,
              accessibility, and thoughtful UI that solves real problems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/sagar-chopda"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Connect on LinkedIn <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-gray-900 border border-gray-200 shadow-sm hover:border-gray-300"
              >
                View Projects
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>Remote • Open to relocation</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-100 via-white to-white p-4">
              <div className="absolute inset-4 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_40%)]" />
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-widest text-gray-500">Tech stack</p>
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
                      <span key={t} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
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
