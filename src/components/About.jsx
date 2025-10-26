const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">About</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I’m a pragmatic engineer who enjoys turning ambiguous ideas into reliable, maintainable software. My work
            spans product engineering, APIs, and developer experience. I value clear communication, lean processes, and
            a strong feedback loop with users.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Recently I’ve been focused on building full‑stack apps with React, TypeScript, and Python/FastAPI, with a
            keen eye on performance and accessibility.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Experience", value: "4+ years" },
            { label: "Core", value: "React, TypeScript, Node" },
            { label: "Backend", value: "Python, FastAPI, Postgres" },
            { label: "Other", value: "Docker, CI/CD, Testing" },
          ].map((item) => (
            <li key={item.label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-gray-500">{item.label}</p>
              <p className="mt-1 text-gray-900 font-medium">{item.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
