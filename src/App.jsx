import { useState } from 'react';
import './App.css'
import AgentList from './components/AgentList';
import Sidebar from './components/Sidebar';
import { data } from './data';

function App() {
  const [agents, setAgents] = useState(data);

  const getRoles = data.map(data => {
    return data.role
  })

  const getDistinctRoles = [...new Set(getRoles)];

  console.log(getDistinctRoles);

  return (
    <div className='min-h-[100vh] bg-black'>
      <div className='flex w-full h-[100vh]'>
        <Sidebar roles={getDistinctRoles} />
        <div className='bg-slate-200 w-8/12'>
          <AgentList agents={agents}/>
        </div>
      </div>
    </div>
  )
}

export default App
