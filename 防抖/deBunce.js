function debounce(fn) {
    let timeout = null; // 创建一个标记用来存放定时器的返回值
    return function () {
        clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
            fn.apply(this, arguments);
        }, 500);
    };
}
function sayHi(e) {
    console.log('防抖成功');
    console.log(e)
}

var inp = document.getElementById('inp');
inp.addEventListener('input', debounce(sayHi)); // 防抖，每0.5秒执行一次 sayHi



/**
 * underscore 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 * 
 * @param {function} func       回调函数
 * @param {number} wait         表示时间窗口间隔
 * @param {boolean} immediate   设置为 true 时，是否立即调用函数
 * @returns {function}          返回客户调用函数
 */
var debounce = function (func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    var later = function () {
        // 现在和上一次时间戳比较
        var last = Date.now() - timestamp;
        // 如果当前间隔时间少于设定时间且大于 0 就重新设定计时器
        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            // 否则的话就是时间到了，该执行回调函数
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };
    return function () {
        context = this;
        args = arguments;
        // 获得时间戳
        timestamp = Date.now();
        // 如果定时器不存在且要求立即执行函数
        var callNow = immediate && !timeout;
        // 如果定时器不存在就新建一个
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            // 核心，将当前上下文和参数传回 func 执行
            result = func.apply(context, args);
            context = args = null;
        }
        return result;
    }
}