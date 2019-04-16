const {of,Right,Left} = require('data.either')
console.log(of().chain((v)=>{
    if(v){
        return Right(v)
    }else{
        return Left('我错了')
    }
}).chain((v)=>{
    console.log(1111)
    return Right(v)
}).getOrElse('www'))