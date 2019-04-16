
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

const onSubscribe = obsever =>{
    obsever.next(1);
    obsever.next(2);
    obsever.next(3);
  }
  
  const source$ = Rx.Observable.create(onSubscribe)
    
  const subscription = source$.map(x=>x*x).subscribe(console.log)
  
function map(project){
    return new Rx.Observable(obsever =>{//返回一个新的Observable
       const sub = this.subscribe({ //订阅
            next:value=>{
                try {//异常处理
                    obsever.next(project(value))
                } catch (error) {
                    obsever.error(error)
                }
            },
            error:error=>obsever.error(error),
            complete:()=>obsever.complete()
        })
        return{ //退订
            unsubscribe:()=>{
                sub.unsubscribe();
            }
        }
    })
}

function map1(project){
    return this.left(function(source$){
        return source$.subscribe({
            next:value=>{
                try{
                    this.next(project(value))
                } catch(err){
                    this.error(error)
                }
            },
            error:err=>this.error(err),
            complete:()=>this.complete()
        })
    })
}