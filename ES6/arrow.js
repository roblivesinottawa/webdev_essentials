// const square = number => number * number
// result = square(10)
// console.log(result)

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
]

// the filter option will iterate through the jobs array and the function will get the jobs that are active
const activeJobs = jobs.filter(job => job.isActive)
console.log(activeJobs)