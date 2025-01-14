/* JavaScript Total Recall */
/*
 * I. Variables & Datatypes
 * - A. Q + A
 * - B. Strings
 * - C. Boolean
 * - D. The Farm
 * - E. Driver's Ed
 */

/******************** Q + A *********************/
// 1. How do we assign a value to a variable?
let aVar = "this string";

// 2. How do we change the value of a variable?
aVar = "a different string";

// 3. How do we assign an existing variable to a new variable?
let aNewVar = aVar;

// 4. Remind me, what are declare, assign, and define?
// declare -  to create a variable
// assign - to give a variable a value
// define - creating a function with name, params, body, creating an object with properties

// 5. What is pseudocoding and why should you do it?
// pseudocoding is writing out the logic it plan english and can be used to help map out the logic of a problem in a more human readable format

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 80% thinking, 20% coding

/******************* Strings ********************/
// 1. Create a variable called firstVariable
// 2. Assign it the value of the string "Hello World"
let firstVariable = "Hello World";

// 3. Change the value of this variable to some number
firstVariable = 8;

// 4. Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;

// 5. Change the value of secondVariable to any string.
secondVariable = "any string";

// 6. What is the value of firstVariable?
// firstVariable === 8
console.log(firstVariable);

// 7. Create a variable called yourName and set it equal to your name as a string. 
//    Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName = "Elizabeth";
let introduction = ("Hello, my name is " + yourName + ".");
console.log(introduction);

/******************* Booleans *******************/
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

/******************* The Farm *******************/
// 1. Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";

// 2. Write code that will print out "mooooo" if the it is equal to cow
// 3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
if(animal==="cow"){
    console.log("mooooo");
}else{
    console.log("Hey! You're not a cow.");
};

// 4. Commit

/*                  Driver's Ed                   */
// 1. Make a variable that holds a person's age; be semantic
let age = 22;
// 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, 
//    or, if the age is younger than 16, a message should print "Sorry, you're too young."
if(age >= 16){
    console.log("Here are the keys!");
}else{
    console.log("Sorry, you're too young.");
};


/*
 * II. Loops
 * - A. The Basics
 * - B. Get Even
 * - C. Give me Five
 * - D. Savings Account
 */

/****************** The Basics ******************/
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i = 1; i <= 10; i++){
    console.log(i);
};

// 2. Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 10; i <= 400; i++){
    console.log(i); // commented out intentionally because it clogs up the console log
};

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
let count = 0;
for(let i = 12; i <= 4000; i++){
    count++;
    if(count === 3){
        console.log(i); // commented out intentionally because it clogs up the console log
        count = 0;
    };
};

/******************* Get Even *******************/
// 1. Print out the numbers that are within the range of 1 - 100
for(let i = 1; i <= 100; i++){
    console.log(i); // commented out intentionally because it clogs up the console log
}
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for(let i = 1; i <= 100; i++){
    if(i%2===0){
        console.log(i + " <-- is an even number");
    }else{
        console.log(i);
    };
}

/***************** Give Me Five *****************/
// 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
//    Example Output:
//    I found a 5. High five!
//    I found a 10. High five!
for(let i = 0; i <=100; i++){
    if(i%5 === 0 && i != 0){
        console.log("I found a " + i + ". High five!");
    };
};
// 1. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
//    Example Output:
//    I found a 3. Three is a crowd
//    I found a 5. High five!
//    I found a 6. Three is a crowd
//    I found a 9. Three is a crowd
//    I found a 10. High five!
// 1. For numbers divisible by both three and five, be sure your code prints both messages
for(let i = 0; i <=100; i++){
    if(i%5 === 0 && i != 0){
        console.log("I found a " + i + ". High five!");
    };
    if(i%3 === 0 && i != 0){
        console.log("I found a " + i + ". Three is a crowd");
    };
};

/**************** Savings Account ***************/
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//    Check your work! Your bank_account should have $55 in it.
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum += i;
};
console.log(sum);
// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//    Check your work! Your bank_account should have $10,100 in it.
sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
};
sum = sum*2;
console.log(sum);

/*
 * III. Arrays & Control flow
 * - A. Talk About It
 * - B. Easy Does It
 * - C. Accessing Elements
 * - D. Change Values
 * - E. Mix It Up
 * - F. Biggie Smalls
 * - G. Monkey in the Middle
 * - H. What's in Your Closet?
 */

