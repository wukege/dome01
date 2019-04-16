const fs = require('fs')
const colors = require('colors/safe')

// const readFile = (fileName) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, (error, data) => {
//             if (error) return reject(error);
//             resolve(data);
//         });
//     });
// };
//
//
// // var readFileThunk = thunkify(fs.readFile);
// function thunkify(fn) {
//     return function() {
//         var args = new Array(arguments.length);
//         var ctx = this;
//
//         for (var i = 0; i < args.length; ++i) {
//             args[i] = arguments[i];
//         }
//
//         return function (done) {
//             var called;
//
//             args.push(function () {
//                 if (called) return;
//                 called = true;
//                 done.apply(null, arguments);
//             });
//
//             try {
//                 fn.apply(ctx, args);
//             } catch (err) {
//                 done(err);
//             }
//         }
//     }
// };
// const gen = function* () {
//     const f1 = yield readFile('a');
//     const f2 = yield readFile('b');
//     console.log(f1.toString());
//     console.log(f2.toString());
// };
// function run(fn) {
//     var gen = fn();
//
//     function next(err, data) {
//         var result = gen.next(data);
//         if (result.done) return;
//         result.value(next);
//     }
//
//     next();
// }

// run(gen);
// const asyncReadFile = async function () {
//     const f1 = await readFile('a');
//     const f2 = await readFile('b');
//     console.log(f1.toString());
//     console.log(f2.toString());
// };
// asyncReadFile()


// var g = gen();
//
// g.next().value.then(function(data){
//     g.next(data).value.then(function(data){
//         g.next(data);
//     });
// });
//
//
// function run(gen){
//     var g = gen();
//
//     function next(data){
//         var result = g.next(data);
//         if (result.done) return result.value;
//         result.value.then(function(data){
//             next(data);
//         });
//     }
//
//     next();
// }
//
// run(gen);

console.log(colors.blue('test'))