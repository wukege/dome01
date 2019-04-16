
// const onSubscribe = obsever =>{
//   obsever.next(1)
//   obsever.next(2)
// }

// const source$ = rxjs.of(1,2,3,1);

// source$.subscribe(console.log)
// const onSubscribe = obsever =>{
//   let number = 1;
//   const handle = setInterval(()=>{
//         console.log('test start')
//         obsever.next(number++);
//         console.log('test end')
//   },1000);
//   return{
//     unsubscribe:()=>{
//     //   clearInterval(handle);
//     }
//   }
// }

// const source$ = new Rx.Observable(onSubscribe)

// const theObsever ={
//   next:item =>{
//     console.log(item)
//   }
// }

// const subscription = source$.subscribe(theObsever)


// setTimeout(()=>{
//   subscription.unsubscribe();
// },3500)
// var oBtn = document.getElementById('btn');

// // var handler = (e) => {
// // 	console.log(e);
// // 	oBtn.removeEventListener('click', handler); // 結束監聽
// // }

// // // 註冊監聽
// // oBtn.addEventListener('click', handler);

// Rx.Observable
// 	.fromEvent(oBtn, 'click') // 註冊監聽
// 	.take(1) // 只取一次
// 	.subscribe(console.log);

// let observer =  Rx.Observable.of(1,2,3).repeat(10);
// let observer =  Rx.Observable.interval(1000);
// observer.subscribe(console.log,null,()=>console.log('complete'))


// let observer =  Rx.Observable.range(1,100);


// observer.subscribe(console.log,null,()=>console.log('complete'))



// let source   = Rx.Observable.interval(1000).take(3);

// var observerA = {
//     next: value => console.log('A next: ' + value),
//     error: error => console.log('A error: ' + error),
//     complete: () => console.log('A complete!')
// }

// var observerB = {
//     next: value => console.log('B next: ' + value),
//     error: error => console.log('B error: ' + error),
//     complete: () => console.log('B complete!')
// }

// source.subscribe(observerA);
// // source.subscribe(observerB);
// setTimeout(() => {
//     source.subscribe(observerB);
// }, 1000);

// Rx.Observable.of(1,2,3,4).subscribe(console.log,console.log,()=>{
//     console.log('complete')
// })

// const $1 = Rx.Observable.of(1,2,3);
// const $2 = Rx.Observable.of('A','B','C');


// Rx.Observable.zip($1,$2).subscribe(console.log)

// Rx.Observable.merge($1,$2).subscribe(console.log)

// const $1 = Rx.Observable.interval(1000).map(x=>x+'A').take(1);
// const $2 = Rx.Observable.interval(1000).map(x=>x+'B').take(3);

// Rx.Observable.forkJoin($1,$2).subscribe(console.log)

// const $1 = Rx.Observable.of(1,2).concat(Rx.Observable.of(3,4))
// $1.count().subscribe(console.log)

// const $1 = Rx.Observable.of(
//     {name:'rxjs',year:2011},
//     {name:'react',year:2013},
//     {name:'redux',year:2015}
// )

// $1.min((a,b)=>a.year - b.year).subscribe(console.log)
// $1.max((a,b)=>a.year - b.year).subscribe(console.log)

// const $1 = Rx.Observable.of(1,3,3,4,5,6)

// const $2 = $1.first(x=>x%2 === 0,(value,index)=>[value,index]).subscribe(console.log)

// const Observable = Rx.Observable.create(function(observer){
//     observer.next('Jerry')
//     observer.next('Anna')
//     observer.complete();
// })

// const soure = Rx.Observable.of('Jerry','Anna')
// Observable.subscribe({
//     next:value=>console.log(value),
//     error:error=>console.log(error),
//     complete:()=>console.log('complete!')
// })
// console.log('-----------------------')
// soure.subscribe({
//     next:value=>console.log(value),
//     error:error=>console.log(error),
//     complete:()=>console.log('complete!')
// })

// const list = ['aa','bb','Jerry','Anna']

// const soure1 = Rx.Observable.from(list)
// var source = Rx.Observable.fromEvent(document.body, 'click');
// soure1.subscribe({
//     next:value=>console.log(value),
//     error:error=>console.log(error),
//     complete:()=>console.log('complete!')
// })


//asdfasffasfasfadf



// source.subscribe({
//     next: function(value) {
//         console.log(value,1111)
//     },
//     complete: function() {
//         console.log('complete!');
//     },
//     error: function(error) {
//         console.log(error)
//     }
// });
// Rx.Observable.ajax.get('https://www.vue-js.com/api/v1/topics').subscribe((data)=>{
//     console.log(11111)
//     console.log(data)
//     console.log(222222)
// })

// var source = Rx.Observable.interval(1000)
// var click =Rx.Observable.fromEvent(document.body,'click')
// var example = source.takeUntil(click)
// example.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// })


