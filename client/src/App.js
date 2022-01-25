import React from 'react';
import './App.css';
import Jobs from './Jobs';

const mockJobs = [
  {title: 'JR SWE', company: 'Amazon'},
  {title: 'Job1', company: 'Company1'},
  {title: 'Job2', company: 'Company2'},
]


function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs}/>
    </div>
  );
}

export default App;
