interface User {
  age: number
  name: string,
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User):void {
  console.log(user);
}

const capts = {
  name: '캡틴',
  age: 100
}

getUser(capts);

// 함수의 스펙에 인터페이스를 활용
interface sumFunction{
  (a: number, b: number): number
  // (인자): return값
}

var sum: sumFunction;
sum = (a:number, b:number):number =>{
  return a + b;
}

// 인덱싱

interface StringArray {
  [index: number]: string
}

var arr: StringArray = ['a','b','c'];
arr[0];


// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

// 인터페이스 확장
 interface Person {
   name: string;
   age: number;
 }

 interface Developer extends Person{
   language: string;
 }

 var capt: Developer = {
  language: 'ts',
  age: 30,
  name: '캡틴'
 }