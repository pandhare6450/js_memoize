// Memoize in JS

function memoizeMe(func,context){
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args + func.name);
    if (!res[argsCache]) res[argsCache] = func.call(context || this, ...args);
    return res[argsCache];
  };
}


async function calc(id){
  let result = [];
 for (let i = 0 ; i < 1000; i++){
   result[i] = i*i
 }
 console.log(result[id])
 return result[id]
}

const myMemo = memoizeMe(calc)

console.time('5')
myMemo(25)
console.timeEnd('5')


console.time('5')
myMemo(25)
console.timeEnd('5')