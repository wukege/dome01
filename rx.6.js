class Container {
    constructor(x) {
        this.__value = x;
    }
    map(f) {
        //返回一个新的Container对象，不改变原数据
        return Container.of(f(this.__value));
    }
    getValue() {
        return this.__value;
    }
    static of(x) {
        return new Container(x);
    }
}

console.log(Container.of(2).map(x=>x*x).getValue())