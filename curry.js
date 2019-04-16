// 返回一个函数，
// 该函数在调用时将参数的顺序颠倒过来。
function flip(fn) {  
    return function() {
        var args = [].slice.call(arguments);
        return fn.apply(this, args.reverse());
    };
}
 
// 返回一个新函数，
// 从右到左柯里化原始函数的参数。
// 返回一个新函数，
// 从右到左柯里化原始函数的参数。
function rightCurry(fn, n) {
    var arity = n || fn.length,
      fn = flip(fn);
  return function curried() {
      var args = [].slice.call(arguments), 
          context = this;

      return args.length >= arity ?
          fn.apply(context, args.slice(0, arity)) : 
          function () {
              var rest = [].slice.call(arguments);
              return curried.apply(context, args.concat(rest));
          };
  };
}
// 一个函数，使用给定 predicate 断言函数 过滤列表
var filterWith = rightCurry(filter);  
function filter(list, fn) {
    return list.filter(fn);
  }

// function filterWith(fn) {
//     return function(list) {
//       return filter(list, fn);
//     }
//   }

  var list = [1,2,3,4,5,6,7,8,9,10];
 
// 创建一个偏应用过滤器，获取列表中的偶数
var justEvens = filterWith(function(n) { return n%2 == 0; });
 
justEvens(list);  
// [2,4,6,8,10]



