class Person {
  constructor(name = 'Anon', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    // return 'Hi ' + this.name + '!';
    return `Hi. I'm ${this.name}.`;
  }
  getDesc(){
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDesc(){
    let desc = super.getDesc();
    if (this.hasMajor()) {
      desc += ` Their major is ${this.major}.`;
    }
    return desc;
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  getGreeting(){
    let greeting = super.getGreeting();
    if (this.location) {
      greeting += ` I'm visiting from ${this.location}.`;
    }
    return greeting;
  }
}

const me = new Traveler('Mike Jones', 12, 'Madrid');
// const me = new Student('Mike Jones', 12, 'English');
console.log(me.getGreeting());
// console.log(me.getDesc());

const other = new Traveler();
// const other = new Student();
console.log(other.getGreeting());
// console.log(other.getDesc());
