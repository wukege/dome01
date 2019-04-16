// let reg = /(<a [^>]*href=")([^"]*)(">)/gm
// let str = "Task Created Return Premium, <a href=\"/faces/work/task-details.xhtml?id=70537\">70537</a>"
// const url = 'http://suzeisre84.exigengroup.com:8080'
// const url1 = 'ipb-app'
// let c = str.replace(reg,(...arg)=>{
//     return `${arg[1]}${url}/${url1}${arg[2]}${arg[3]}`
// })
// console.log(c)

// function replaceLink(str) {
//   let el = document.createElement('div')
//       el.innerHTML = str
//     let childList = el.querySelectorAll('a')
//     let list =  [...childList].forEach((item,index)=>{
//         childList[index].href =  `${url}${item.pathname}${item.search}`
//     })
//     return el.innerHTML.toString()
// }
// console.log(replaceLink(str))

//
// replaceLink = (des) => {
//     const reg = /(<a [^>]*href=")([^"]*)(">)/gm
//     return des.replace(reg, _ => {
//         return `${RegExp.$1}${process.env.EIS_BASE_URL}/${IPB_APP}${RegExp.$2}${RegExp.$3}`
//     })
// }
// replaceLink2 = (des) => {
//     const el = document.createElement('div')
//     el.innerHTML = des
//     const childList = el.querySelectorAll('a')
//     if (childList.length > 0) {
//         const list =  [].slice.call(childList, 0).forEach(( item, index) => {
//             childList[index].href = `${process.env.EIS_BASE_URL}/${IPB_APP}${item.pathname}${item.search}`
//         })
//         return el.innerHTML.toString()
//     }
//     return des
// }

// const compose = (...args)=>{
//     args = args.reverse()
//     return val=>{
//         args.forEach(item=>{
//             val = item(val)
//         })
//         return val
//     }
// }

// const compose1 = (...args)=>{
//     let str = ''
//     return val=>{
//         args.forEach(item=> str += item.name + ',')
//         str = str.replace(/,/g, '(')
//         str += val
//         args.forEach(() =>str+= ')')
//         return eval(str)
//     }
// }
//
// const add = x => x + 10
// const jian = x => x - 1
// console.log(jian(add(1)), 'add-jian');
// const addJian = compose1(jian,add)
// console.log(addJian(1));
// const BAM_NOTE_LINK= 'http://suzeisre49.exigengroup.com:8080/ipb-app/faces/work/task-details.xhtml?id='
// let reg = /(<a [^>]*href=")[^"]*\?id=(\d+)[^"]*(">)/gm
// let reg2 = /<a [^>]*>([^><]*)<\/a>/gm
// let str = "Task Created Return Premium, <a href=\"/faces/work/task-details.xhtml?id=70537\">70537</a>"
// const url = 'http://suzeisre84.exigengroup.com:8080'
// const url1 = 'ipb-app'
// let c = str.replace(reg,(...arg)=>{
//     console.log(arg)
//     return `${arg[1]}${BAM_NOTE_LINK}${arg[2]}${arg[3]}`
// })
// console.log(c,111111)
//
// let str = "Task Created Return Premium, <a href=\"/faces/work/task-details.xhtml?id=70537\">70537</a>"
// const url = 'http://suzeisre84.exigengroup.com:8080'
// const url1 = 'ipb-app'
// let c = str.replace(reg2,(...arg)=>{
//     console.log(arg)
//     return `<a href="${BAM_NOTE_LINK}${arg[1]}">${arg[1]}</a>`
// })
// console.log(c)
//
//
// for(var i=0;i<10;i++){
//     ((i)=>{
//         setTimeout(()=>{
//             console.log(i)
//         },1000)
//     })(i)
// }
// function add(a,b,c) {
//     return a+b+c
// }

// console.log(add(1, 2, 3));

// function adds(a) {
//    return function (b) {
//        return function (c) {
//           return a + b + c
//        }
//    }
// }

// function curry(fn) {
//     return function curried() {
//         var args = [].slice.call(arguments);
//         return args.length >= fn.length ?
//             fn.apply(null, args) :
//             function () {
//                 var rest = [].slice.call(arguments);
//                 return curried.apply(null, args.concat(rest));
//             };
//     };
// }

// var curriedAdd = curry(add);
// console.log(curriedAdd(1)(2)(3));
// console.log(curriedAdd(1)(2, 3));

// function curry(fn) {
//     return function curried() {
//         var args = toArray(arguments),
//             context = this;

//         return args.length >= fn.length ?
//             fn.apply(context, args) :
//             function () {
//                 var rest = toArray(arguments);
//                 return curried.apply(context, args.concat(rest));
//             };
//     }
// }


// const sum = (...args) => args.reduce((x,y)=> x+y ,0)

function getToken() {
    let data = ''
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: 'https://www.vue-js.com/api/v1/topics',
        async:false,
        success: (response) => {
          if(response){
            response.token = '4444'
            data = response.token
          }
        }
    })
    return data
}

function tryGetToken (){
    let token = getToken()
    if(token){
        return token
    }else{
        console.log(1)
       return getToken()    
    }
}

console.log(tryGetToken())
