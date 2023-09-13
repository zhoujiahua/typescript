/// <reference path="./basic/a.ts">
// console.log(ABC.VERSION);
import {printId} from './utils/auth-util'
import {getFirst, comb, map} from './basic/generics'

printId('abc')
// 泛型使用
console.log(getFirst<number>([1, 2, 3]), getFirst([1, 2, 3]))
console.log(getFirst<string>(['a', 'b', 'c']), getFirst(['a', 'b', 'c']))
console.log(comb<number | string>([1, 2, 3], ['a', 'b', 'c']))
console.log(map<string, number>(['1', '2', '3'], (n) => parseInt(n)))