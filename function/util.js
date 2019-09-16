var _ = exports

_.truthy = value => !!value

_.type = obj => Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '')

_.isArray = list => _.type(list) === 'Array'

_.isString = list => _.type(list) === 'String'

_.slice = (arrayLike, index, end) => Array.prototype.slice.call(arrayLike, index, end)

_.each = (array, fn) => {
    for (var i = 0, len = array.length; i < len; i++) {
        fn(array[i], i)
    }
}

_.toArray = listLike => String.prototype.split.call(listLike, '')

_.toString = (stringLike, split = '') => Array.prototype.join.call(stringLike, split)

_.setAttr = function setAttr(node, key, value) {
    switch (key) {
        case 'style':
            node.style.cssText = value
            break
        case 'value':
            var tagName = node.tagName || ''
            tagName = tagName.toLowerCase()
            if (
                tagName === 'input' || tagName === 'textarea'
            ) {
                node.value = value
            } else {
                // if it is not a input or textarea, use `setAttribute` to set
                node.setAttribute(key, value)
            }
            break
        default:
            node.setAttribute(key, value)
            break
    }
}