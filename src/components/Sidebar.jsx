import React from 'react'

function Sidebar({ roles }) {
    return (
        <div className='h-full w-4/12 bg-slate-900 flex pt-[25vh] px-10 justify-center'>
            <div>
                <h1 className='text-white text-7xl font-bold'>Choose Your <span className='text-red-500'>Agents</span></h1>
                <div className='mt-12'>
                    <div className='mt-8 flex gap-4'>
                        {roles.map(role => {
                            return <div className='text-white py-2 px-4 bg-slate-600 cursor-pointer rounded-md font-semibold hover:bg-red-500'><p className=''>{role}</p></div>
                        })}
                    </div>
                    <div className='mt-6'>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar