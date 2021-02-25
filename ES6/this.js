// const person = {
//     name: 'Mosh',
//     walk() {
//         console.log(this)
//     }
// }
// this returns a reference to the person object

// person.walk()

// turn walk into a function
// const walk = person.walk.bind(this)
// walk()


// const person = {
//     talk() {
//         // as a standalone function, this will return the window object
//         setTimeout(function(){
//             console.log(this)
//         }, 1000)
        
//     }
// }

// person.talk()

// to solve the above problem and get the reference to the object:
const person1 = {
    talk() {
        // 1.define a variable(old way)
        // var self = this;
        // best practice is to change the function to an arrow function
        setTimeout(() => {
            console.log(this)
        }, 1000)
        
    }
}

person1.talk()