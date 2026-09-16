import React, { use } from 'react';
import type { ITechnology } from '../types/ITechnology';
import TechnologiesCard from './TechnologiesCard';
import SelectedTechs from './SelectedTechs';

interface ITechnologiesDataProps {
    technologiesDataPromise: Promise<ITechnology[]>
}
const Technologies = ({technologiesDataPromise}:ITechnologiesDataProps) => {
    
    const technologies = use(technologiesDataPromise)
    
    return (
        <div className='container mx-auto'>
            <div className='space-y-3'>
                <h2 className='text-4xl font-bold'>Explore the <span className='bg-linear-to-r from-[#FF5722] via-[#cd1a76] to-[#7138d3] bg-clip-text text-transparent'>Technologies</span></h2>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>

            {/* Tech Shop Area */}
            <div className='grid grid-cols-[3fr_1fr] gap-8'>
                {/* techcard */}
                <div className='grid grid-cols-3 gap-8 justify-center items-strech '>
                    {
                        technologies.map((technology: ITechnology) => {
                        return <TechnologiesCard key={technology.id} technology={technology}></TechnologiesCard>
                    })
                    }
                </div>

                {/* selected tech */}
                <SelectedTechs></SelectedTechs>
            </div>
        </div>
    );
};

export default Technologies;