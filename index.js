// import {Observable} from 'rxjs'
// import {Right, Left} from 'data.either'
// import {ajax} from 'jquery'
//
// const onSubscribe = obsever =>{
//     obsever.next(20)
//     obsever.next(20)
//     obsever.next(20)
//     obsever.next(20)
//     obsever.next(20)
// }

const source$ = Observable.create(onSubscribe);

source$.map(x=>x*x).subscribe(console.log);
console.log(source$)
// var pipe = (function () {
//     return function (value) {
//       var funcStack = [];
//       var oproxy = new Proxy({} , {
//         get : function (pipeObject, fnName) {
//           if (fnName === 'get') {
//             return funcStack.reduce(function (val, fn) {
//               return fn(val);
//             },value);
//           }
//           funcStack.push(window[fnName]);
//           return oproxy;
//         }
//       });
  
//       return oproxy;
//     }
//   }());
  
//   var double = n => n * 2;
//   var pow    = n => n * n;
//   var reverseInt = n => n.toString().split("").reverse().join("") | 0;
  
//   pipe(3).double.pow.reverseInt.get; // 63











  // const dom = new Proxy({}, {
  //   get(target, property) {
  //     return function(attrs = {}, ...children) {
  //       const el = document.createElement(property);
  //       for (let prop of Object.keys(attrs)) {
  //         el.setAttribute(prop, attrs[prop]);
  //       }
  //       for (let child of children) {
  //         if (typeof child === 'string') {
  //           child = document.createTextNode(child);
  //         }
  //         el.appendChild(child);
  //       }
  //       return el;
  //     }
  //   }
  // });
  
  // const el = dom.div({},
  //   'Hello, my name is ',
  //   dom.a({href: '//example.com'}, 'Mark'),
  //   '. I like:',
  //   dom.ul({},
  //     dom.li({}, 'The web'),
  //     dom.li({}, 'Food'),
  //     dom.li({}, '…actually that\'s it')
  //   )
  // );
  
  // document.body.appendChild(el);


  // class DataSource {
  //   constructor() {
  //     let i = 0;
  //     this._id = setInterval(() => this.emit(i++), 200); // 创建定时器
  //   }
    
  //   emit(n) {
  //     const limit = 10;  // 设置数据上限值
  //     if (this.ondata) {
  //       this.ondata(n);
  //     }
  //     if (n === limit) {
  //       if (this.oncomplete) {
  //         this.oncomplete();
  //       }
  //       this.destroy();
  //     }
  //   }
    
  //   destroy() { // 清除定时器
  //     clearInterval(this._id);
  //   }
  // }

  // class SafeObserver {
  //   constructor(destination) {
  //     this.destination = destination;
  //   }
    
  //   next(value) {
  //     // 尚未取消订阅，且包含next方法
  //     if (!this.isUnsubscribed && this.destination.next) {
  //       try {
  //         this.destination.next(value);
  //       } catch (err) {
  //         // 出现异常时，取消订阅释放资源，再抛出异常
  //         this.unsubscribe();
  //         throw err;
  //       }
  //     }
  //   }
    
  //   error(err) {
  //     // 尚未取消订阅，且包含error方法
  //     if (!this.isUnsubscribed && this.destination.error) {
  //       try {
  //         this.destination.error(err);
  //       } catch (e2) {
  //         // 出现异常时，取消订阅释放资源，再抛出异常
  //         this.unsubscribe();
  //         throw e2;
  //       }
  //       this.unsubscribe();
  //     }
  //   }
  
  //   complete() {
  //     // 尚未取消订阅，且包含complete方法
  //     if (!this.isUnsubscribed && this.destination.complete) {
  //       try {
  //         this.destination.complete();
  //       } catch (err) {
  //         // 出现异常时，取消订阅释放资源，再抛出异常
  //         this.unsubscribe();
  //         throw err;
  //       }
  //       this.unsubscribe();
  //     }
  //   }
    
  //   unsubscribe() { // 用于取消订阅
  //     this.isUnsubscribed = true;
  //     if (this.unsub) {
  //       this.unsub();
  //     }
  //   }
  // }


  // function myObservable(observer) {
  //   const safeObserver = new SafeObserver(observer); // 创建SafeObserver对象
  //   const datasource = new DataSource(); // 创建数据源
  //   datasource.ondata = (e) => safeObserver.next(e);
  //   datasource.onerror = (err) => safeObserver.error(err);
  //   datasource.oncomplete = () => safeObserver.complete();
  
  //   safeObserver.unsub = () => { // 为SafeObserver对象添加unsub方法
  //     datasource.destroy();
  //   };
  //   // 绑定this上下文，并返回unsubscribe方法
  //   return safeObserver.unsubscribe.bind(safeObserver); 
  // }

  // const unsub = myObservable({
  //   next(x) { console.log(x); },
  //   error(err) { console.error(err); },
  //   complete() { console.log('done')}
  // });