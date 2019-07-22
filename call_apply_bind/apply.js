Function.prototype.myApply = function (context) {
    var context = context || window
    // 给 context 添加一个属性
    // getValue.call(a, 'yck', '24') => a.fn = getValue
    context.fn = this
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}