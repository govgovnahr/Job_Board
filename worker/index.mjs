import {CronJob} from 'cron'

import {getJobs} from './tasks/fetcher.mjs'

// var job = new CronJob('* * * * *', getJobs, null, true, 'America/Los_Angeles');
var job = new CronJob('0 * * * *', getJobs, null, true, 'America/Los_Angeles');
job.start();