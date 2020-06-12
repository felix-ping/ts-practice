// function selfish (target) {
//   const cache = new WeakMap();
//   const handler = {
//     get (target, key) {
//       const value = Reflect.get(target, key);
//       if (typeof value !== 'function') {
//         return value;
//       }
//       if (!cache.has(value)) {
//         cache.set(value, value.bind(target));
//       }
//       return cache.get(value);
//     }
//   };
//   const proxy = new Proxy(target, handler);
//   return proxy;
// }

// const logger = selfish(new Logger());




// class Foo {
//   constructor(){
//     this.x =333
//   }
//   static bar() {
//     this.baz();
//   }
 
//   baz() {
//     console.log('world');
//     return 1
//   }
//   c(){
//     console.log('c');
//   }
//  static baz() {
//     console.log('hello');
//     return 2
//   }

// }
// Foo.x
// console.log(`Foo.x`, Foo.x)
// new Foo().x
// console.log(`new Foo().x`, new Foo().x)

// class Eoo extends Foo {
//   constructor() {
//     super()
//   }
//   static a() {
//     return super.baz()
//   }
//   static b(){
  
//   }
// }

// let x =  Eoo.a()
// console.log(`x`, x)


class A {
  constructor() {
    this.x = 1;
  }
}

class B extends A {
  constructor() {
    super();
    console.log(this.x)
    this.x = 2;
    console.log(this.x)
    super.x = 3;
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}

let b = new B();