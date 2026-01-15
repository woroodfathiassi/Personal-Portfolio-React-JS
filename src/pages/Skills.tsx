import { useEffect } from "react";
import { Helmet } from "react-helmet";
import SkillBadge from "@/components/SkillBadge";
import skills from "@/constants/skills";

const SkillsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <Helmet>
            <title>Skills | Worood Assi - Front-end Developer</title>
            <meta
                name="description"
                content="Explore my technical skills across frontend, backend, databases, cloud, and development tools."
            />
                {/* Open Graph Meta Tags */}
            <meta property="og:title" content="Skills | Worood Assi" />
            <meta
                property="og:description"
                content="Explore my technical skills across frontend, backend, databases, cloud, and development tools."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://woroodassi.netlify.app/skills" />
            <meta property="og:site_name" content="Worood Assi" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Skills | Worood Assi" />
            <meta
                name="twitter:description"
                content="Explore my technical skills across frontend, backend, databases, cloud, and development tools."
            />
            <meta name="twitter:site" content="Worood Assi" />
        </Helmet>

        <div className="container m-auto p-3">
            {/* Header (same style as ProjectsPage) */}
            <h1 className="pt-3 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Skills & Expertise
            </h1>
            <p className="mb-10 mt-3 text-base text-zinc-600 dark:text-zinc-400">
                A curated set of technologies and tools I use to design, build, and maintain
                high-quality software solutions.
            </p>

            {/* Grid */}
            <div className="grid gap-8 md:grid-cols-2">
                {skills.map((group) => (
                    <article
                    key={group.title}
                    className="
                        group relative overflow-hidden rounded-2xl border p-8 shadow-sm backdrop-blur
                        border-zinc-200 bg-white/70 text-zinc-800
                        transition hover:-translate-y-1 hover:shadow-lg
                        dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:text-zinc-100
                    "
                    >
                    {/* Decorative top line (brand color) */}
                    <div
                        className="
                        absolute inset-x-0 top-0 h-1 opacity-0 transition group-hover:opacity-100
                        bg-gradient-to-r from-[#fff4f4] via-[#ffebef] to-[#ffb5c5]
                        dark:from-[#fff4f4] dark:via-[#ffebef] dark:to-[#ffb5c5]/100
                        "
                    />

                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                        {group.title}
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {group.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {group.items.map((skill: string) => (
                        <SkillBadge key={skill} skill={skill} />
                        ))}
                    </div>
                    </article>
                ))}
            </div>
        </div>
        </>
    );
};

export default SkillsPage;