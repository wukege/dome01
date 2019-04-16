// const fs = require('fs')
const Task = require('data.task')
const Either = require('data.either')
const compose = (...arr) => x => arr.reduceRight((a, b) => b(a), x)
function inspect(x) {
    return (typeof x === 'function') ? inspectFn(x) : inspectArgs(x);
}

function inspectFn(f) {
    return (f.name) ? f.name : f.toString();
}

function inspectArgs(args) {
    return args.reduce(function (acc, x) {
        return acc += inspect(x);
    }, '(') + ')';
}
inspect = function (x) {
    return (x && x.inspect) ? x.inspect() : x;
};
class IO {
    constructor(f) {
        this.unsafePerformIO = f;
    }
    map(f) {
        return new IO(compose(f, this.unsafePerformIO));
    }
    static of(x) {
        return new IO(function () {
            return x;
        });
    }
    join() {
        return this.unsafePerformIO();
    }
    chain(f) {
        return this.map(f).join();
    }
    ap(a) {
        return this.chain(function (f) {
            return a.map(f);
        });
    }
    inspect() {
        return 'IO(' + inspect(this.unsafePerformIO) + ')';
    }
}

var print2 = function (x) {
    return new IO(function () {
        console.log(`2 ${x}`)
        return x;
    });
}


// console.log(readFile('11111').chain(print1).chain(print2).chain(print2).chain(print2).inspect())

// getPost('tttt').map((v)=>{
//     console.log(1)
//     return 1111111
// }).chain(getPost('tttt')).chain(getPost('tttt'))

//     Task.of(3).map(function(three){ return three + 1 }).fork(console.log,console.log)
// console.log(Either.Left(2))
// console.log(Either.Right(2))

class Functor {
    constructor(val) {
        this.val = val;
    }

    map(f) {
        return new Functor(f(this.val));
    }

    static of(val) {
        return new Functor(val);
    }
}

class Ap extends Functor {
    ap(F) {
        return Ap.of(this.val(F.val));
    }
    static of(val) {
        return new Ap(val);
    }
}


function add(x) {
    return function (y) {
      return x + y;
    };
  }

  function addTwo(x) {
    return x + 2;
  }
  

console.log(Either.Right(addTwo).ap(Either.Right(2)).get())

console.log(Either.Right(2).map(addTwo).get())

// var readFile = function (filename) {
//     return new IO(function () {
//         // return fs.readFileSync(filename, 'utf-8');
//         return '111111'
//     });
// };

// var print1 = function (x) {
//     return new IO(function () {
//         console.log(`12 ${x}`)
//         return x;
//     });
// }

console.log(Either.Right(Either.Right(Either.Right(2))))

console.log(Either.Right(2).chain(function(x){
    return Either.Right(2+x)
}).chain(function(x){
    return Either.Right(x*x)
}))