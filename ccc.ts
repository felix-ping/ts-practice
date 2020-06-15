{

  interface Logger {
    time: number;
    asyncLog:(msg: string) => Promise<string>
    syncLog:(msg: string) => number;
  }
  

  
  // 要求 Translate
  //  1. 提取出为函数类型的属性，丢弃掉其它类型的属性
  //  2. 将函数返回类型调整为形参类型(假定有且只有一个参数)
  
  // 实现效果如下:
  type T0 = Translate<Logger>;
  
  // 等价于
  type T1 = {
      // 其它属性被丢弃
      asyncLog: (arg: string) => string; // return 类型被调整为跟 arg 保持一致
      syncLog: (arg: string) => string; // return 类型被调整为跟 arg 保持一致
  }
  
  const result: T0 = {
      asyncLog(msg: string) { return msg },
      syncLog(msg: string) { return msg }
  };

type a1<T,U>={
  [key in keyof T]:T[key] extends U? key: never
}
type b1 = a1<Logger, Function>
type a2<T,U> = a1<T, U>[keyof T]
type b2 = a2<Logger,Function>
type a3 <T,U> = Pick<T,a2<T, U>>
type b3 = a3< Logger, Function>
type a4<T> ={
  [key in keyof T]: T[key] extends (args:infer X)=>any ? (args:X)=>X:never;
}
type b4 = a4<a3<Logger,Function>>


}


type framework = ['vue', never, 'angular'];

type frameworkVal1 = framework[number]; // "vue" | "react" | "angular"
type frameworkVal2 = framework[any]; // "vue" | "react" | "angular"