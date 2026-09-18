import  { use, useState } from 'react';
import type { ITechnology } from '../types/ITechnology';
import TechnologiesCard from './TechnologiesCard';
import SelectedTechs from './SelectedTechs';

interface ITechnologiesDataProps {
    technologiesDataPromise: Promise<ITechnology[]>
}
const Technologies = ({technologiesDataPromise}:ITechnologiesDataProps) => {
    
    const technologies = use(technologiesDataPromise)

    const [selectedTechs, setSelectedTechs] = useState <ITechnology[]> ([])
    
    
    return (
        <div className='container mx-auto py-10'>
            <div className='space-y-3'>
                <h2 className='text-4xl font-bold'>Explore the <span className='bg-linear-to-r from-[#FF5722] via-[#cd1a76] to-[#7138d3] bg-clip-text text-transparent'>Technologies</span></h2>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>

            {/* Tech Shop Area */}
            <div className='grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 py-10'>

                {/* techcard */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch '>
                    {
                        technologies.map((technology: ITechnology) => {
                        return <TechnologiesCard key={technology.id} technology={technology} selectedTechs={selectedTechs} setSelectedTechs={setSelectedTechs}></TechnologiesCard>
                    })
                    }
                </div>

                {/* selected tech */}
                <SelectedTechs selectedTechs={selectedTechs} setSelectedTechs={setSelectedTechs}></SelectedTechs>
            </div>
        </div>
    );
};

export default Technologies;