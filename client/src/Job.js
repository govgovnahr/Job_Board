import React, { useEffect } from 'react';
import './App.css';


export default function Job( {job}) {

    return (
        <div className={'job'}>
            <div>{job.title}</div> 
             <div>{job.company}</div>
        </div>
    )
}