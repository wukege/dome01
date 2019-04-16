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
const split = what => str => str.split(what)


// var shout = compose(exclaim, toUpperCase);
// console.log(shout("send in the clowns"))

let list = [1,2,3,4,5,6]
console.log(list.reduce((a,b)=>a+b,0))
list.forEach(item=>console.log(item))
/**
 * 构造函数
 * @param {g} name 
 * @param {*} money 
 */
function Fn(name,age){
    //实例属性
    this.name = name
    this.age = age
    //私有变量
    let _str = '调用了！'
    //实例方法
    this.getName = function(){
        return this.name
    }
    this.getAge = function(){
        return this.age
    }
    this.setAge = function(age){
        this.age = age
        return this
    }
    //私有方法
    function _call(){
       console.log(`${Fn.name} ${_str}`)
    }
    _call()
}
//原型方法 -> 公共方法
Fn.prototype.sleep = function(){
    console.log(`${this.name} 睡觉了！`)
}
//静态方法
Fn.test = function(){
    console.log('test')
}
//实例
const fn = new Fn('kege',17)
Fn.test()
console.log(fn.getName())
console.log(fn.getAge())
console.log(fn.setAge(18).getAge())
console.dir(fn)
console.log(fn.__proto__)


const fn = function(){
    console.log(arguments)
}

Array.prototype.myForEach = function(cb){
    for(let i=0;i < this.length;i++){
        cb(this[i],i,this)
    }
    return this
}
Array.prototype.myMap = function(cb){
    let list = []
    this.myForEach((item,index,arr)=>{
        list.push(cb(item,index,arr))
    })
    return list
}

[1,2,3].myMap(item=>item*2)   