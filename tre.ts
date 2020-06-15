/**
 * 合并多个参数的返回数值并返回
 * @param { Function[] } reducerCreators
 * @returns { Object }
 */
function combineReducersParamFactory(...reducerCreators) {
  return reducerCreators.reduce((acc, creator) => ({ ...acc, ...creator() }), {})
}

// test ...

function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const ret = combineReducersParamFactory(
  () => ({ todosReducer }),
  () => ({ counterReducer })
);
// { todosReducer: [Function: todosReducer], counterReducer: [Function: counterReducer] }



type Combine<T> = (T extends any ? (args: T) => any : never) extends (args: infer A) => any ? A : never;

/**
 * 合并多个参数的返回数值并返回
 * @param { Function[] } reducerCreators
 * @returns { Object }
 */
function combineReducersParamFactory1<T extends ((...args) => object)[]>(...reducerCreators: T): Combine<ReturnType<T[number]>> {
  return reducerCreators.reduce<any>((acc, creator) => ({ ...acc, ...creator() }), {});
}

// test ...

function todosReducer1(state: object[], action: { [x: string]: string}) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

function counterReducer1(state: number, action: { [x: string]: string}) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// 这里不需要显示传入类型，这里就可以得到正确的代码提示
const ret1 = combineReducersParamFactory(
  () => ({ todosReducer }),
  () => ({ counterReducer })
);
// { todosReducer: [Function: todosReducer], counterReducer: [Function: counterReducer] }


{
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface User {
  id: number;
  age: number;
  name?: string;
  isFalse:true;
};

// 相当于: type PartialUser = { id?: number; age?: number; name?: string; }
type PartialUser = Partial<User>
type RequiredUser = Required<User>
// 相当于: type PickUser = { id: number; age: number; }
type PickUser = Pick<User, "id" | "age"|'name'>
}
{

  type Record<K extends keyof any, T> = {
    [P in K]: T;
};

interface Dictionary<T> {
  [index: string]: T;
};

interface NumericDictionary<T> {
  [index: number]: T;
};

const data:Dictionary<number> = {
  a: 3,
  b: 4
}
}