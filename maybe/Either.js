class Either {
    constructor(left, right) {
        this.left = left
        this.right = right
    }
    map(f) {
        return this.right ?
            Either.of(this.left, f(this.right)) :
            Either.of(f(this.left), this.right);
    }
    static of(left, right) {
        return new Either(left, right)
    }
}

const addOne = x => x + 1
const mul = x => x * 5
// console.log(Either.of(5, 6).map(addOne))
// console.log(Either.of(1, null).map(addOne))
// console.log(compose(mul, addOne)(2))
