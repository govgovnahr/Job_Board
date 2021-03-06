
import React from 'react';
import './App.css';
import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:3001/jobs'

// const mockJobs = [
//   {title: 'JR SWE', company: 'Amazon'},
//   {title: 'Job1', company: 'Company1'},
//   {title: 'Job2', company: 'Company2'},
// ]

async function getJobs(updateCb){
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCb(json);

  console.log({json});
}

function App() {
  
  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() =>{
    getJobs(updateJobs);
  })

  return (
    <div className="App">
      <Jobs jobs={jobList}/>
    </div>
  );
}

export default App;
