function throttle(fn) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
        if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
        canRun = false; // 立即设置为false
        setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
            fn.apply(this, arguments);
            // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
            canRun = true;
        }, 500);
    };
}
function sayHi(e) {
    console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));



/**
 * underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次/wait
 *
 * @param {function} func    回调函数
 * @param {number} wait      窗口间隔
 * @param {object} options   如果想忽略开始函数的调用，传入{leading：false}
*                            如果想忽略结尾函数的调用，传入{trailing：false}
 *                           两者不能同存，否则程序不能执行
 * @return {function}
 */
var throttle = function (func, wait, options) {
    var context, args, result;
    var timeout = null;
    // 之前的时间戳
    var previous = 0;
    // 如果没有设置 options 设置为空对象
    if (!options) options = {}
    // 定时器回调函数
    var later = function () {
        // 如果设置了 leading 就将 previous 设为 0
        previous = options.leading == false ? 0 : Date.now();
        // 置空是为了防止内存泄漏，也为了下面定时器的判断
        timeout = null;
        result = func.apply(context, args)
        if (!timeout) context = args = null
    }
    return function () {
        // 获得当前的时间戳
        var now = Date.now();
        // 首次进入前者肯定为 true，如果需要第一次不执行函数，就将上次时间戳设置为当前的，这样在接下来计算时，remaining 的值大于 0
        if (!previous && options.leading === false) previous = now
        // 计算剩余时间
        var remaining = wait - (now - previous)
        context = this;
        arg = arguments;
        // 如果当前调用已经大于上次调用时间 + wait，或者用户手动调了时间
        // 如果设置了 trailing 只会进入这个条件，如果没有设置 leading，那么第一次会进入这个条件
        // 还有因为定时器延时并不是准确的时间，例如设置 2秒，但是定时器在 2.2秒触发，所以此时会进入这个条件
        if (remaining <= 0 || remaining > wait) {
            // 如果定时器存在就清理掉，否则会二次调用
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = now;
            reuslt = func.apply(context, args)
            if (!timeout) context = args = null
        } else if (!timeout && options.trailing !== false) {
            // 判断是否设置了定时器和 trailing，么有的话就开启一个定时器，并且不能同时设置 leading 和 trailing
            timeout = setTimeout(later, remaining)
        }
        return result;
    }
}