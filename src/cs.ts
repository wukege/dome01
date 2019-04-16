// export interface StringValidator{
//     isAcceptable(s:string):boolean;
// }

// function Path(target:any){
//     // target.getName = function(){
//     //     console.log('start');
//     //     console.log('end')
//     // }
//     console.log('I am decorator.')
//     return class extends target{
//         name:string
       
//         getName(){
//             console.log(this.name+'dddd')
//         }
//         static getName(){
//             console.log('hggggg')
//         }
//     }
// }

// @Path
// class Hello{
//     name:string
//     constructor(name:string){
//         this.name = name;
//     }
//     getName(){
//         console.log(this.name)
//     }
//     static getName(){
//         console.log('h')
//     }
// };

// let h:Hello = new Hello('wu');

// Hello.getName();
// h.getName();

// function f() {
//     console.log("f(): evaluated");
//     return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("f(): called");
//     }
// }

// function g() {
//     console.log("g(): evaluated");
//     return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("g(): called");
//     }
// }

// class C {
//     @f()
//     @g()
//     method() {}
// }
// let foo : string|number;
// foo =(foo as string) ='1'

// class User{
//     name:string;
//     age:number;
// }


// let user:User = {
//     name:'h',
//     age:1
// }

// console.log(user,user.age,user.name);
// interface User1{
//     name:string;
//     age:number;
// }
// let user1:User1 = {
//     name:'h',
//     age:1
// }
// console.log(user1,user1.age,user1.name);


// class User {
//     // 只读属性
//     readonly id: number
  
//     // 存取器, get/set
//     private _name: string
//     get name(): string {
//       // dosomething 
//       return this._name
//     }
//     set name (name: string) {
//       console.log('this is set method')
//       // dosomething
//       this._name = name
//     }
  
//     // 构造函数
//     constructor (id: number, theName: string) {
//         // 只读属性只能在构造函数里初始化
//         this.id = id
//         this._name = theName
//     }
  
//     // 实例方法
//     say () {
//       console.log(`name: ${this.name}`)
//     }
  
//     // 静态方法（类方法）
//     static print () {
//       console.log('static method')
//     }
//   }
  
//   let user = new User(1, 'linkFly')
//   user.name = 'tasaid' // 会输出 'this is set method'
//   user.say() // 实例方法
//   User.print() // 静态方法
// const validate = function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     // 保存原来的方法
//     let method = descriptor.value
//     // 重写原来的方法
//     descriptor.value = function (newValue: string) {
//         console.log(this)
//       // 检查是否是空字符串
//       if (!newValue) {
//         throw Error('name is invalid')
//       } else {
//         // 否则调用原来的方法
//         method.call(this, newValue)
//         console.log(this)
//       }
//     }
//   }
// class User{
//     name:string
//     constructor(n:string){
//         this.name = n;
//     }
//     @validate
//     setName(n:string){
//         this.name = n;
//     }
// }

// let user:User = new User('dd');

// user.setName('')
// class Album{
//   label:Album.AlbumLabel
// }

// namespace Album{
//   export class AlbumLabel{
//     static id = 'ssss'
//   }
// }

// let album = new Album();

// let label = album.label;

// let id = Album.AlbumLabel.id;

// console.log(typeof Album.AlbumLabel)
// console.log( Album.AlbumLabel)
interface S{
  name:string
}

interface S{
  age:string;
}


let nots =  [
  {
      id: '0',
      entityType: 'Customer',
      category: 'CROSS_SELL__UP_SELL',
      title: 'Note Title 1',
      description: 'Note 1',
      // createdOn: moment('2018-01-02').toDate(),
      // updatedOn: moment('2018-03-12').toDate(),
      performer: 'QA User'
  },
  {
      id: '1',
      entityType: 'Customer',
      category: 'GENERAL_INFO',
      title: 'Note Title 2',
      description: 'Note 2',
      // createdOn: moment('2018-02-22').toDate(),
      // updatedOn: moment('2018-03-01').toDate(),
      performer: 'Non-QA User'
  }
];
// console.log(
//   Right(nots),111111)

//   console.log(
//       Left(nots),222222)
console.log('111')

function note<T>(val:T):T {
    return val
}

note<(a:boolean)=>boolean>(function(a:boolean){return a})
