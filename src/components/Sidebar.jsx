import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import BackgroundImage from "../assets/images/sideBackground.jpg"
import { twMerge } from 'tailwind-merge'

function Sidebar({ roles, activeRole, setActiveRole, setSearchValue }) {
    const [inputtedAgent, setInputtedAgent] = useState("");

    const onEnterPress = (e) => {
        if (e.key === 'Enter') {
            // console.log("Enter key pressed");
            setSearchValue(inputtedAgent);
            setInputtedAgent("");
        }
    };

    return (
        <div className='hidden h-full w-[28vw] bg-slate-900 sm:flex pt-[10vh] lg:pt-[15vh] px-10 justify-center fixed' style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: '20% center' }}>
            <div className='w-full'>
                <div>
                    <h1 className='md:text-4xl lg:text-5xl text-white font-bold'>Valorant Wiki</h1>
                    <p className='text-white md:text-xl mt-3 font-medium'>Lets dig deep the <span className=''>Agents</span> to improve your gameplay.</p>
                </div>
                <div className='mt-9'>
                    <div className='md:mt-5 bg-slate-800 p-4 lg:px-5 lg:py-6 rounded-md shadow-xl'>
                        <div >
                            <h4 className='text-slate-50 font-semibold text-lg'>Search agent </h4>
                            <div className='mt-1 relative flex bg-slate-800 items-center justify-between h-10 rounded-sm xl:max-w-[500px]'>
                                <input onKeyDown={(e) => onEnterPress(e)} onChange={(e) => setInputtedAgent(e.target.value)} value={inputtedAgent} className='w-full px-3 py-1 mr-2 block rounded-md bg-slate-700 text-slate-50 text-base 
                                font-medium' type="text" placeholder='Enter agent name...' />
                                <div className='px-2 absolute top-3 right-2'>
                                    <MagnifyingGlassIcon height={20} width={20} className='text-slate-400' />
                                </div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h4 className='text-slate-50 font-semibold text-lg'>Agent Roles: </h4>
                            <div className='mt-1 justify-center md:justify-start  flex flex-wrap gap-4 py-3'>
                                <div onClick={() => setActiveRole("All roles")} className={twMerge('text-white py-[2px] px-2 lg:px-3 text-sm lg:text-base cursor-pointer rounded-md font-semibold hover:bg-red-500', activeRole == "All roles" ? "bg-red-500" : "bg-slate-600")}><p className='text-sm'>All roles</p></div>
                                {roles.map(role => {
                                    return <div key={role} onClick={() => setActiveRole(role)} className={twMerge('text-white py-[2px] px-2 lg:px-3 text-sm lg:text-base cursor-pointer rounded-md font-semibold hover:bg-red-500', activeRole == role ? "bg-red-500" : "bg-slate-600")}><p className='text-sm'>{role}</p></div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar