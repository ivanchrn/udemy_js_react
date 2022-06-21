function sayHello(name) {
    return "Привет, " + name;
}

console.log(sayHello('Ivan'));

// ----------------------------------------------------------------------------------------------------

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));

// ----------------------------------------------------------------------------------------------------


function getMathResult(base, repeat) {
    if (typeof(repeat) !== 'number' || repeat <= 0) {
        return base;
    }
    let str = '';

    for (let i = 1; i <= repeat; i++) {
        if (i === repeat) {
            str += `${base * i}`;
        } else {
            str += `${base * i}---`;
        }
    }
    return str;
}
console.log(getMathResult(5, 3));

// ----------------------------------------------------------------------------------------------------
