function foldr(f, z, list){
    if(list === null || list.length == 0){
        return z
    }
    return f(list[0],foldr(f,z, list.slice(1)))
}

const add = (a,b) => a+b


function sum(list){
    return foldr(add,0,list)
}

const list = [1,2,3]
// console.log(sum(list))


// var add = function(x, y) { return x + y };
// var multiply = function(x, y) { return x * y };

// var flock_a = 4;
// var flock_b = 2;
// var flock_c = 0;

// var result = add(multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b));

// // 结合律（assosiative）
// add(add(x, y), z) == add(x, add(y, z));

// // 交换律（commutative）
// add(x, y) == add(y, x);

// // 同一律（identity）
// add(x, 0) == x;

// // 分配律（distributive）
// multiply(x, add(y,z)) == add(multiply(x, y), multiply(x, z));


// var memoize = function(f) {
//     var cache = {};
  
//     return function() {
//       var arg_str = JSON.stringify(arguments);
//       cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
//       return cache[arg_str];
//     };
//   };


// var squareNumber  = memoize(function(x){ return x*x; });

// squareNumber(4);
// //=> 16

// squareNumber(4); // 从缓存中读取输入值为 4 的结果
// //=> 16

// squareNumber(5);
// //=> 25

// squareNumber(5); // 从缓存中读取输入值为 5 的结果
// //=> 25

// var pureHttpCall = memoize(function(url, params){
//     return function() { return $.getJSON(url, params); }
//   });
const arr = [1,2,3,4]

let result = arr.reduce((a,b)=>a+b,0)
console.log(result)