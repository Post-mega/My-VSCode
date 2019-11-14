/**
 * {@author}: Charley Young
 * {@since}: 2019-11-14
 * {@description}: collect function tips during development
 */
// 反转数组
let reverse = arr => arr.reduce((acc, x) => [x].concat(acc))
// console.log(reverse(['123as', 222, 'sd', 323]));

// 斐波那契数列
let Fibonacci = (n, ac1 = 1, ac2 = 1) => n <= 1 ? ac2 : Fibonacci(n - 1, ac2, ac1 + ac2)
// console.log(Fibonacci(100));

// 阶乘函数
let Factorial = (n, total = 1) => n == 1 ? total : Factorial(n - 1, n * total)
// console.log(Factorial(6));

// 16进制转rgb
let hex2rgb = hex => {
  let h = hex.replace('#', '0x');
  let r = h >> 16;
  let g = h >> 8 & 0xff;
  let b = h & 0xff;
  return `rgb(${r}, ${g}, ${b})`;
}
// console.log(hex2rgb('#d5de7b'))

// rgb转16进制
let rgb2hex = rgb => {
  let arr = rgb.split(/[^\d]+/);
  let color = arr[1] << 16 | arr[2] << 8 | arr[3];
  return '#' + color.toString(16);
}
// console.log(rgb2hex('rgb(213,222,123'))

// 数组去重
let unique = arr => Array.isArray(arr) ? Array.from(new Set(arr)) : null;
// console.log(unique([1,2,3,4,3,2,1]))

// 返回参数类型
let type = obj => Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '')
// console.log(type(null))