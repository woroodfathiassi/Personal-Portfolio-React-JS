type SkillBadgeProps = {
    skill: string;
};

const SkillBadge = ({ skill }: SkillBadgeProps) => (
    <span
        className="
        rounded-md px-3 py-1 text-sm font-medium backdrop-blur transition
        bg-zinc-900/5 text-zinc-800 hover:bg-zinc-900/10
        dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/15
        "
    >
        {skill}
    </span>
);

export default SkillBadge;
