// //Number 1...
// // What are the results of these expressions? (answer first, then use console.log() to check)

//console.log("" + 1 + 0) //gives 10
//console.log("" - 1 + 0) //gives -1
//console.log(true + false) //QUESTION gives nothing (undefined/null/nothing?)
//console.log(!true) //gives nothing
//console.log(6 / "3") //QUESTION gives 2 whether the 3 is a string or not?
//console.log("2" * "3") //converts to string
//console.log(4 + 5 + "px") //adds 4 & 5 and then concatenates with "px" string value
//console.log("$" + 4 + 5) //concatenates string value "$" and also concatenates 4 & 5 by converting them to string to equal $45
//console.log("4" - 2) //converts "4" string to an integer
//console.log("4px" - 2) //Non-addressable Number/Not a Number/NaN
//console.log(" -9 " + 5) //treats "-9" as a string and puts a space around it and then concatenates w/ 5
//console.log(" -9 " - 5) //treats both as integers
//console.log(null + 1) //adds 1 to null value
//console.log(undefined + 1) //NaN
//console.log(undefined == null) //QUESTION undefined does not have a value which means it is null (thought null was "nothing"?)
//console.log(undefined === null) //QUESTION null is not the same thing as undefined, although it is the same value??
//console.log(" \t \n" - 2) //line breaks and new text would not affect the integer value


///////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 2...
// // What are the results of these expressions? (answer first, then use console.log() to check)

//let three = "3"
//console.log(three)
//let four = "4"
//console.log(four)
//let thirty = "30"
//console.log(thirty)

//what is the value of the following expressions?
//let addition = three + four
//console.log(addition) //QUESTION gives 34 because three and four = the string values of "3" and "4"?
//let multiplication = three * four
//console.log(multiplication) //converts to integers and gives 12
//let division = three / four
//console.log(division) //converts to integers and gives 0.75 float-point value
//let subtraction = three - four
//console.log(subtraction) //prediction = -1. I was right!
//let lessThan1 = three < four
//console.log(lessThan1) //boolean and gives true
//let lessThan2 = thirty > four
//console.log(lessThan2) //QUESTION not sure why this gives true???


///////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 3...
// // Which of the following console.log messages will print? Why?

//if (0) console.log('#1 zero is true') //QUESTION has no value passed through?
//if ("0") console.log('#2 zero is true')
//if (null) console.log('null is true') //QUESTION Same as above?
//if (-1) console.log('negative is true')
//if (1) console.log('positive is true')


///////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 4...
// // Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
// // and b. What does the ‘+=’ do?

//let a = 2, b = 3;
//let result = `${a} + ${b} is `;

//example If/else code
//if (a + b < 10) {
//result += 'less than 10';
//} else {
//result += 'greater than 10';
//}

//my ternary code
//a + b < 10 ? result += 'less than 10' : result += 'greater than 10' 


//console.log(result) // Got it!!!


///////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 5... 
// // Rewrite the following function using: a) function expression syntax, and b) arrow function
// // syntax. Test each version to make sure they work the same.

// function getGreeting(name) {
// return 'Hello ' + name + '!';
// }

// const getGreeting2 = function(name) {
// 	return 'Hi ' + name + '!';
// }

// console.log(getGreeting("Stephen"))
// console.log(getGreeting2("Stephen"))


///////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 6...
// // a) Complete the inigo object by adding a lastName property and including it in the
// // greeting.
// // b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// // prints his famous catch phrase to the console. HINT: see
// // https://www.imdb.com/title/tt0093779/characters/nm0001597.
// // c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

//const westley = {
//name: 'Westley',
//numFingers: 6
//}

//const rugen = {
//name: 'Count Rugen',
//numFingers: 6
//}

//const inigo = {
	//firstName: 'Inigo',
	//greeting(person) {
		//let greeting = `Hello ${person.name}, my name is ${this.firstName}.`;
		//console.log(greeting + this.getCatchPhrase(person));
		//},
	//getCatchPhrase(person) {
		//if(person.numFingers >= 6) {
    		//return 'You killed my father. Prepare to die.'
            //}
         //else return 'Nice to meet you.';
			//} //MISSED A CLOSING BRACKET HERE!!!! SPENT AN HOUR FIXING THIS!!!
    //}

//inigo.greeting(westley)
//inigo.greeting(rugen)


