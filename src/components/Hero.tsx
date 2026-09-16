import React from 'react';
import Banner from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <section className='flex gap-7 container mx-auto min-h-screen justify-between items-center'>
            <div className='grid grid-cols-1 items-center'>

                {/* Hero content */}
                <div className='space-y-5'>
                    <h1 className='text-6xl font-bold '>Build Your Ideal <br /> <span className='bg-linear-to-r from-[#FF5722] via-[#cd1a76] to-[#7138d3] bg-clip-text text-transparent'>Development Stack</span></h1>
                    <p className='mt-10 max-w-150 text-[#475569] text-lg leading-7 text-left px-0'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>

                    <div className='flex gap-5 mt-10'>
                        <button className="btn btn-outline text-white border-gray-300 px-8 bg-linear-to-r from-[#FF5722] to-[#cd1a76] hover:text-black">Explore Technologies</button>
                        <button className="btn btn-outline text-white border-gray-300 px-10 bg-linear-to-r from-[#FF5722] to-[#cd1a76]  hover:text-black">Learn More</button>
                    </div>
                </div>

                
            </div>

            {/* Hero Image */}
            <div>
                <img src={Banner} alt="" />
            </div>
        </section>
    );
};

export default Hero;