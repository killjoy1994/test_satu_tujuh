import React from 'react'

function Agent({agent}) {
  return (
    <div className='bg-slate-600 h-[400px]'>
        <h2>{agent.displayName}</h2>
    </div>
  )
}

export default Agent