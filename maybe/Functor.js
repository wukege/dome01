//函子 （容器）
class Functor {
    constructor(val) {
        this.val = val
    }
    // //一般约定，函子的标志就是容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器。
    // map(f) {
    //     return new Functor(f(this.val))
    // }
    static of(val) {
        return new Functor(val)
    }
    isNothing() {
        return (this.val === null || this.val === undefined)
    }
    map(f) {
        return this.isNothing() ? Functor.of(null) : Functor.of(f(this.val))
    }
}

// console.log(Functor.of(2).map(two => two + 2))
// console.log(Functor.of('flamethrowers').map(s => s.toUpperCase()))
// console.log(Functor.of('bombs').map(concat(' away')).map(prop('length')))
// console.log(Functor.of(null).map(s => s.toUpperCase()))
var people = Rx.Observable.of('Jerry', 'Anna');

function map(source, callback) {
    return Rx.Observable.create((observer) => {
        return source.subscribe(
            (value) => { 
                try{
                    observer.next(callback(value));
                } catch(e) {
                    observer.error(e);
                }
            },
            (err) => { observer.error(err); },
            () => { observer.complete() }
        )
    })
}

var helloPeople = map(people, (item) => item + ' Hello~');

helloPeople.subscribe(console.log);
// Jerry Hello~
// Anna Hello~