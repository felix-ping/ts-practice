var a = function (xx: string): string { return xx }

function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length
  } else {
    return something.toString().length
  }
};

let expectBoolean: boolean = false
let u: number = undefined;
u = 1

function getLength2(something: string | number): string {
  return something.toString();
}

let xcatliu: [string, number];
xcatliu[0] = 'XcaLiu';
xcatliu[1] = 25;
xcatliu.push('http://xcatliu.com/');

// enum Week {
//   Sun, Mon, Tue, Wed, Thu, Fri, Sat
// }

// console.log(Week[0] === 'Sun');

//常数枚举
// const enum Directions { Up, Down, Left, Right }
// let directions = [Directions.Up, Directions.Right];
// (window as any).foo=1
class Animals {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let asd: Animals = new Animals('Jack');
console.log(asd.sayHi());

function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom1 = getCacheData('tom1') as Cat;
console.log(`a -> tom1`, tom1)
tom1.run();
//实现implements
interface Alarm {
  alert()
}
interface Light extends Alarm {
  lightOn();
  lightOff();
}
let mySum: (x: number, y: number) => number = (x: number, y: number): number => x + y
class Car implements Light {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  alert() {
    'xxx'
  }
  lightOn() {
    console.log('light on');
  }
  lightOff() {
    console.log('light off');
  }
}

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source, subString): boolean {
  return source.search(subString) !== -1;
}
mySearch('a', '1')

//void, never, object(非原始类型值,允许你给它赋任意值 -
// 但是却不能够在它上面调用任意的方法)

//断言
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
function reverse(x: string): string;
function reverse(x: number): number;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

let x = reverse('qwerty')
console.log(`a -> x`, x)
interface SquareConfig {
  color?: string;
  width?: number;
  [x: string]: any;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  return
}
//正常跳过类型检查:索引签名
let squareOptions = { colour: "red", width: 100, xxx: 'xxx' };
let mySquare2 = createSquare(squareOptions);
//用断言强行跳过检查
let mySquare = createSquare(<SquareConfig>{ colour: "red", width: 100 });

interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

///////////我真的不知道这坨东西是要干啥
// class Animal {
//   name: string;
// }
// class Dog extends Animal {
//   breed: string;
// }
// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }

//数字索引类型必须是字符串索引类型的子类型
interface NumberDictionary {
  [index: string]: number | string | boolean;
  length: number;    // 可以，length是number类型
  name: string      // 错误，`name`的类型与索引类型返回值的类型不匹配
  [abs: number]: boolean
}


function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface fnInterface {
  (arg1: string, arg2: number): number | boolean
}
let fn1: fnInterface
fn1 = function (arg1: string, arg2: number) {
  return +arg1 + arg2
}
fn1('zhangsan', 18)



interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
//这里为什么要断言?
function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;




class Animal {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

//箭头函数
let myAdd: (baseValue: number, increment: number) => number =
  (x: number, y: number): number => { return x + y; };

//剩余参数
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");


//泛型
interface first {
  <T>(arg1: T, arg2: T): T

}
let result: first
result = function plus<T>(arg1: T, arg2: T): T {
  return arg1 <= arg2 ? arg2 : arg1;
}
result<number>(1, 2)
//两个泛型之间不能相加 但是如果我要求两个参数之和怎么办?number?

interface go {
  change<T>(val: T): T
}
class Money implements go {
  change<T>(val: T): T {
    return val
  }
}
let earning = new Money()



class Animal2222 {
  protected readonly name;
  public constructor(name) {
    this.name = name;
  }
  public eat(){}
  private run(){

  }
  protected sleep(){}
  jump(){}
}

class Catx extends Animal2222 {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}


function swap2<T,U>(tuple:[T,U]):[U,T]{
  return [tuple[1],tuple[0]]
}

swap2([7,'seven'])


function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
      // target[id] = (<T>source)[id];//为何？
      // target[id] = (<U>source)[id];//报错
      // target[id] = source[id];//报错
      // (<T>target)[id] = (<U>source)[id];//报错
      // (<U>target)[id]  = source[id];
      // (<T>target)[id] = (<T>source)[id];
      // (<U>target)[id] = (<T>source)[id];
      // (<U>target)[id] = (<U>source)[id]; 
  }
  return target;
}
let obj = { a: 1, b: 2, c: 3, d: 4 };
copyFields(obj, { b: 10, d: 20 });

type ReturnType2<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

let test2:ReturnType2<any>=function(c){
  console.log(c)
}


type x ='a'|'b'|'c'
let f :x = 'a'



type Container<T> = { value: T };
let test:Container<string> ={value:'sx'}


type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;


type Words = 'a'|'b'|"c";

type W<T> = T extends Words ? true : false;

type WA = W<'a'>; // -> true
let c345:W<'d'>=false
type WD = W<'d'>; // -> false

type foo<T extends string = 'hello world'> = T;
let soda:foo= 'hello world'

type num = 1;
type str = 'hello world';

type IsNumber<N> = N extends number ? Array<number> : Array<string>;

type result1 = IsNumber<num>; // "yes, is a number"
type result2 = IsNumber<str>; // "no, not a number"

let x657: IsNumber<num>  = [1,2]
let x876 :IsNumber<boolean>=['true','false']



