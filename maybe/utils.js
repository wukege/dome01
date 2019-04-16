const add = x => y => x + y
const match = what => str => str.match(what)
const replace = (what, replacement) => str => str.replace(what, replacement)
const filter = f => ary => ary.filter(f)
const map = f => ary => ary.map(f)
// const compose = (f,g)=> x => f(g(x))
//右-->左执行
const compose = (...arr) => x => arr.reduceRight((a, b) => b(a), x)
const toUpperCase = x => x.toUpperCase()
const exclaim = x => `${x}!`
const head = (x) => x[0]
const reduce = (f, arr) => (x) => x.reduce(f, arr)
//字符串拼接
const concat = x => y => y + x
const prop = x => y => y[x]
const split = x => y => y.split(x)