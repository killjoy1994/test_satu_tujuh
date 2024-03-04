import React from 'react'

function Agent({ agent, onAgentClick, setOpenModal }) {
    // console.log(agent);
    return (
        <div onClick={() => {
            onAgentClick(agent.displayName)
        }} className='bg-slate-600 py-6 px-4 cursor-pointer hover:bg-gradient-to-r from-rose-400 to-red-500 shadow-md rounded-md'>
            <img className='w-full hover:scale-110' src={agent.fullPortrait} height={200} width={200} alt="" />
            <h2 className='text-center mt-3 font-bold text-white text-xl'>{agent.displayName}</h2>
        </div>
    )
}

export default Agent