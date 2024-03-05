import { useEffect, useState } from 'react';
import './App.css'
import AgentList from './components/AgentList';
import Sidebar from './components/Sidebar';
import { data } from './data';
import AgentModal from './components/AgentModal';

function App() {
  const [agents, setAgents] = useState(data);
  const [agent, setAgent] = useState(null);
  const [open, setOpen] = useState(false);
  const [activeRole, setActiveRole] = useState("All roles");
  const [searchValue, setSearchValue] = useState("");

  const getRoles = data.map(data => {
    return data.role
  })

  const getDistinctRoles = [...new Set(getRoles)];

  const onAgentClick = (data) => {
    console.log("DATA: ", data);
    const getAgent = [...agents].find(agent => {
      return agent.displayName == data;
    })
    setAgent(getAgent);
  }

  // console.log("ACTIVE ROLE: ", activeRole);
  console.log(searchValue);

  useEffect(() => {
    if (agent) {
      setOpen(true)
    }
  },
    [agent]);

  useEffect(() => {
    if (open == false) {
      setAgent(null);
    }
  }, [open])

  useEffect(() => {
    if (activeRole !== "All roles") {
      const filtered = data.filter(agent => {
        return agent.role == activeRole
      })
      setAgents(filtered)
      setSearchValue("");
    } else {
      setAgents(data);
    }
  }, [activeRole])

  useEffect(() => {
    if (searchValue !== "") {
      let filtered1;
      if (activeRole != "All roles") {
        filtered1 = data.filter(agent => {
          return agent.role == activeRole
        });
      } else {
        filtered1 = data;
      }
      const filtered2 = filtered1.filter(agent => {
        return agent.displayName.toLowerCase().includes(searchValue.toLowerCase());
      })
      setAgents(filtered2);
      // setActiveRole("All roles");
    } else {
      setAgents(data);
    }
  }, [searchValue])

  return (
    <div className='bg-slate-700 pb-16 app'>
      <div className='w-full'>
        <Sidebar roles={getDistinctRoles} activeRole={activeRole} setActiveRole={setActiveRole} setSearchValue={setSearchValue} />
        <div className='px-10 sm:ml-[30vw]'>
          {searchValue && <div className='pt-8'><div>
            <p className='text-white text-lg font-semibold'>Results for "{searchValue}"</p>
            <span onClick={() => {
              setAgents(data)
              setActiveRole("All roles");
              setSearchValue("");
            }} className='bg-red-500 p-1 rounded-sm hover:brightness-95 text-semibold text-white my-3 block max-w-[130px] text-center cursor-pointer'>Clear Search</span>
            </div></div>}
          {(searchValue && agents.length == 0) && <div><p className='text-white font-semibold text-2xl'>No data for "{searchValue}"</p></div>}
          <AgentList agents={agents} onAgentClick={onAgentClick} setOpenModal={setOpen} />
        </div>
        <AgentModal open={open} setOpen={setOpen} agent={agent} />
      </div>
    </div>
  )
}

export default App
