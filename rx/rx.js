// const source = Rx.Observable.interval(1000)
// const newList = source.mapTo(2)
// // newList.subscribe(console.log)

// const source1 = Rx.Observable.interval(500).take(3)
// const source2 = Rx.Observable.interval(300).take(6)
// const example = source1.merge(source2)
// example.subscribe(console.log)

const addButton = document.getElementById('addButton');
const minusButton = document.getElementById('minusButton');
const state = document.getElementById('state');

const addClick = Rx.Observable.fromEvent(addButton, 'click').mapTo(1);
const minusClick = Rx.Observable.fromEvent(minusButton, 'click').mapTo(-1);


const numberState = Rx.Observable.empty()
  .startWith(0)
  .merge(addClick, minusClick)
  .scan((origin, next) => origin + next, 0)
  
numberState
  .subscribe({
    next: (value) => { state.innerHTML = value;},
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
  });