// let obj = [
//     {name:'a',age:1,list:[{listName:'aa',listAge:'11'},{listName:'aaa',listAge:'111'},{listName:'aaaa',listAge:'1111'}]},
//     {name:'b',age:2,list:[{listName:'bb',listAge:'22'},{listName:'bbb',listAge:'222'},{listName:'bbbb',listAge:'2222'}]},
//     {name:'c',age:3,list:[{listName:'cc',listAge:'33'},{listName:'ccc',listAge:'333'},{listName:'cccc',listAge:'3333'}]}
// ]



// for (var [key, item] of obj.entries()) {
//     for (var [x, i] of item.list.entries()) {
//         if(x === 1){
//             console.log(key, item,x, i)
//             break
//         }
//     }
//  }

//  for (var key=0; key<obj.length; key++) {console.log(111)
//     for (var x=0;x < obj[key].list.length;x++) {
//         console.log(666)
//         if(obj[key].list[x].listName=== 'bbbb'){
//             console.log(obj[key].list[x].listName,x)
//             break
//         }
//     }
//  }

const add = x => y => x + y
const match = what => str => str.match(what)
const replace = (what, replacement) => str => str.replace(what, replacement)
const filter = f => ary => ary.filter(f)
const map = f => ary => ary.map(f)
// const compose = (f,g)=> x => f(g(x))
//右-->左执行
const compose = (...arr) => x => arr.reduceRight((a, b) => b(a), x)
const toUpperCase = x => x.toUpperCase()
const exclaim = x => `${x}!`
const head = (x) => x[0]
const reduce = (f, arr) => (x) => x.reduce(f, arr)
var reverse = reduce(function (acc, x) { return [x].concat(acc); }
    , []);
// var last = compose(exclaim, toUpperCase, head, reverse);
// console.log(last(['jumpkick', 'roundhouse', 'uppercut']))

var last = compose(head, reverse);
var loudLastUpper = compose(exclaim, toUpperCase, last);
// console.log(loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']))

let snakeCase = word => word.toUpperCase().replace(/\s+/ig, '_')

console.log(snakeCase('hello world'))

let snakeCase1 = compose(replace(/\s+/ig, '_'), toUpperCase)

console.log(snakeCase1('he he!!'))


function map(array, func) {
    var res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        res.push(func(array[i]));
    }
    return res;
}

Container.prototype.map = function(f){
    return Container.of(f(this.__value))
  }
// var mapped = map([1, 3, 5, 7, 8], function (n) {
//     return n = n + 1;
// });

// print(mapped); 

const split = char => str => str.split(char)
const first = arr => arr[0]
const last = arr => arr[arr.length - 1]
const eq = x => y => x === y
import _ from 'lodash';

// 先来几个基础函数：
// 字符串
var split = _.curry((char, str) => str.split(char));
// 数组
var first = arr => arr[0];
var last = arr => arr[arr.length - 1];
var filter = _.curry((f, arr) => arr.filter(f));
//注意这里的 x 既可以是数组，也可以是 functor
var map = _.curry((f, x) => x.map(f));
// 判断
var eq = _.curry((x, y) => x == y);
// 结合
var compose = _.flowRight;


var toPairs = compose(map(split('=')), split('&'));
// toPairs('a=1&b=2')
//=> [['a', '1'], ['b', '2']]

var params = compose(toPairs, last, split('?'));
// params('http://xxx.com?a=1&b=2')
//=> [['a', '1'], ['b', '2']]

// 这里会有些难懂=。= 慢慢看
// 1.首先，getParam是一个接受IO(url)，返回一个新的接受 key 的函数；
// 2.我们先对 url 调用 params 函数，得到类似[['a', '1'], ['b', '2']]
//   这样的数组；
// 3.然后调用 filter(compose(eq(key), first))，这是一个过滤器，过滤的
//   条件是 compose(eq(key), first) 为真，它的意思就是只留下首项为 key
//   的数组；
// 4.最后调用 Maybe.of，把它包装起来。
// 5.这一系列的调用是针对 IO 的，所以我们用 map 把这些调用封装起来。
var getParam = url => key => map(compose(Maybe.of, filter(compose(eq(key), first)), params))(url);

// 创建充满了洪荒之力的 IO！！！
var url = new IO(_ => window.location.href);
// 最终的调用函数！！！
var findParam = getParam(url);

// 上面的代码都是很干净的纯函数，下面我们来对它求值，求值的过程是非纯的。
// 假设现在的 url 是 http://xxx.com?a=1&b=2
// 调用 __value() 来运行它！
findParam("a").__value();
//=> Maybe(['a', '1'])


import _ from 'lodash';
var compose = _.flowRight;

var IO = function(f) {
    this.__value = f;
}

IO.of = x => new IO(_ => x);

IO.prototype.map = function(f) {
    return new IO(compose(f, this.__value))
};