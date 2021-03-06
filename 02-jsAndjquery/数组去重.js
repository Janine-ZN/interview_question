// 如何去除数组中的重复元素[1, 3, 5, 2, 4, 3, 2, 3, 2, 6]
var arr = [1, 3, 5, 2, 4, 3, 2, 3, 2, 6];
//  es5四种方式:
// 方式一:
Array.prototype.unique_one = function () {
    // 1. 定义临时数组
    var temp = [];
    // 2. 遍历当前数组
    for (var i = 0; i < this.length; i++) {
        // 3.如果当前数组的第i已经保存进了临时数组，
        // 那么跳过,否则把当前项push到临时数组里面
        if (temp.indexOf(this[i]) === -1) {
            temp.push(this[i]);
        }
    }
    return temp;
};
console.log("unique_one==>", arr.unique_one());

// 方式二:
Array.prototype.unique_two = function () {
    //1. hash为hash表，temp为临时数组
    var hash = {},
        temp = [];
    // 2.遍历当前数组
    for (var i = 0; i < this.length; i++) {
        // 3. 如果hash表中没有当前项
        if (!hash[this[i]]) {
            // 4.存入hash表
            hash[this[i]] = true;
            // 5.把当前数组的当前项
            // push到临时数组里面
            temp.push(this[i]);
        }
    }
    return temp;
};
console.log("unique_two==>", arr.unique_two());

var arr_str = ["h", "e", "l", "l", "o"];
// 方式三:
Array.prototype.unique_three = function () {
    var n = [this[0]];
    for (var i = 1; i < this.length; i++) {
        if (this.indexOf(this[i]) === i) {
            n.push(this[i]);
        }
    }
    return n;
};
console.log("unique_three==>", arr_str.unique_three());

// 方式四:
Array.prototype.unique_four = function () {
    this.sort();
    var re = [this[0]];
    for (var i = 1; i < this.length; i++) {
        if (this[i] !== re[re.length - 1]) {
            re.push(this[i]);
        }
    }
    return re;
};
console.log("unique_four==>", arr.unique_four());

Array.prototype.unique_five = function () {

    var res = this.filter((item, index) => {
        return this.indexOf(item) === index;
    })
    return res;
}
console.log("unique_five==>", arr.unique_five());

// es6实现方式:
Array.prototype.unique = Array.prototype.unique || function () {
    return [...new Set(this)];
};
/** 方法一：使用 ES6 语法中的 Set——数据集合 **/
function fun1() {
    var set = new Set(arr);
    return set;
}
var result1 = fun1();
console.log(result1);