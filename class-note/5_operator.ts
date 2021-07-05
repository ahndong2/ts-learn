function logMessage (value: string|number): void {
  console.log(value)
}

logMessage('hello');
logMessage(100);


interface Developer {
  name: string,
  skill: string
}
interface Person {
  name: string,
  age: number;
}

function askSomeone(someone: Developer | Person){
  someone.age
}

function askSomeone1(someone: Developer & Person){
  someone.age
}