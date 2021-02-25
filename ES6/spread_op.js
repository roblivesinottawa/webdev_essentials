const first = [1,2,3]
const second = [4,5,6]

combined = [...first, 'a', ...second, 'b']
console.log(combined)

// clone an array
const clone = [...first]
console.log(clone)

// with objects

const one = { name: 'John' }
const two = { job: 'programmer'}

const combine = {...one, ...two, location: 'USA'}
console.log(combine)