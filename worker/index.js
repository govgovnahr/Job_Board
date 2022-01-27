var CronJob = require('cron').CronJob;

const getJobs = require('./tasks/fetcher.js')

var job = new CronJob('* * * * *', getJobs, null, true, 'America/Los_Angeles');
job.start();