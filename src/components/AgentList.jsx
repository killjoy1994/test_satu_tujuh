import React from 'react'
import Agent from './Agent'

function AgentList({agents}) {
  return (
    <div className='pt-14 px-10 grid grid-cols-3 gap-4'>
        {agents.map(agent => (
            <Agent agent={agent} />
        ))}
    </div>
  )
}

export default AgentList