/***************** Talk About It ****************/
// 1. What are the things in an array called?
// elements
// 2. Do Arrays guarantee those things will be in order?
// no
// 3. What real-life thing could you model with an array?
// a drawer of shirts, a line of people, a group of items collected together in one place

/***************** Easy Does It *****************/
// 1. Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["good new everyone", "bite my shiny metal a**", "shut up and take my money"];

/************** Accessing Elements **************/
// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true];
// 1. How do you access the 1st element in the array?
// randomThings[0]
console.log(randomThings[0]);

// 2. Change the value of "Hello" to "World"
randomThings[2] = "World";
console.log(randomThings[2]);

// 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

/*                   Change Values                  */
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// 1. What would you write to access the 3rd element of the array?
// ourClass[2]
console.log(ourClass[2]);

// 2. Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass[4]);

// 3. Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

/******************* Mix It Up ******************/
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20];
// 1. Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
myArray.push("Rhaenyra");
// 2. Remove the 5 from the beginning of the array.
myArray.splice(0,1);

// 3. Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");

// 4. Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

// 5. Reverse this array using Array.prototype.reverse().
console.log(myArray.reverse());
//    Did you mutate the array? 
// yes
//    What does mutate mean? 
// it means to change the original array
//    Did the .reverse()method return anything?
// it returns a reference to the array

/***************** Biggie Smalls ****************/
// Create a variable that contains an integer.
let intVar = 13;
// Write an if ... elsestatement that:
// 1. console.log()s "little number" if the number is entered is less than 100
// 2. console.log()s big number if the number is greater than or equal to 100.
if(intVar >= 100){
    console.log("BIG NUMBER");
}else{
    console.log("little number");
};

/************* Monkey in the Middle *************/
// Write an if ... else if ... else statement:
// 1. console.log()little number if the number entered is less than 5.
// 2. If the number entered is more than 10, log big number.
// 3. Otherwise, log "monkey".
if(intVar < 5){
    console.log("little number");
}else if(intVar > 10){
    console.log("BIG NUMBER");
}else{
    console.log("monkey");
};

/************ What's in Your Closet? ************/
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// 2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0]);
// 5. In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][1]);
// 6. Access one item from Thom's accessories array.
console.log(thomsCloset[2][2]);
// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}!`);
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

/*
 * IV. Functions
 * - A. printGreeting
 * - B. printCool
 * - C. calculateCube
 * - D. isVowel
 * - E. getTwoLengths
 * - F. getMultipleLengths
 * - G. maxOfThree
 * - H. printLongestWord
 */

/***************** printGreeting ****************/
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
function printGreeting(name){
    return "Hello there, " + name + "!";
}
console.log(printGreeting("Slimer"));

/******************* printCool ******************/
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";
function printCool(name){
    return name + " is cool";
}
console.log(printCool("Captain Reynolds"));

/***************** calculateCube ****************/
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125
function calculateCube(n){
    // volume = l x w x d, for a cube l = w = d ==> l x l x l
    return n*n*n;
}
console.log(calculateCube(5));

/******************** isVowel *******************/
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
// console.log(isVowel("a"));
// => true
function isVowel(c){
    let isAVowel = false;
    c = c.toLowerCase();
    if(c === "a" || c === "e" || c === "i" || c === "o" || c === "u"){
        isAVowel = true;
    }else if(c === "y"){
        return "sometimes y"
    };
    return isAVowel;
}
console.log(isVowel("a"));

