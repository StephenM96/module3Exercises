//Number 1...
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

//Number 2...
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

//Number 3...
//if (0) console.log('#1 zero is true') //QUESTION has no value passed through?
//if ("0") console.log('#2 zero is true')
//if (null) console.log('null is true') //QUESTION Same as above?
//if (-1) console.log('negative is true')
//if (1) console.log('positive is true')

//Number 4...
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

//Number 5... NOT SURE WHAT TO DO HERE...
//function getGreeting(name) {
//return 'Hello ' + name + '!';
//}
//console.log(getGreeting)

//Number 6...
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

//Number 7... //Added return this commands
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

//Number 8...
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

//Number 9... //changed let on original variables to const so they won't be changed
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


//Number 10... //not sure how to do classes? Nvm... Got it. Can't figure out the canDrive method though...
//class Person {
	//constructor(name, age) {
    	//this.name = name;
    	//this.age = age;
    	//this.human = true;
        //canDrive() {
			//if(person.age >= 16) {
    		//return 'This human can drive.'
            //}
         //else return 'This human can\'t drive.';
			//}
      //}
	//}
//}

//const stephen = new Person('Stephen', 27);
//console.log(stephen)

//const david = new Person('David', 28);
//console.log(david)

//Extension: If you have time, try the JS Challenge Rush at
//https://www.jschallenger.com/games/rush