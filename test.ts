let a=function(xx:string):string{return xx}

function getLength(something:string|number):number{
  if((<string>something).length){
    return (<string>something).length
  }else {
    return something.toString().length
  }
}


let xcatliu: [string, number];
xcatliu[0] = 'XcaLiu';
xcatliu[1] = 25;
xcatliu.push('http://xcatliu.com/');

enum Week{
  Sun,Mon,Tue,Wed,Thu,Fri,Sat
}

console.log(Week[0] === 'Sun');

//常数枚举
const enum Directions{Up,Down,Left,Right}
let directions=[Directions.Up,Directions.Right]

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


//实现implements
interface Alarm {
  alert()
}
interface Light extends Alarm{
  lightOn();
  lightOff()
}

class Car implements Light{
  name:string;
  constructor(name:string){
    this.name = name
  }
  alert(){
    'xxx'
  }
  lightOn(){
    console.log('light on');
  }
  lightOff(){
    console.log('light off');
  }
}

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source, subString) {
  return source.search(subString) !== -1;
}
mySearch('a','1')

//void, never, object(非原始类型值,允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法)

//断言
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;


interface SquareConfig {
  color?: string;
  width?: number;
  [ x: string]: any;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  return
}
//正常跳过类型检查:索引签名
let squareOptions = { colour: "red", width: 100,xxx:'xxx' };
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
  [index: string]: number|string|boolean;
  length: number;    // 可以，length是number类型
  name: string      // 错误，`name`的类型与索引类型返回值的类型不匹配
  [abs:number]:boolean
}


function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface fnInterface {
  (arg1:string,arg2:number):number|boolean
}
let fn1:fnInterface
fn1=function (arg1:string,arg2:number) {
  return +arg1+arg2
}
fn1('zhangsan',18)



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
interface first{
  <T>(arg1:T,arg2:T):T

}
let result:first
result = function plus<T>(arg1:T,arg2:T):T {
  return arg1 <= arg2 ? arg2 : arg1;
}
result<number>(1,2)
//两个泛型之间不能相加 但是如果我要求两个参数之和怎么办?number?

interface go{
  change<T>(val:T):T
}
class Money implements go{
  change<T>(val:T):T{
    return val
  }
}
let earning = new Money()