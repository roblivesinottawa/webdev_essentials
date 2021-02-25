const address = {
    street: '10 Main St',
    city: 'Toronto',
    country: 'Canada',
}

// destructuring
const {  street, city, country } = address;
console.log(address) 

const { city: ct } = address
console.log(ct)