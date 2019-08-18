function deepClone(obj) {
    var newObj = obj instanceof Array ? [] : {};
    for (var item in obj) {
        var temple = typeof obj[item] == 'object' ? deepClone(obj[item]) : obj[item];
        newObj[item] = temple;
    }
    return newObj;
}




// 深拷贝的实现方式
// 1、方法一还是手动复制

// 和上面的举例一样，手动复制可以实现深拷贝。

// 2、对象只有一层的话可以使用上面的：Object.assign()函数


// 3、转成 JSON 再转回来

var obj1 = { body: { a: 10 } };
var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.body.a = 20;
console.log(obj1);
// { body: { a: 10 } } <-- 沒被改到
console.log(obj2);
// { body: { a: 20 } }
console.log(obj1 === obj2);
// false
console.log(obj1.body === obj2.body);
// false

// 用JSON.stringify把对象转成字符串，再用JSON.parse把字符串转成新的对象。
// 可以封装如下函数

var cloneObj = function (obj) {
    var str, newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        str = JSON.stringify(obj), //系列化对象
            newobj = JSON.parse(str); //还原
    } else {
        for (var i in obj) {
            newobj[i] = typeof obj[i] === 'object' ?
                cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
};


// 4、递归拷贝

function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if (prop === obj) {
            continue;
        }
        if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : {};
            arguments.callee(prop, obj[i]);
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}
var str = {};
var obj = { a: { a: "hello", b: 21 } };
deepClone(obj, str);
console.log(str.a);


// 5、使用Object.create()方法

// 直接使用var newObj = Object.create(oldObj)，可以达到深拷贝的效果。

function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if (prop === obj) {
            continue;
        }
        if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}


// 6、jquery

// jquery 有提供一个$.extend可以用来做 Deep Copy。

var $ = require('jquery');
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = $.extend(true, {}, obj1);
console.log(obj1.b.f === obj2.b.f);
// false


// 7、lodash

// 另外一个很热门的函数库lodash，也有提供_.cloneDeep用来做 Deep Copy。

var _ = require('lodash');
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f);
// false
// 这个性能还不错，使用起来也很简单。