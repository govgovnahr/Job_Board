const axios = require('axios');

// const baseURL = 'string';
// async function fetchGithub() {
//     let resultCount= 1, onPage = 0;
//     const allJobs = [];

//     while(resultCount > 0) {
//         const res = await fetch(`${baseURL}?page=${onPage}`);
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
        const jobs = await axios.get("https://api.lever.co/v0/postings/lever?mode=json&limit=10");
        let jobNames = [];
        for (let i = 0; i < jobs["data"].length; i++) {
            jobNames.push(jobs["data"][i]["text"]);
        }
        console.log(jobNames);
        return jobNames;
    } catch(error) {
        console.log("There was an error: ", error);
        return [];
    }
}



getJobs();

module.exports = getJobs;