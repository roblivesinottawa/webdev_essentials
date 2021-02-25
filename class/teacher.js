import { Person } from './person';

export function promote() {}

export default class Teacher extends Person{
    constructor(name, degree){
        // we have to call super here extracting info from the parent class
        super(name)
        this.degree = degree
    }
    teach() {
        console.log('teach')
    }
}
