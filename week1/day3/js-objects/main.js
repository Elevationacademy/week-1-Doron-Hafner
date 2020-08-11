/*--------------------exercise1--------------------
p1 = {
    name: "doron" ,
    age: 25 ,
    city: "pardes-hana" 
}
p2 = {
    name: "mark" ,
    age: 25 ,
    city: "haifa" 
}
if (p1.age==p2.age) {
    if (p1.city==p2.city) {
        console.log("Jill wanted to date Robert");
    } else {
        console.log("Jill wanted to date Robert, but cant");
    }
} 




//--------------------exercise2--------------------
let myList = [{
    cash: 1,
    creditCard: 'visa',
}, {
    bottle: 'water',
    noteBook: 5,
}]
console.log(myList);
myList[0].cash=1000
console.log(myList);
myList.splice(1)
console.log(myList);




//--------------------exercise3--------------------
 let newList = [{
     cloth: 'shirt',
     shoes: 'nike',
 }, {
     os: 'windows',
     plang: 'java',
 }]
 myList.push(newList[0], newList[1])
//  myList.push(...newList)
 // spread operator
 console.log(myList);
 



//--------------------exercise4--------------------
let library = {
    books: [{
        title: '',
        author: '',
    },
    ]
}
myList.push(...library.books)
console.log(myList);
*/
