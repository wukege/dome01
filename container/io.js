const compose = (...arr) => x => arr.reduceRight((a, b) => b(a), x)
class IO {
    constructor(f) {
        this.unsafePerformIO = f;
    }
    map(f) {
        return new IO(compose(f, this.unsafePerformIO));
    }
    static of(x) {
        return new IO(function() {
            return x;
          });
    }
    join() {
        return this.unsafePerformIO();
    }
    chain(f) {
        return this.map(f).join();
    }
    ap(a){
        return this.chain(function(f) {
            return a.map(f);
          });
    }
    inspect(){
        return 'IO('+inspect(this.unsafePerformIO)+')';
    }
}

module.exports = IO



IO = function(f) {
    this.unsafePerformIO = f;
  }
  
  IO.of = function(x) {
    return new IO(function() {
      return x;
    });
  }
  
  IO.prototype.map = function(f) {
    return new IO(compose(f, this.unsafePerformIO));
  }
  
  IO.prototype.join = function() {
    return this.unsafePerformIO();
  }
  
  IO.prototype.chain = function(f) {
    return this.map(f).join();
  }
  
  IO.prototype.ap = function(a) {
    return this.chain(function(f) {
      return a.map(f);
    });
  }
  
  IO.prototype.inspect = function() {
    return 'IO('+inspect(this.unsafePerformIO)+')';
  }
  
  unsafePerformIO = function(x) { return x.unsafePerformIO(); }