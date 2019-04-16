class Functor {
    constructor(val) {
        this.val = val
    }
    map(f) {
        return new Functor(f(this.val))
    }
    get() {
        return this.val
    }
    static of(val) {
        return new Functor(val)
    }
}
const compose = (...arr) => x => arr.reduceRight((a, b) => b(a), x)
const map = f => ary => ary.map(f)
class IO {
    constructor(f) {
        this.__value = f;
    }
    map(f) {
        return new IO(compose(f, this.__value));
    }
    static of(x) {
        return new IO(function () {
            return x;
        });
    }
}

var fs = require('fs');
// readFile :: String -> IO String
var readFile = function (filename) {
    return new IO(function () {
        return fs.readFileSync(filename, 'utf-8');
    });
};
// print :: String -> IO String
var print = function (x) {
    return new IO(function () {
        console.log(x);
        return x;
    });
}
// Example
// ===========================
// cat :: IO (IO String)
var cat = compose(map(print), readFile);
console.log(cat(".git/config"))



// var it = makeIterator(['a', 'b']);

// it.next() // { value: "a", done: false }
// it.next() // { value: "b", done: false }
// it.next() // { value: undefined, done: true }

// function makeIterator(array) {
//   var nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex < array.length ?
//         {value: array[nextIndex++], done: false} :
//         {value: undefined, done: true};
//     }
//   };
// }
function *test(){
    yield 'hello';
    yield 'yes';
    return 'ok'
}

var it = test()
it.next()
console.log(it,it.next())