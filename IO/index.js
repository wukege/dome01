class IO {
    constructor(f) {
        this.__value = f;
    }
    map(f) {
        return new IO(compose(f, this.__value));
    }
    static of(x) {
        return new IO(function () {
            return x;
        });
    }
    join(){
        return this.__value()
    }
}
// var io_window = new IO(function(){ return window; });

// console.log(io_window.map(function(win){ return win.innerWidth }).__value())
// console.log(io_window.map(prop('location')).map(prop('href')).map(split('/')))
// console.log(io_window.map(prop('location')).map(prop('href')).map(split('/')).__value())

ioio = IO.of(IO.of(IO.of("pizza")));
console.log(ioio.__value().__value().__value())
console.log(ioio.join()().join()().join()())
