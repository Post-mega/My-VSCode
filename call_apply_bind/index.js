var name = 'asdasd'

var hello = function () {
    console.log(this.name)
    console.log('arguments:', arguments)
}

var obj = {
    name: 'ssss'
}


Function.prototype.myBind = function (context, ...args) {
    var _this = this
    return function F() {
        _this.apply(context, args.concat(...arguments))
    }
}

// hello()
// var b = hello.myBind(obj)
// b()


Function.prototype.myApply = function (context, arg) {
    context.fn = this
    result = arg ? context.fn(...arg) : context.fn();
    delete context.fn
    return result
}

// hello.myApply(obj,[3,2,5])

Function.prototype.myCall = function (context, ...args) {
    context.fn = this
    result = args ? context.fn(...args) : context.fn()
    delete context.fn
    return result
}

// hello.myCall(obj, 1, 3, 4)

hello.apply(obj, [1, 4, 2, 3])
