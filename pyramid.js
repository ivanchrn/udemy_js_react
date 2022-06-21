let result = "";
let pyramidLength = 10;

for (let i = 1; i <= pyramidLength; i++){
    for(let j = 0; j < i; j++){
        result += "*";
    }
    result += '\n';
}

console.log(result);