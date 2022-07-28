const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        return str;
    }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    let {exp} = plan.skills;
    return exp;
}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str = '';
    let {programmingLangs} = plan.skills;
    for(let key in programmingLangs){
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}
console.log(showProgrammingLangs(personalPlanPeter));


//----------------------------------------------------------------------------------------------------

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const family2 =[];

function showFamily(arr) {
    if(arr.length > 0){
        return `Семья состоит из: ${arr.join(" ")} `;
    }else{
        return 'Семья пуста';
    }
}
console.log(showFamily(family));
console.log(showFamily(family2));

//------------------------------------------------------------------------------------------------------------

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {

    arr.forEach(keys =>{
        console.log(keys.toLowerCase());
    });

}
console.log(standardizeStrings(favoriteCities));

//------------------------------------------------------------------------------------------------------------

const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) === 'string'){
        return str.split('').reverse().join('');
    }else{
        return "Ошибка!";
    }
}
console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['USD', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let availables = [];
    if(arr.length > 0){
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < missingCurr; j++){
                if(arr[i] === missingCurr[j]){
                    availables[i] = arr[i];
                }else {
                    continue;
                }
            }
        }
        return availables;
    }
}
console.log(availableCurr(baseCurrencies, additionalCurrencies));


//--------------------------------------------------------------------------------------

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

isBudgetEnough(shoppingMallData);

// ------------------------------------------------------------------------------------------

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let firstTeam = [], secondTeam = [], thirdTeam = [], rest = [];

    for(let i = 0; i < arr.length; i++){
        if(i < 3){
            firstTeam.push(arr[i]);
        }else if(i < 6){
            secondTeam.push(arr[i]);
        }else if(i < 9){
            thirdTeam.push(arr[i]);
        }else{
            rest.push(arr[i]);
        }
    }
    
    return [firstTeam,secondTeam,thirdTeam, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

console.log(sortStudentsByGroups(students));

// -----------------------------------------------------------------------

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);