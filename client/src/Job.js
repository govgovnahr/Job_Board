import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';


export default function Job( {job}) {


    return (
        <div className={'job'}>
            <div>{job.text}</div> 
            <div>{job.categories.location}</div>
        </div>
    )
}