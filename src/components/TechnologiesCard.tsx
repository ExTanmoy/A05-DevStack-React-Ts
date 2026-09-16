import React from 'react';
import type { ITechnology } from '../types/ITechnology';

const TechnologiesCard = ({technology}:{technology: ITechnology}) => {
    
    return (
     <div>
        <div className="card  bg-base-100 w-full h-full max-w-md shadow-xl p-5">

            {/* card image & badge */}
            <figure className='flex justify-between'>
                <img
                className='w-12'
                src={technology.icon}
                alt={technology.name} />
                <span
                    className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600"
                    >
                    {technology.badge}
                </span>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{technology.name}</h2>
                <p>{technology.description}</p>
            </div>

            {/* Card catagory */}
            <div className="flex items-center justify-between border-t border-base-200  py-2 text-sm">
                <span className="badge badge-ghost text-sm rounded-md">
                    {technology.category}
                </span>
                <span className="text-base-content/60">{technology.difficulty}</span>
                <span className="flex items-center gap-1 font-semibold">
                    <span className="mask mask-star-2 size-5 bg-amber-400"></span>
                    {technology.rating}
                </span>
            </div>

            {/* card button */}
            <div className="card-actions justify-center">
                <button className="btn btn-primary btn-block h-12 rounded-xl text-base font-medium mt-2 transition-none">Buy Now</button>
            </div>
        </div>
    </div>
    );
};

export default TechnologiesCard;