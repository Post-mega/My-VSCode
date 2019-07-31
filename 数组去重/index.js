/**
 * indexOf方法去重1
 * 数组的indexOf()方法可返回某个指定的元素在数组中首次出现的位置
 * 首先定义一个空数组res，然后调用indexOf方法对原来的数组进行遍历判断，如果元素不在res中，则将其push进res中，最后将res返回即可获得去重的数组
 * 
 * @param {Array} arr
 * @returns {Array}
 */
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}



/**
 * indexOf方法去重2
 * 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等
 * 如果不等则说明该元素是重复元素
 *
 * @param {Array} arr
 * @returns {Array}
 */
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    return Array.prototype.filter.call(arr, function(item, index){
        return arr.indexOf(item) === index;
    });
}


/**
 * 相邻元素去重
 * 这种方法首先调用了数组的排序方法sort()
 * 然后根据排序后的结果进行遍历及相邻元素比对，如果相等则跳过改元素，直到遍历结束
 *
 * @param {Array} arr
 * @returns {Array}
 */
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    arr = arr.sort()
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            res.push(arr[i])
        }
    }
    return res
}


/**
 * 复制代码利用对象属性去重
 * 创建空对象，遍历数组，将数组中的值设为对象的属性，并给该属性赋初始值1
 * 每出现一次，对应的属性值增加1，这样，属性值对应的就是该元素出现的次数了
 *
 * @param {Array} arr
 * @returns {Array}
 */
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let res = [],
        obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            res.push(arr[i])
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    return res
}


/**
 * 复制代码set与解构赋值去重
 * ES6中新增了数据类型set，set的一个最大的特点就是数据不重复
 * Set函数可以接受一个数组（或类数组对象）作为参数来初始化，利用该特性也能做到给数组去重
 *
 * @param {Array} arr
 * @returns {Array}
 */
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    return [...new Set(arr)]
}


/**
 * 复制代码Array.from与set去重
 * Array.from方法可以将Set结构转换为数组结果
 * 而我们知道set结果是不重复的数据集，因此能够达到去重的目的
 * 
 * @param {Array} arr
 * @returns {Array}
 */
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    return Array.from(new Set(arr))
}