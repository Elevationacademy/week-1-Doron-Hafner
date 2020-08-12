/*-----------------exercise1-----------------
const calcAge = function (year, birth) {
    return year-birth
}
const age = calcAge(2017, 1989)
*/


/*-----------------exercise2-----------------
const calcAge = function (year, birth) {
    return [year-birth, year-birth+1]
}
const age = calcAge(2017, 1989)
console.log('you are either ' + age[0] + ' or ' + age[1]);
*/


/*-----------------exercise3-----------------
const isEven = function (num) {
    let iseven = num%2
    if (iseven > 0) {
        return false
    }
    return true
}
console.log(isEven(100));


//-----------------exercise4-----------------
const oddarr = function (arr) {
    for (const index of arr) {
        if (isEven(index)) {
        } else {
            console.log(index);
        }
    }
}
let arr = [100, 23, 45, 60, 100]
oddarr(arr)
*/


/*-----------------exercise5-----------------
const isExist = function (arr, num) {
    for (const index of arr) {
        if (index === num) {
            return true;
        }
    }
    return false;
}
console.log(isExist([2,3,4], 4));
*/


/*-----------------exercise6-----------------
let calculator = ['add', 'subtract']
calculator.add = function (a, b) {
    return a+b
}
calculator.subtract = function (a, b) {
    return a-b
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2))
*/


/*-----------------exercise7-----------------
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)
    console.log(name + " has " + money + " gold coins")
}
const increaseByNameLength = function (money, name) {
     return name.length * money
}
const makeRegal = function (name) {
    return 'His Royal Highness, ' + name
}
turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
*/


/*-----------------exercise7-NOT FINSHED!----------------
const splice = function (arr, start, deletecount, items ) {
    if (arr.lenght < start) {
        start = arr.lenght
        for (start in arr) {
            arr[start]=
        }
    } 
    return arr
    // else {
        
    // }
}
let arr = [1, 2, 3, 4, 5]
splice(arr, 10, 4, 'lol')
console.log(arr);

let arr = [1, 2, 3, 4, 5]
arr.splice(8, 0, 3, ['efe','3232'])
console.log(arr);
*/


const getSummary = function (person) {
    let summary = ''
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} `
    summary += prof(person.profession)
    summary += ` from ${countryCity(`${person.city}, `, person.country)}.`
    summary += `${capitalize(person.name)} love to say ${catchphrasereturn(person.catchphrase)}`
    return summary
}
 

const capitalize = function (str) {
    let capitalizedStr = ''
    capitalizedStr += str[0].toUpperCase()
    capitalizedStr += str.slice(1)
    return capitalizedStr
}
const getAge = function (age) {
    if (age < 21) {
        return age = 'Underage'
    } else {
        if (age > 55) {
            return age = '55+'
        }
    }
    return age + ' years old'
}
const prof = function (profession) {
    let arr = profession.split(" ")
    profession = []
    for (const index of arr) {
        profession.push(capitalize(index))
    }
    return profession.join(" ")
}
const countryCity = function(city, country){
    let countrycity = capitalize(city)
    countrycity += capitalize(country) //`, ${capitalize(country)}`
    return countrycity
}
const catchphrasereturn = function(phrase){
    return `\"${phrase}\"`
}


people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]
console.log(getSummary(people_info[0]));