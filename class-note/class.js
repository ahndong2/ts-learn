class Person {
  // class 로직
  
  constructor(name, age){
    console.log('생성자');
    this.name = name;
    this.age = age;
  }

}

new Person('세호', 30);
console.log(seho);


// prototype
var user = {name:'capt', age: 100};
// var admin = {name:'capt', age: 100, role: 'admin'};
var admin = {};
admin.__proto__ = user; // admin {}, __proto__ : {name:'capt', age: 100}