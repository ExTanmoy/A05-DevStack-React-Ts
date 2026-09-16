import React from 'react';

const SelectedTechs = () => {
    return (
        <div className=" sticky top-10 card bg-base-100 w-80 self-start shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-lg font-bold ">Your Stack</h2>
                <p className='text-slate-500'>No Technology Selected Yet</p>
                <div className="mt-5 min-h-20 border-2 border-dashed border-slate-200 rounded-xl text-center flex items-center">
                    <p className="text-sm text-slate-500">Your stack is empty.</p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline btn-error">Remove All</button>
                </div>
            </div>
        </div>
    );
};

export default SelectedTechs;