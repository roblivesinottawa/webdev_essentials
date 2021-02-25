// the class is the blueprint
class Person {
    // initializer
    constructor (name) {
        this.name = name
    }

    walk() {
        console.log(`walk`)
    }
}

// create the objects or instantiate the object
const person = new Person('John Doe')
person.walk

// create another class and this class will inherit from the Person class
class Teacher extends Person{
    constructor(name, degree){
        // we have to call super here extracting info from the parent class
        super(name)
        this.degree = degree
    }
    teach() {
        console.log('teach')
    }
}

// instantiate a new Teacher object
const teacher = new Teacher('John Doe', 'CompSci')
console.log(`teacher ${teacher.name} has a degree in ${teacher.degree}`)