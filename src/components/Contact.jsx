import { Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-8 shadow-sm">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Let’s work together</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              I’m currently exploring new roles and freelance opportunities. If you have a project in mind or a role that might be a fit, let’s connect.
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Remote • Pune, India</span></div>
              <a href="mailto:hello@sagarchopda.dev" className="flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" /><span>hello@sagarchopda.dev</span></a>
              <a href="https://www.linkedin.com/in/sagar-chopda" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline"><Linkedin className="h-4 w-4" /><span>linkedin.com/in/sagar-chopda</span></a>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-transparent text-gray-900 dark:text-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-transparent text-gray-900 dark:text-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-transparent text-gray-900 dark:text-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Tell me about your project" />
            </div>
            <button type="button" onClick={() => alert('Thanks for reaching out! Please email or message me on LinkedIn.')} className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Send message
            </button>
          </form>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Sagar Chopda. All rights reserved.</p>
    </section>
  );
};

export default Contact;
