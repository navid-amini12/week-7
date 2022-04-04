

function decipherFunction (stringValue)  {
var result = ""


const firstElement = Number(stringValue[0])

for (let i = 1 ; i < stringValue.length ; i ++ ) {
          let resultValue =  stringValue[i].charCodeAt() + firstElement
          result += String.fromCharCode(resultValue)
}
return result
}
console.log(decipherFunction("3ab"))
