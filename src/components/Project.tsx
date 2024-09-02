import { LuLink } from 'react-icons/lu';
import FormattedDate from '@/utils/FormattedDate ';
import ProjectData from '@/interfaces/ProjectData';

interface ProjectProps {
    Pdata: ProjectData;
}

const Project = ({ Pdata }: ProjectProps) => {
    const dateFormatted = FormattedDate(Pdata.date);

    return (
        <a 
            href={Pdata.link} 
            className='group p-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900'
        >
            <p 
                className='font-time mb-2 border-l-4 border-r-0 border-t-0 border-b-0 rounded-sm border-l-zinc-200 text-zinc-400 dark:text-zinc-300 dark:border-l-zinc-500 pl-3'
            >
                {dateFormatted}
            </p>
            <h2 className='flex gap-1 items-center font-bold tracking-tight text-zinc-800 dark:text-zinc-100'>
                <LuLink className='group-hover:text-mainColor' />
                {Pdata.title}
            </h2>
            <p className='my-2 text-sm text-zinc-600 dark:text-zinc-400'>
                {Pdata.description}
            </p>
        </a>
    );
};

export default Project;
