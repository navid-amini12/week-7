

function decipherFunction (stringValue)  {
var result = ""
// A: [] = stringValue
// console.log(A)

const firstElement = Number(stringValue[0])
//console.log(firstElement)
// const result = stringValue.charCodeAt(0);

for (let i = 1 ; i < stringValue.length ; i ++ ) {
          let resultValue =  stringValue[i].charCodeAt() + firstElement
          result += String.fromCharCode(resultValue)
}
return result
}
console.log(decipherFunction("3ab"))