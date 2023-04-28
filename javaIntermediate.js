//Number 1...
//function ucFirstLetters(str) {
  //if (typeof str !== 'string') { //checks if the object is a string
    //return ''; //returns a blank value if it is not a string
  //}

  //return str //else, run this code
    //.toLowerCase() //changes all letters to lower case
    //.split(' ') //splits string into words
    //.map(word => word.charAt(0).toUpperCase() + word.slice(1)) //finds the first letter of each word and then changes it to upper case
    //.join(' '); //joins the words back together
//}

//console.log(ucFirstLetters("los angeles")); // Los Angeles

//Number 2...
//function truncate(str, max) {
	//if(str.length <= max) {
    	//return str;
        //}
        //return str.slice(0, max-3) + '...';
        //}
        
  //console.log(truncate('This tex will be truncated if it is too long', 5))
  
//Number 3... //Did not finish...
const animals = ['Tiger', 'Giraffe']
console.log(animals)
// animals.push ('Elephant', 'Lion');
// console.log(animals)
// animals.unshift ('Whales', 'Tigers');
// console.log(animals)

function replaceMiddleAnimal(newValue) {
	animals.array[1] = 'Porpoise'
    }
    console.log(animals)