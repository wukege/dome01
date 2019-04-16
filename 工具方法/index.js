/**
 * 1.使用正则
 * 替换a标签 href内容
 */
function f() {
    let reg = /(<a [^>]*href=")([^"]*)(">)/gm
    let reg1 = /(<a [^>]*href=")[^"]*\?id=(\d+)[^"]*(">)/gm
    let reg2 = /<a [^>]*>([^><]*)<\/a>/gm
    let str = "Task Created Return Premium, <a href=\"/faces/work/task-details.xhtml?id=70537\">70537</a>"
    str = str.replace(reg, (...arg) => {
        return `${arg[1]}${arg[2]}${arg[3]}`
    })
}

/**
 * 2.使用dom操作
 * 替换a标签 href内容
 */
function replaceLink(str) {
    let el = document.createElement('div')
    el.innerHTML = str
    let childList = el.querySelectorAll('a')
    let list = [].slice.call(childList).forEach((item, index) => {
        childList[index].href = `${url}${item.pathname}${item.search}`
    })
    return el.innerHTML.toString()
}
//------------------右-->左执行----------------------
/**
 * 组合函数
 * @param {*} f 
 * @param {*} g 
 */
const compose = function (f, g) {
    return function (x) {
        return f(g(x));
    };
};

/**
 * 1.组合函数 例如：
 * @param arr
 * @returns {function(*=): (*)}
 */
const compose1 = (...arr) => x => arr.reduceRight((a, b) => b(a), x)

/**
 * 2.组合函数 例如： foo(baa(add()))
 * @param args
 * @returns {function(*=): *}
 */
const compose2 = (...args) => {
    args = args.reverse()
    return val => {
        args.forEach(item => {
            val = item(val)
        })
        return val
    }
}
/**
 * 3.组合函数
 * @param args
 * @returns {function(*): any}
 */
const compose3 = (...args) => {
    let str = ''
    return val => {
        args.forEach(item => str += item.name + ',')
        str = str.replace(/,/g, '(')
        str += val
        args.forEach(() => str += ')')
        return eval(str)
    }
}

//--------------------------end------------------------------

function after(n, fn) {
    return function () {
        if (--n < 1) {
            return fn.apply(this, arguments)
        }
    }
}
const t = after(3, function (...args) {
    console.log(...args)
})

/**
 * 类型判断
 * @param {*} type // Object.prototype.toString.call(1) -> "[object Number]"
 */
function isType(type) {
    return function (value) {
        return Object.prototype.toString.call(value) === `[object ${type}]`
    }
}
const memoize = function (f) {
    const cache = {}
    return function () {
        const arg_str = JSON.stringify(arguments)
        cache[arg_str] = cache[arg_str] || f.apply(f, arguments)
        return cache[arg_str]
    }
}

var pureHttpCall = memoize(function (url, params) {
    return function () { return { url, params }; }
});

let test = pureHttpCall('http://www.b.com', { a: 1 })

console.log(test())

