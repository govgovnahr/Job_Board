
import axios from 'axios';

import {createClient} from 'redis';

(async () => {
  const client = createClient();

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  await client.set('key', 'value');
  const value = await client.get('key');
})();

// var input = 'lever';
// const baseURL = `https://api.lever.co/v0/postings/${input}?mode=json&limit=`;
// async function fetchJobs() {
//     let resultCount= 1, onPage = 0;
//     const allJobs = [];

//     while(resultCount > 0) {
//         const res = await axios.get(`${baseURL}${onPage}`);
//         const jobs = await res.json();
//         allJobs.push(...jobs);
//         resultCount = jobs.length
//         console.log('got', jobs.length, 'jobs');
//         onPage++;
//     }
//     console.log('got', allJobs.length, 'jobs')
    
// }

async function getJobs() {
    try {
        const client = createClient();
        const jobs = await axios.get("https://api.lever.co/v0/postings/lever?mode=json&limit=50");
        let jobNames = [];
        for (let i = 0; i < jobs["data"].length; i++) {
            jobNames.push(jobs["data"][i]["text"]);
        }
        // console.log(jobNames);
        await client.connect();
        const success = await client.set('lever',JSON.stringify(jobNames))
        console.log(success)
        return jobNames;
    } catch(error) {
        console.log("There was an error: ", error);
        return [];
    }
}



getJobs();

// module.exports = getJobs;