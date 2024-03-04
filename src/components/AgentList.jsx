import React from 'react'
import Agent from './Agent'

function AgentList({agents, onAgentClick, setOpenModal}) {
  return (
    <div className='pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {agents.map(agent => (
            <Agent agent={agent} onAgentClick={onAgentClick} setOpenModal={setOpenModal}/>
        ))}
    </div>
  )
}

export default AgentList