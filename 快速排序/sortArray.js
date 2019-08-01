/**
 * 快速排序实现数组 sort 方法
 *
 * @param {Array} arr
 * @returns {Array}
 */
function quickSort(arr) {
    // 长度小于 1 直接返回，递归退出条件
    if (arr.length <= 1) {
        return arr;
    }
    let less = new Array();         // 下半部分
    let greater = new Array();      // 上半部分
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];   // 中值
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    // 递归调用返回排序好的数组
    return quickSort(less).concat([pivot], quickSort(greater))
}

console.log(quickSort([5, 100, 6, 3, -12]))