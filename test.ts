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

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let asd: Animal = new Animal('Jack');
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


