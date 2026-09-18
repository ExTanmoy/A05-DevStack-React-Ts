import  { type Dispatch, type SetStateAction } from 'react';
import type { ITechnology } from '../types/ITechnology';
import { FiX } from 'react-icons/fi';
import toast from 'react-hot-toast';

interface ISelectedTechsProps {
    selectedTechs: ITechnology[];
    setSelectedTechs: Dispatch<SetStateAction<ITechnology[]>>
}

const SelectedTechs = ({selectedTechs, setSelectedTechs}: ISelectedTechsProps) => {
    const count:number = selectedTechs.length
    // console.log(count)


    // Function to remove a tech from selected Array
    const handleRemoveTech = (tech:ITechnology) => {
        const restTechs = selectedTechs.filter((selectedTech : ITechnology) => selectedTech.id !== tech.id
        )
        setSelectedTechs(restTechs)
        toast(`${tech.name} is Removed from stack successfully!`)
    }

    // Function to remove all tech items 
    const handleRemoveAll = () => {
        setSelectedTechs([])
        toast("All technologies are Removed from stack successfully!")
    }
    return (
        <div className=" sticky top-20 z-10 card bg-base-100 w-80 self-start shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">Your Stack</h2>
                <p className='text-slate-500 '>{count} Technology Selected Yet</p>
                <div className="mt-5 min-h-20 border-2 border-dashed border-slate-200 rounded-xl w-full flex flex-col gap-2 ">
                    {
                        count === 0 ? (
                            <p className="text-sm text-slate-500">Your stack is empty.</p>
                        ) : (
                            <div>
                                {
                                    selectedTechs.map((tech:ITechnology) => {
                                        return (
                                            <div key={tech.id} className='flex justify-between items-center w-full p-2 bg-slate-50'>
                                                <div className='flex items-center gap-3'>
                                                    <img src={tech.icon} alt={tech.name} className='w-8 h-8 object-contain' />
                                                    <div>
                                                        <h2 className='font-semibold text-sm text-slate-800'>{tech.name}</h2>
                                                        <p className='text-xs text-slate-500'>{tech.category}</p>
                                                    </div>
                                                </div>
                                                

                                                {/* Button to remove a tech item */}
                                                <button className='cursor-pointer' onClick={() => handleRemoveTech(tech)}>
                                                    <FiX />
                                                </button>
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>
                        )
                    }
                    
                </div>

                {/* Button to remove all tech items */}
                <div className="card-actions justify-center">
                    <button onClick={handleRemoveAll} disabled = {count === 0} className="btn btn-outline btn-error">Remove All</button>
                </div>
            </div>
        </div>
    );
};

export default SelectedTechs;