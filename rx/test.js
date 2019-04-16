//1 concat
// const source1 = Rx.Observable.interval(1000).take(3)
// const source2 = Rx.Observable.of(4,5,6)
// const source3 = source1.concat(source2)
// source3.subscribe(console.log)
// merge
// const source1 = Rx.Observable.timer(0,1000).map(x=>x+'A')
// const source2 = Rx.Observable.timer(500,1000).map(x=>x+'B')
// const source3 = source1.merge(source2)
// source3.subscribe(console.log)
// zip
// const source1 = Rx.Observable.of(1,2,3)
// const source2 = Rx.Observable.of('a','b','c')

// const source3 = source1.zip(source2)
// const source3 = source1.zip(source2,(x,y)=>x+y)
// source3.subscribe(console.log)

//
// const source1 = Rx.Observable.timer(500,1000).take(4)
// const source2 = Rx.Observable.of('a')
// const source3 = source1.combineLatest(source2)
// source3.subscribe({
//   next:value=>console.log(value),
//   err: err=>console.log(err),
//   complete: _=>console.log('complete')
// })

// const source1 = Rx.Observable.of('a','b','c')
// const source2 = Rx.Observable.of(1,2,3)
// const source3 = Rx.Observable.of('x','y')
// const source4 = source1.combineLatest(source2,source3)
// source4.subscribe(console.log)

//race
// const a = Rx.Observable.timer(600,2000).map(x=>x+'a')
// const b = Rx.Observable.timer(500,1000).map(x=>x+'b')
// const c = a.race(b)
// c.subscribe(console.log)
//forkJoin
// const a = Rx.Observable.interval(1000).map(x=>x+'a').take(1)
// const b = Rx.Observable.interval(1000).map(x=>x+'b').take(3)
// const c = Rx.Observable.forkJoin(a,b)

// c.subscribe(console.log)

// const ho$1 = Rx.Observable.interval(1000)
//     .take(2)
//     .map(
//         x => Rx.Observable.interval(1500)
//             .map(y => x + ':' + y)
//             .take(2)
//     )
// ho$1.subscribe((h) => {
//     h.subscribe(_ => console.log(_, h))
// })

// const ho$ = Rx.Observable.interval(1000)
//     .take(2)
//     .map(
//         x => Rx.Observable.interval(1500)
//             .map(y => x + ':' + y)
//             .take(2)
//     )
// ho$.concatAll().subscribe(console.log)

// const ho$ = Rx.Observable.interval(1000)
//     .take(2)
//     .map(
//         x => Rx.Observable.interval(1500)
//             .map(y => x + ':' + y)
//             .take(2)
//     )
// ho$.mergeAll().subscribe(console.log)

// const source1 = Rx.Observable.of(1,2,3)
// const source2 = Rx.Observable.of(4,5,6,1)
// const source3 = source1.concat(source2).count().subscribe(console.log)


// const source1 = Rx.Observable.of(
//     { name:'Rxjs', year:2011},
//     { name:'React', year:2013},
//     { name:'Redux', year:2015}
// ).min((a,b)=>a.year - b.year).subscribe(console.log)

// const source2 = Rx.Observable.of(
//     { name:'Rxjs', year:2011},
//     { name:'React', year:2013},
//     { name:'Redux', year:2015}
// ).max((a,b)=>a.year - b.year).subscribe(console.log)

// const source1 = Rx.Observable.of(1, 2, 3, 4, 5)
//     .every((x, i) => {
//         console.log(i)
//         return x < 0
//     }).subscribe(console.log)


// const source1 = Rx.Observable.of(3, 1, 4, 1, 5, 9)
//     .first(
//         x => x % 2 === 0,
//         (value,index) => [value,index+'index']
//     ).subscribe(console.log)


// const source1 = Rx.Observable.interval(1000).throttleTime(3000).subscribe(console.log)
// const source1 = Rx.Observable.interval(1000).debounceTime(3000).subscribe(console.log)
// const source1 = Rx.Observable.interval(1000).filter(x=>x % 3 === 0).debounceTime(3000).subscribe(console.log)

const addButton = document.getElementById('addButton')
const click = Rx.Observable.fromEvent(addButton,'click').throttleTime(1000).subscribe(()=>{
    console.log('---------')
})