/***************** getTwoLengths ****************/
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]
function getTwoLengths(s1, s2){
    let a = [s1.length, s2.length];
    return a;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

/*************** getMultipleLengths *************/
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]
function getMultipleLengths(a){
    let arr = [];
    for(let i = 0; i < a.length; i++){
        //arr[i] = a[i].length;
        arr.push(a[i].length);
    };
    return arr;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

/****************** maxOfThree ******************/
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
// console.log(maxOfThree(6, 9, 1));
// => 9
// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
function maxOfThree(n1, n2, n3){
    if(n1 >= n2 && n1 >= n3){
        return n1;
    }else if(n2 >= n3){
        return n2;
    }else{
        return n3;
    };
}
console.log(maxOfThree(6, 9, 1));

/**************** printLongestWord **************/
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
function printLongestWord(a){
    let longest = a[0];
    for(let i = 1; i < a.length; i++){
        if(longest.length < a[i].length){
            longest = a[i];
        };
    };
    return longest;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


/*
 * V. Objects
 * - A. Make a User Object
 * - B. Update the User
 * - C. Adding Keys and Values
 * - D. Shopaholic!
 * - E. Object-within-object
 * - F. Loops
 * - G. Functions Can Operate on Objects
 */

/************** Make a User Object **************/
// 1. Create an object called user.
// 2. Write in to the object the key-value pairs for name, email, age, and purchased. 
//    Set the value of purchased to an empty array []. 
//    Set the other values to whatever you would like.
let user = {
    name: "Real Name",
    email: "someemail@server.com",
    age: 88,
    purchased: []
};

/**************** Update the User ***************/
// 1. Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "anewemail@server.com";

// 2. Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
user.age++;

/************* Adding Keys and Values ***********/
// You have decided to add your user's location to the data that you want to collect.
// 1. Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "some-or-other location";

/****************** Shopaholic! *****************/
// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates");
// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind");
// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino jodhpurs");
// 4. Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);

/************* Object-within-object *************/
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friend with a name and age, we could write:
/*
user.friend = {
    name: "Grace Hopper",
    age: 85
}*/
// When we console.log user, we would see the friend object added to our user object.
// 1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "some-or-other location",
    purchased: []
};
// 2. Console.log just the friend's name
console.log(user.friend.name);
// 3. Console.log just the friend's location
console.log(user.friend.location);
// 4. CHANGE the friend's age to 55
user.friend.age = 55;
// 5. The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The One Ring");
// 6. The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchased array.
user.friend.purchased.push("A latte");
// 7. Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1]);

/********************* Loops ********************/
// 1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for(let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i]);
};
// 2. Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for(let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
};

/******* Functions Can Operate on Objects *******/
// 1. Write a single function updateUser that takes no parameters. When the function is run, it should:
// 2. increment the user's age by 1
// 3. make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
function updateUser(){
    // increment age
    user.age++;
    // capitilize name
    user.name = user.name.toUpperCase();
    console.log(user);
}
updateUser();

// 1. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
function oldAndLoud(o){
    // increment age
    o.age++;
    // capitilize name
    o.name = o.name.toUpperCase();

    return o;
}
console.log(oldAndLoud(user));

/*
 * VI. Cat Combinator
 * - 1. Mama Cat
 * - 2. Papa Cat
 * - 3. Combine Cats
 * - 4. Cat Brain Bender
 */

/******************* Mama Cat *******************/
// - Define an object called cat1 that contains the following properties:
//   - name
//   - breed
//   - age (a number)
// - console.log the cat's age
// - console.log the cat's breed
let cat1 = {
    name: "Jam",
    age: 45,
    breed: "Siamese"
};
console.log(cat1.age);
console.log(cat1.breed);

/******************* Papa Cat *******************/
// - Define an object called cat2 that contains the following properties:
//   - name
//   - breed
//   - age (a number)
let cat2 = {
    name: "Joe",
    age: 19,
    breed: "Mog"
};

/***************** Combine Cats *****************/
// The cats are multiplying!
// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// - Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
// Example:
// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }
// { name: "Jam", age: 45, breed: "Siamese" }
// This is to demonstrate that functions can take objects as arguments
// You could also invoke the combineCats function by writing the objects straight into the parentheses:
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
// - Make it so the combineCats function will return a combination of the two incoming cats
//   - The result should be an object wherein the
//   - name is a concatenation of the parents' names
//   - the age is 1
//   - the breed is each of the parents' breeds with a hyphen in between
// Example:
// console.log(combineCats(cat1, cat2));
// Result:
// {name: 'JoeJam', age: 1, breed: 'Mog-Siamese'}
// This is to demonstrate that a function can return an object
function combineCats(mama, papa){
    let cat = {};
    
    cat.name = papa.name + mama.name;
    cat.age = 1;
    cat.breed = papa.breed + "-" + mama.breed;
    
    //console.log("CURRENT CAT: ");
    //console.log(cat);
    return cat;
}
//combineCats(cat1, cat2);
console.log(combineCats(cat1, cat2));
//console.log(combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" }));

/*************** Cat Brain Bender ***************/
// If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:
// catCombinator can use itself as its own argument.
// Take a second to stew on that . . .
// What is the result of:
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .
//combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2));
//console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// The above console.log is two levels deep of combineCats.

// - Write a console.log that is three levels deep of combineCats. 
//   combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
// Your output should look something like:
/*
   {name: 'JoeJamJoeJamJoeJamJoeJam',
   age: 1,
   breed: 'Mog-Siamese-Mog-Siamese-Mog-Siamese-Mog-Siamese'}
*/
//combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
console.log(
    combineCats(
        combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), 
        combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
    )
);