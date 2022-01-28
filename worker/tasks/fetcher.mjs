//axios for API pull, redis for data store
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
        const jobs = await axios.get("https://api.lever.co/v0/postings/lever?mode=json&limit=100");
        let allJobs = [];
        for (let i = 0; i < jobs["data"].length; i++) {
            allJobs.push(jobs["data"][i]);
        }
        // console.log(jobNames);
        // const jrJobs = jobNames.filter(job =>{
        //     const jobTitle = jobNames.text.toLowerCase();
        //             if (jobTitle.includes('senior') || jobTitle.includes('manager') || jobTitle.includes('product') || jobTitle.includes('architect')) {
        //                 return false;
        //             }
        //             return true;
        // })
        await client.connect();
        const success = await client.set('lever',JSON.stringify(allJobs));
        console.log(allJobs);
        
        // for (job in jobNames) {
        //     jobTitle = job.toLowerCase();
        // }

        
        
    
        // console.log(client);
        console.log(success);
        
        return allJobs;
    } catch(error) {
        console.log("There was an error: ", error);
        return [];
    }

}

getJobs();

export {getJobs}