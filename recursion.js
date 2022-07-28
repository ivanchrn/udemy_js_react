function factorial(num) {
    let result = 1;
    if(num <= 0){
        return 1;
    }else if(typeof(num) !== 'number' || !Number.isInteger(num)){
        return 'Wrong';
    }else{
        for(let i = 1; i <= num; i++){
            result *= i;
        }
    }
    return result;
}
console.log(factorial(7));
//------------------------------------------------------------------------------------

function factorial(num) {
   let result = 1;
    if(typeof(num) !== 'number' || !Number.isInteger(num)){
        return 'Wrong';
    }else if (num > 1){
        result = factorial(num - 1) * num;
        return result;
    }else{
        return result;
    }


}
console.log(factorial(5));