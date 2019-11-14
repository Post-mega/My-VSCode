/**
 * 自己实现的 new 操作符
 *
 * @param {Object} Con
 * @param {any} args
 * @returns {Object}
 */
function create(Con, ...args) {
    // 1. 创建一个空对象
    let obj = {}
    // 2. 继承构造函数的原型，这段代码等同于 obj.__proto__ = Con.prototype
    Object.setPrototypeOf(obj, Con.prototype)
    // 3. 将构造函数的属性和方法添加到新的空对象中，并且传入剩余的参数
    let result = Con.apply(obj, args)
    // 4. 如果该构造函数没有返回对象，则返回创建的新对象
    return result instanceof Object ? result : obj
}
