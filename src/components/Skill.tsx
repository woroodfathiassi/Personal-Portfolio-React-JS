type SkillProps = {
    image: string;
    title: string;
};

const Skill = ({ image, title }: SkillProps) => {
    return (
        <div className='group flex flex-col items-center text-center rounded-md p-5 cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-700'>
            <img
                src={image}
                alt={title}
                className='w-[4rem] grayscale-[50%] group-hover:grayscale-0'
            />
            <span className='uppercase'>{title}</span>
        </div>
    );
};

export default Skill;