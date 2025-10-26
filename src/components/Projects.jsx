import { ExternalLink, Folder, Code } from "lucide-react";

const projects = [
  {
    title: "InsightBoard",
    description:
      "Analytics dashboard with role-based access, live charts, and audit logs.",
    tags: ["React", "Node", "Postgres", "Tailwind"],
    link: "#",
  },
  {
    title: "TaskFlow API",
    description:
      "Production-ready FastAPI service with JWT auth and background jobs.",
    tags: ["Python", "FastAPI", "Redis", "Docker"],
    link: "#",
  },
  {
    title: "ShopLite",
    description:
      "Headless e‑commerce starter with payments, search, and CMS integration.",
    tags: ["Next.js", "Stripe", "Algolia", "MongoDB"],
    link: "#",
  },
];

const ProjectCard = ({ title, description, tags, link }) => (
  <div className="group relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-2 text-indigo-600">
        <Folder className="h-5 w-5" />
        <Code className="h-4 w-4" />
      </div>
      <a
        href={link}
        target={link?.startsWith("http") ? "_blank" : undefined}
        rel={link?.startsWith("http") ? "noreferrer" : undefined}
        className="text-gray-500 hover:text-gray-900"
        aria-label={`Open ${title}`}
      >
        <ExternalLink className="h-5 w-5" />
      </a>
    </div>
    <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-gray-100 text-gray-700 border border-gray-200 px-2.5 py-1 text-xs"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
          <p className="mt-2 text-gray-600">
            A selection of real-world builds. More available on request.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/sagar-chopda"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 hover:border-gray-300"
        >
          View more on LinkedIn <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />)
        )}
      </div>
    </section>
  );
};

export default Projects;
