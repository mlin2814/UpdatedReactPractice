class Person {
  constructor(name = 'Anon', age = 0) {
    this.name = name;
    this.age = age
  }
  getGreeting(){
    // return 'Hi ' + this.name + '!';
    return `Hi. I'm ${this.name}`
  }
  getDesc(){
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person('Mike Jones', 12);
// console.log(me.getGreeting());
console.log(me.getDesc());

const other = new Person();
// console.log(other.getGreeting());
console.log(other.getDesc());
