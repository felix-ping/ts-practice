

// 这里定义一个工具类型，简化代码
type ReplaceValByOwnKey<T, S extends any> = { [P in keyof T]: S[P] };

// shift action
type ShiftAction<T extends any[]> = ((...args: T) => any) extends ((arg1: any, ...rest: infer R) => any) ? R : never;

// unshift action
type UnshiftAction<T extends any[], A> = ((args1: A, ...rest: T) => any) extends ((...args: infer R) => any) ? R : never;

// pop action
type PopAction<T extends any[]> = ReplaceValByOwnKey<ShiftAction<T>, T>;

// push action
type PushAction<T extends any[], E> = ReplaceValByOwnKey<UnshiftAction<T, any>, T & { [k: string]: E }>;

// test ...
type tuple = ['vue', 'react', 'angular'];

type resultWithShiftAction = ShiftAction<tuple>; // ["react", "angular"]
type resultWithUnshiftAction = UnshiftAction<tuple, 'jquery'>; // ["jquery", "vue", "react", "angular"]
type resultWithPopAction = PopAction<tuple>; // ["vue", "react"]
type resultWithPushAction = PushAction<tuple, 'jquery'>; // ["vue", "react", "angular", "jquery"]


type Unpacked<T> = T extends (infer U)[] ? U : T;

type T000 = Unpacked<string[]>; // string
type T111 = Unpacked<string>; // string

type Unpacked1<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U :
  T;

type T0 = Unpacked<string>;  // string
type T1 = Unpacked<string[]>;  // string
type T2 = Unpacked<() => string>;  // string
type T3 = Unpacked<Promise<string>>;  // string
type T4 = Unpacked<Promise<string>[]>;  // Promise<string>
type T5 = Unpacked<Unpacked<Promise<string>[]>>;  // string



type Foo<T> = T extends { a: infer U, b: infer U } ? U : never;
type T10 = Foo<{ a: string, b: string }>;  // string
type T11 = Foo<{ a: string, b: number }>;  // string | number



interface Logger {
  time: number;
  asyncLog: (msg: string) => Promise<string>
  syncLog: (msg: string) => number;
}
type FilterTypes<T, U> = {
  [Key in keyof T]: T[Key] extends U ? Key : never
};
//UNDO
type FilterKeys<T, U> = FilterTypes<T, U>[keyof T];
// 看看阶段性成果
type T77 = FilterKeys<Logger, Function>;
type SubType<T, U> = Pick<T, FilterKeys<T, U>>;

// 看看阶段性成果，此时我们已经成功提取出了所有类型为函数的属性，满足要求
type T78 = SubType<Logger, Function>;
// type T = {
//     syncLog: (msg: string) => number;
//     asyncLog: (msg: string) => Promise<string>;
// }
// 将参数类型作为返回类型
type ArgAsReturn<T> = {
  [K in keyof T]: T[K] extends ((arg: infer U) => any) ? ((arg: U) => U) : never;
}

// 我们最终得到了 Translate
type Translate<U> = ArgAsReturn<SubType<Logger, Function>>;

// 看看最后效果，满足要求
type T79 = Translate<Logger>;


// 要求 Translate
//  1. 提取出为函数类型的属性，丢弃掉其它类型的属性
//  2. 将函数返回类型调整为形参类型(假定有且只有一个参数)

// 实现效果如下:
type T012 = Translate<Logger>;

// 等价于
// type T0 = {
//     // 其它属性被丢弃
//     asyncLog: (arg: string) => string; // return 类型被调整为跟 arg 保持一致
//     syncLog: (arg: string) => string; // return 类型被调整为跟 arg 保持一致
// }

const result: T012 = {
  asyncLog(msg: string) { return msg },
  syncLog(msg: string) { return msg }
};