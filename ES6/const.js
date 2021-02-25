// const x = 10
// x = 20

// defining an object
const person = {
    name: "Rob",
    // define a method(function)
    walk() {},
    talk() {}
}

// use . notation to access the value in those methods.
// if we know ahead what values we need to access.
person.talk();


// or bracket notation
person['name'] = 'John';

const targetMember = 'name';
person[targetMember.value] = "John"

console.log(person)