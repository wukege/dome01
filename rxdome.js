import { Observable } from 'rxjs'
import { Right, Left } from 'data.either'
import { ajax } from 'jquery'

// const ob1 = Observable.ajax('https://www.vue-js.com/api/v1/topics');
// Observable.concat(ob1).subscribe(detail => {
//     console.log(detail.response.data)
// });
// console.log(Observable.of(Observable.concat(ob1).subscribe(detail => detail.response.data)),444444)

// ajax({
//     type: "get",
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     url:'https://www.vue-js.com/api/v1/topics',
//     success: (data) => {
//        console.log(data,666)
//     }
// });



// function aj(url , type="GET" , data="json"){  
//     return Observable.fromPromise(  
//         ajax({  
//         type: type,  
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         url: url,  
//         dataType: data  
//         })  
//         .promise()  
//     );   
// } 
// var aaa = aj("https://www.vue-js.com/api/v1/topics");//把ajax结果赋给aaa,并做下一步处理 

// console.log(aaa,88)

// const ob1 = Observable.ajax('https://www.vue-js.com/api/v1/topics').subscribe(detail => {
//         console.log(detail.response.data,1111)
//     });



// class Ajax{
//    static get(url , type="GET" , data="json"){
//         return ajax({  
//                 type: type,  
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 url: url,  
//                 dataType: data
//         }).promise()
//     }
// }
// console.log(ob1)
// class Ajax{
//     static get(url , type="GET" , data="json"){
//          return new Promise((resolve, reject)=>{
//             ajax({  
//                 type: type,  
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 url: url,  
//                 dataType: data,
//                 success: (data) => {
//                     resolve(data)
//                 }
//                 })
//          })
//      }
//  }




// async function aj(url){  
//     console.log(111)
//     let dd = await Ajax.get(url); 
//     console.log(dd,88)
//     console.log(22222)
//     return dd;
// }

// console.log(1)
// console.log(aj('https://www.vue-js.com/api/v1/topics'))
// console.log(2)


// import {Observable} from 'rxjs'
// import {ajax} from 'jquery'

// function promiseToRxResult(func){
//     return Observable.create((observer) => {
//         function completeWithError(error) {
//             console.error(error)
//             // observer.next(errorFactory(Optional.ofNullable(error)))
//             observer.complete()
//         }
//         func().then((value) => {
//              observer.next((value))
//              observer.complete()},
//             (reason) => {
//                 console.error('Promise rejected with the reason: ', reason)
//                 if (reason.json && typeof reason.json === 'function') {
//                     reason.json()
//                         .then(completeWithError, completeWithError)
//                         .catch(completeWithError)
//                 } else {
//                     completeWithError(reason)
//                 }
//             })
//             .fail
//                 ((reason) => {
//                 console.error('Promise failed with the reason: ', reason)
//                 completeWithError(reason)
//             })
//     })
// }


// console.log(promiseToRxResult(()=>{
//     return ajax({  
//         type: "GET",  
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         url: 'https://www.vue-js.com/api/v1/topics',  
//         dataType: 'json'
//     }).promise()
// }).map((data)=>{
//     console.log(data,5);
// }).subscribe())










// Observable.fromEvent(document.querySelector('.btn'),'click').subscribe((e)=>{
//     console.log(e);
// })
// console.log(Observable.of(1,2,3,4))

// const source$ = Observable.of([1, 2, 3]);
// source$.subscribe(x => console.log(x));
/**
 * 操作符-创建类 of from 
 */

//  console.log(Observable.of(1,2,3,4))
//  console.log(Observable.of([1,2,3,4]))
//  console.log(Observable.of({val:1,age:2}))


//  console.log(Observable.from([1,2,3,4]))
// @f
// class MyTestableClass{

// }

// function f(target) {
//     target.isTestbale = true
// }



// console.log(MyTestableClass.isTestbale);















// ajax({
//     type: "get",
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     url: 'https://www.vue-js.com/api/v1/topics',
//     success: (data) => {
//         console.log(data, 666)
//     }
// });

console.log(111111)

// ajax({
//     type: "get",
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept-Language': 'en-US',
//         'Authorization': 'Basic cWE6cWE='
//     },
//     url:'http://dev5eis2kub104.sjclab.exigengroup.com:9002/agent-facade/v1/customers/full-text-search-details?q=John%20Some',
//     success: (data) => {
//        console.log(data,777)
//     }
// });


// fetch('http://dev5eis2kub104.sjclab.exigengroup.com:9002/agent-facade/v1/customers/full-text-search-details?q=John%20Some', {
//     mode: "no-cors",
//     headers: {
//         "Content-Type": "text/html;charset=UTF-8",
//     }
// }).then((response) => {
//     console.log(response, 676);
//     if (response.ok) {
//         return response.text();
//     } else {
//         return { status: response.status };
//     }
// })
fetch('http://dev5eis2kub104.sjclab.exigengroup.com:9002/agent-facade/v1/customers/full-text-search-details?q=John%20Some', {
    method: 'GET',
    mode: "no-cors",
    credentials: 'include',
    headers: {
                "Content-Type": "text/html;charset=UTF-8",
                'Accept-Language': 'en-US',
                'Authorization': 'Basic cWE6cWE='
            }
})
    .then((res) => {
        console.log(res,77)
        return res.text()
    })
    .then((res) => {
        console.log(res,4444)
    })