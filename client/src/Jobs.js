import React from 'react';
import Typography from '@mui/material/Typography';
import './App.css';
import Job from './Job';



export default function Jobs({jobs}) {
    return (
        <div className='jobs'>
             <Typography variant='h1'>
                 Jobs
             </Typography>
             {
                 jobs.map(
                    job => <Job job={job} />
                 )
             }
        </div>
    )
}