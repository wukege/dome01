class Maybe {
    constructor(x) {
        this.__value = x
    }
    static of(x) {
        return new Maybe(x)
    }
    isNothing() {
        return (this.__value === null || this.__value === undefined)
    }
    map(f) {
        return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
    }
    join () {
        return this.isNothing() ? Maybe.of(null) : this.__value;
   }
}
 
// console.log(Maybe.of("Malkovich Malkovich").map(match(/a/ig)))
// console.log(Maybe.of(null).map(match(/a/ig)))
// console.log(Maybe.of({ name: "Dinah", age: 14 }).map(prop("age")).map(add(10)))
// console.log(Maybe.of({name: 'Stark'}).map(prop('age')).map(add(10)))
// console.log(Maybe.of({name: 'Stark',age: 21}).map(prop('age')).map(add(10)))    
// const map = f => ary => ary.map(f)
var doEverything = map(compose(prop("age")))

var functor = Maybe.of({name: "Stark", age: 1});
doEverything(functor);
//=> Maybe(31)
console.log(doEverything(functor),33333)



// function map(f){
//     return function(arr){
//         arr.map(f)
//     }
// }

// let add = map(add)
// let add = function(arr){
//     arr.map(compose(add(20),add(10),prop("age")))
// }


// map :: Functor f => (a -> b) -> f a -> f b
// var map = curry(function(f, any_functor_at_all) {
//     return any_functor_at_all.map(f);
//     });

// // safeHead :: [a] -> Maybe(a)
var safeHead = function(xs) {
    return Maybe.of(xs[0]);
    };
    var streetName = compose(map(prop('street')), safeHead,prop('addresses'));
    console.log(streetName({addresses: []}))
    // Maybe(null)
    console.log(streetName({addresses: [{street: "Shady Ln.", number: 4201}]}))
// Maybe("Shady Ln.")