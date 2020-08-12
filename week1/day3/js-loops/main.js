/*--------------------exercise1--------------------
let names = ['yoram', 'ohad', 'yarin', 'sarit']
let ages = [20, 30, 40, 50]
for (let i = 0; i < names.length; i++) {
    console.log(names[i]+' is '+ages[i]+ 'old');
}
*/


/*--------------------exercise2--------------------
let arr = [2, 3, 5, 7, 3]
let sum = 0
for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
}
console.log(sum);
*/


/*--------------------exercise3--------------------
let arr = [2, 3, 5, 7, 3]
let sum = 0
for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
}
let mean = sum/arr.length
console.log(mean);
*/


/*--------------------exercise4--------------------
let nums = []
let num = 1
for (let index = 0; index < 100; index++) {
    nums[index]=num;
    num ++
}       
console.log(nums);
*/


/*--------------------exercise5--------------------
let nums = []
let num = 1
for (let index = 0; index < 100; index++) {
    nums[index]=num;
    num ++
}       
for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element%2>0) {
        console.log(element);
    }

}
*/


/*--------------------exercise6--------------------
let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
let num = nums.indexOf(709)
console.log(num);
*/


/*--------------------exercise7--------------------
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for (let index = 0; index < names.length; index++) {
    const age = names[index];
    const name = ages [index]
    people.push({'name': name, 'age': age})
    
}
console.log(people);
*/


/*--------------------exercise8--------------------
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const age = ages [index]
    people.push({'name': name, 'age': age})
    
} console.log(people);
for (let index = 0; index < people.length; index++) {
    console.log(people[index].name + ' is ' + people[index].age + ' years old');
}
*/

//--------------------exercise9--------------------
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
for (let index = 0; index < posts.length; index++) {
    if (posts.indexOf(posts[index].id)=2) {
        posts.splice(index, 1)
    }
}  
