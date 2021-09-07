/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages =[30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
// console.log(john, mary, joe); // 30 26 27

let [john, mary, joe] = ages;
console.log(john, mary, joe); //30 26 27

// Destructuring objects
let jobs ={
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia); //designer developer accountant

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary); //english french

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary); //spanish german

let languages2 ={
    firstLang: "english", 
    secondLang: "french", 
    thirdLang: "german", 
    fourthLang: "japanese",
};

let {firstLang, thirdLang} = languages2;
console.log(firstLang, thirdLang); //english german

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite); //apple
console.log(secondFavourite); //orange
console.log(others); //['banana', 'peach', 'cherry']

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetables",
    andrea: "steak",
};

let {brian, anna, ...rest} = favouriteFoods;
console.log(brian); //pizza
console.log(anna); //pasta
console.log(rest); // { sarah: 'vegetables', andrea: 'steak' }