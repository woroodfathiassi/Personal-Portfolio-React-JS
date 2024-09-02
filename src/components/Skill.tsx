type SkillProps = {
    image: string;
    title: string;
};

const Skill = ({ image, title }: SkillProps) => {
    return (
        <div className='text-center rounded-md p-5 cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-700'>
            <img
                src={image}
                alt={title}
                className='w-[4rem]'
            />
            <h2 className='font-500 uppercase'>{title}</h2>
        </div>
    );
};

export default Skill;