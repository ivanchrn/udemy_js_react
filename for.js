// ----------------------------------------------------------------------------------------------------

first: for (let i = 0; i <= 3; i++){
    console.log(`First level ${i}`);
    for(let j = 0; j <= 3; j++){
        console.log(`Second level ${j}`);
            for(let k = 0; k <= 3; k++){
                if (k === 2) break first;
                console.log(`Third level ${k}`);
        }
    }
}
// ----------------------------------------------------------------------------------------------------

let number = 5;
    while (number <= 10){
        console.log(number);
        number++;
    }
// ----------------------------------------------------------------------------------------------------

    for(let i = 20; i >= 10; i--){
        console.log(i);
        if(i === 13){
            break;
        }
    }
// ----------------------------------------------------------------------------------------------------

    for(let i = 0; i <= 10; i++){
        if(i%2 == 0 && i != 0){
            console.log(i);
        }
    }
// ----------------------------------------------------------------------------------------------------

    for (let i = 2; i <= 16; i++) {
            if (i % 2 === 0) {
                continue;
            } else {
                console.log(i);
            }
        }
// ----------------------------------------------------------------------------------------------------

let num = 2;

while (num <= 16){
    if(num % 2 === 0){
        num++;
        continue;
    }else{
        console.log(num);
    }
    num++;
}
// ----------------------------------------------------------------------------------------------------

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

// ----------------------------------------------------------------------------------------------------



function sameArr() {
    const arrFirst = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arrFirst.length; i++){
        result[i] = arrFirst[i];
    }

    console.log(result);   
    return result;
}

console.log(sameArr());

// ----------------------------------------------------------------------------------------------------


function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for(let i = 0; i < data.length; i++){
        if(typeof data[i] === 'number'){
            data[i] = data[i] * 2;
        }else if (typeof data[i] === 'string'){
            data[i] = data[i] +'-done';
        }
    }
    
    // Не трогаем
    return data;
}

console.log(secondTask());

// ----------------------------------------------------------------------------------------------------


function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const dataArr = [5, 10, 'Shopping', 20, 'Homework'];
    const resultArr = [];

    for (let i = 1; i <= dataArr.length; i++){
        resultArr[i - 1] = dataArr[dataArr.length - i];
    }

    console.log(resultArr);

    return resultArr;
}

// ----------------------------------------------------------------------------------------------------


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);