///////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 7... //Added return this commands
// // The following object represents a basketball game and keeps track of the score as the
// // game progresses.
// // a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// // the example code works
// // b) Add a new method to print the full time final score
// // c) Add a new object property to keep track of the number of fouls and a method to
// // increment it, similar but separate to the score. Include the foul count in the half time and
// // full time console messages
// // d) Test your object by chaining all the method calls together in different combinations.

//const basketballGame = {
	//score: 0,
	//freeThrow() {
		//this.score++;
        //return this
	//},
    
	//basket() {
    	//this.score += 2;
        //return this
    //},

	//threePointer() {
    	//this.score += 3;
        //return this
    //},
    
	//halfTime() {
    //console.log('Halftime score is '+this.score);
    //return this
    //}
//}

//modify each of the above object methods to enable function chaining as below:
//basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();


///////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 8...
// // The object below represents a single city.
// // a) Write a function that takes an object as an argument and uses a for...in loop to access
// // and print to the console each of those object properties and their values. Test it using
// // the sydney object below.
// // b) Create a new object for a different city with different properties and call your function
// // again with the new object.


//const sydney = {
	//name: 'Sydney',
	//population: 5121000,
	//state: 'NSW',
	//founded: '26 January 1788',
	//timezone: 'Australia/Sydney'
//}

//for (const property in sydney) {
	//console.log(`${property}: ${sydney[property]}`);
//}

//const lafayette = {
	//name: 'Lafayette',
	//population: 121000,
	//state: 'LA',
	//founded: '1821 as Vermillionville',
	//timezone: 'UTC-6 (CST)'
//}

//for (const property in sydney) {
	//console.log(`${property}: ${sydney[property]}`);
//}

//for (const property in lafayette) {
	//console.log(`${property}: ${lafayette[property]}`);
//}


///////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 9... //changed let on original variables to const so they won't be changed
// // Use the following variables to understand how JavaScript stores objects by reference.
// // a) Create a new moreSports variable equal to teamSports and add some new sport
// // values to it (using push and unshift)
// // b) Create a new dog2 variable equal to dog1 and give it a new value
// // c) Create a new cat2 variable equal to cat1 and change its name property
// // d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// // changed? Why?
// // e) Change the way the moreSports and cat2 variables are created to ensure the
// // originals remain independent

//const teamSports = ['Hockey', 'Cricket', 'Volleyball'];
//const dog1 = 'Bingo';
//const cat1 = {name: 'Fluffy', breed: 'Siberian'};

//let moreSports = teamSports

//console.log(moreSports)
//moreSports.push('Baseball', 'Softball')
//console.log(moreSports)
///moreSports.unshift('Baseball', 'Softball')
//console.log(moreSports)

//let dog2 = dog1
//console.log(dog2)
//dog2.push('Spot') //QUESTION push and unshift not a function??
//console.log(dog2)

//let cat2 = cat1
//console.log(cat2)
//cat2['name'] = 'Sprinkles';
    
//console.log(cat2)

//console.log(teamSports)
//console.log(dog1)
//console.log(cat1)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 10... //not sure how to do classes? Nvm... Got it. Can't figure out the canDrive method though...
// // The following constructor function creates a new Person object with the given name and
// // age values.
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.human = true;
// 	this.canDrive = function() {
// 		if(this.age >= 16) {
// 		return 'This human can drive.'
// 		}
// 	 else return 'This human can\'t drive.';
// 		}
// 	}

// // // a) Create a new person using the constructor function and store it in a variable
// const stephen = new Person('Stephen', 27);
// // console.log(stephen)


// // // b) Create a second person using different name and age values and store it in a separate
// // // variable
// const david = new Person('David', 28);
// // console.log(david)

// // // c) Print out the properties of each person object to the console
// console.log(stephen)
// console.log(david)

// // // d) Rewrite the constructor function as a class called PersonClass and use it to create a
// // // third person using different name and age values. Print it to the console as well.
// class PersonClass {
// 	constructor (name, age){
// 		this.name = name;
// 		this.age = age;
// 		this.human = true;
// 	}
// 	canDrive() {
// 		if(this.age >= 16) {
// 		return 'This human can drive.'
// 		}
// 	 else return 'This human can\'t drive.';
// 		}
// }
// const daniel = new PersonClass ('Daniel', 15)
// // console.log(daniel)

// console.log(stephen.canDrive())

// // e) Add a canDrive method to both the constructor function and the class that returns true
// // if the person is old enough to drive.




// //Extension: If you have time, try the JS Challenge Rush at
// //https://www.jschallenger.com/games/rush