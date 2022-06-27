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

function calculateVolumeAndArea(cubeLength) {
    if(cubeLength < 0 || typeof(cubeLength) !== 'number' || !Number.isInteger(cubeLength) ){
        return `При вычислении произошла ошибка`;
    }else {
        let cubeValue = Math.pow(cubeLength, 3);
        let cubeArea = Math.pow(cubeLength, 2) * 6;
        return `Объем куба: ${cubeValue}, площадь всей поверхности: ${cubeArea}`;
    }
}

console.log(calculateVolumeAndArea(-15));

// ----------------------------------------------------------------------------------------------------

function getCoupeNumber(placeNum) {
    if(placeNum == 0 || placeNum > 36){
       return "Таких мест в вагоне не существует";
    }else if (typeof(placeNum) !== 'number' || !Number.isInteger(placeNum) || placeNum < 0) {
        return "Ошибка. Проверьте правильность введеного номера места";
    }
    for (let i = 4; i <= 36; i = i + 4) {
        if (placeNum <= i) {
            return Math.ceil(i / 4);
        }
    }
}
console.log(getCoupeNumber(10.4));

// ----------------------------------------------------------------------------------------------------

function getTimeFromMinutes(minutes) {
    if (typeof(minutes) !== 'number' || !Number.isInteger(minutes) || minutes < 0) {
        return "Ошибка, проверьте данные";
    } else if (minutes < 60) {
        return `Это ${0} часов и ${minutes} минут`;
    } else if (minutes >= 60){

        let hours = Math.floor(minutes/60);
        let minutesRest = minutes - (hours * 60);
        
        if(hours === 1){
            return `Это ${hours} час и ${minutesRest} минут`;
        }else if (hours === 2 || hours === 3 || hours === 4) {
            return `Это ${hours} часа и ${minutesRest} минут`;
        } else {
            return `Это ${hours} часов и ${minutesRest} минут`;
        }
    }
}

console.log(getTimeFromMinutes(60));

// ----------------------------------------------------------------------------------------------------

function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

console.log(findMaxNumber(1, 4, 5, 1));


// ----------------------------------------------------------------------------------------------------


function fib(num) {
    if(typeof(num) !== 'number' || !Number.isInteger(num)){
        return '';
    } else {
        let fibNum ;
        let fibResult = [];

        for (let i = 0; i < num; i++){
            if(i === 0){
                fibNum = 0;
            }else if(i === 1) {
                fibNum = fibResult[i-1] + 1;
            }else {
                fibNum = fibResult[i-1] + fibResult[i-2];
            }
                fibResult.push(fibNum);
                

        }
        
        return fibResult.join(" ");
    }
}
    
console.log(fib(5));