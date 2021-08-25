class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getName(){
        const name = this.lastName + this.firstName;
        return name;
    }

    say(){
        const name = this.getName();
        const text = name + ":" + this.age;
        return text;
    }
}

const person = new Person("tukatora","tou",40);
const text = person.say();
console.log(text);
