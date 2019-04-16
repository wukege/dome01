class Container {
    constructor(x){
        this._value = x
    }
    static of(x){
        return new Container(x)
    }
    map(f){
        return Container.of(f(this._value))
    }
}

class Functor {
  constructor(val) { 
    this.val = val; 
  }

  map(f) {
    return new Functor(f(this.val));
  }
}

class Monad extends Functor {
    join() {
      return this.val;
    }
    flatMap(f) {
      return this.map(f).join();
    }
  }

  Right.prototype.chain = function(f) {
    return f(this.value)
  }

console.log(Container.of(10).map(x=>x*x))
console.log(Container.of('ke').map(x=>x.toUpperCase()))
console.log(Container.of({name:'kege'}))
