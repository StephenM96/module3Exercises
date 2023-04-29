// //Number 1...
// // Create a function that takes a string as a parameter and returns the string with the first
// // character of each word changed into a capital letter, as in the example below. Test it with
// // different strings.

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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Number 2...
// // Create a function truncate(str, max) that truncates a given string of text if its total
// // length is greater than the max length. It should return either the truncated text, with an
// // ellipsis (...) added to the end if it was too long, or the original text otherwise.
// // b) Write another variant of the truncate function that uses a conditional operator.

//function truncate(str, max) {
	//if(str.length <= max) {
    	//return str;
        //}
        //return str.slice(0, max-3) + '...';
        //}
        
  //console.log(truncate('This text will be truncated if it is too long', 5))
  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 3... 
// // Use the following animals array for the below tasks. Test each one by printing the result to
// // the console. Review the following link for tips:

// // https://developer.mozilla.org/en-
// // US/docs/Web/JavaScript/Reference/Global_Objects/Array

// // a) Add 2 new values to the end
// // b) Add 2 new values to the beginning
// // c) Sort the values alphabetically
// // d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// // middle of the animals array with newValue
// // e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// // containing all the animals that begin with the beginsWith string. Try to make it work
// // regardless of upper/lower case.

// const animals = ['Tiger', 'Giraffe']
// // console.log(animals)
// animals.push ('Elephant', 'Lion', "Aardvark"); //adds 2 animals to the end
// // console.log(animals)
// animals.unshift ('Whales', 'Alligator'); //adds 2 animals to the beginning
// // console.log(animals)
// const animalsSorted = animals.sort() //alphabetizes the array
// // console.log(animalsSorted)
// // console.log(animalsSorted.length /2)
// // console.log(animalsSorted.splice(2,1))

// function replaceMiddleAnimal(newAnimals) {
//   let index = Math.floor(animalsSorted.length /2) //converts the middle of the array to the index value
//   // console.log(newAnimals)
//   animalsSorted[index] = newAnimals //changes middle array value to "Zebra"
//   // console.log(animalsSorted)
// } ;

// replaceMiddleAnimal("TurtleEagle") //calls function and replaces array item with parameter passed in function
// console.log(animalsSorted)

// replaceMiddleAnimal("Chimera") //same as above
// console.log(animalsSorted)
// console.log(animalsSorted)

// const newAnimals = animals.splice() //returns chosen array items in a new array
// want to replace values in new array from splice and then concat them together with animals array // took care of this

// let titles = products.map(product => product.title)
// let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
// let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )
// console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
// console.log(h2titles) // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>Denim
// Jeans</h2>', '<h2>Ladies Tee</h2>' ]
// console.log(raisedPrices) // all prices increased by $5

// function findMatchingAnimals(beginsWith) {
//   // let firstLetter = animalsSorted.filter(item => beginsWith.toLowerCase()===item[0].toLowerCase()) //looking to filter through array items to check first letter in each element
//   let firstLetter = animalsSorted.filter(item => beginsWith.toLowerCase()===item[0].toLowerCase())
//   return firstLetter
//   // console.log(firstLetter)
// //will need to convert to lower case
// };

// console.log(findMatchingAnimals("t"))
// // console.log(animalsSorted)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 4...
// // Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// // 'margin-left' into camel-cased 'marginLeft'.
// // The function should remove all dashes, and uppercase the first letter of each word after a
// // dash.
// // b) Create variants of the camelCase function that use different types of for loops, and
// // c) with and without the conditional operator.


// let cssProperties = ["text-decoration", "margin-left", 'font-size', "border"] //created an array to modify
// // console.log(cssProperties[0].split("-")) //converts an array item to string and splits at hyphen

// let camelCaseProperties = cssProperties.map(camelCase); //called camelCase function and mapped it in an array

// // console.log(cssProperties.map(item => {
// //   console.log(item) 
// //   return item
// // }))
// // let titles = products.map(product => product.title) //for example use

// function camelCase(cssProp) {
//   //sort through  CSS properties and split them if they have dashes.
//   let words = cssProp.split('-')


//   //upper case the first letter of each word after immediately after a dash
//   for (let i = 1; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//   }
//   return words.join('')
// }

// // camelCase(cssProperties)
// // console.log(cssProperties.length)

// // camelCase(cssProperties)
// // console.log(cssProperties)

// console.log(camelCaseProperties) //call function

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // //Number 5
// // Decimal number operations in JavaScript can lead to unexpected results, as in the
// // following:

// let twentyCents = 0.20
// let tenCents = 0.10
// // // console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // // // 0.2 + 0.1 = 0.30000000000000004

// // // We can sometimes avoid this using the toFixed function to force the number of decimal
// // // places as below, but it’s not always useful:

// let fixedTwenty = twentyCents.toFixed(2);
// // console.log(fixedTwenty)

// let fixedTen = tenCents.toFixed(2);
// // console.log(typeof fixedTen)
// // console.log(fixedTwenty + fixedTen) //why is this not working?

// let float1 = tenCents
// // console.log(float1)
// let float2 = twentyCents
// // console.log(float2)

// // // Explain why the above code returns the wrong answer
// // // b) Create a function currencyAddition(float1, float2) which safely adds the two
// // // decimal numbers float1 and float2 and returns the correct float result.
// function currencyAddition (float1, float2) {
//   sum = float1 + float2

//   return sum.toFixed(2)
// }

// // console.log( '$', currencyAddition(float1, float2))

// // // c) Create a function currencyOperation(float1, float2, operation) which
// // // safely performs the given operation (either +, -, / or *) on the two numbers and returns 
// // // the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// function currencyOperation(float1, float2, operation) {
//   let result = 0;
//   switch (operation) {
//     case "+":
//       console.log(`${float1} + ${float2}`)
//       result = float1 + float2 //changed from return because added result = 0 to line 185
//       break;
//     case "+":
//       console.log(`${float1} - ${float2}`)
//       result = float1 - float2
//       break;
//     case "+":
//       console.log(`${float1} / ${float2}`)
//       result= float1 / float2
//       break;
//     case "+":
//       console.log(`${float1} * ${float2}`)
//       result = float1 * float2
//       break;
  
//     default:
//       break;
//   }
//   return result
// }
// // console.log(currencyOperation(0.50, 0.6, '+'))


// // // d) (Extension) Extend the above function to include a fourth argument numDecimals
// // // which allows the operation to support different amounts of decimal places from 1 to 10.
// // // HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. 

// function currencyOperation2(float1, float2, operation, numDecimals) {
//   let result = 0;
//   switch (operation) {
//     case "+":
//       console.log(`${float1} + ${float2}`)
//       result = float1 + float2 //changed from return because added result = 0 to line 185
//       break;
//     case "-":
//       console.log(`${float1} - ${float2}`)
//       result = float1 - float2
//       break;
//     case "/":
//       console.log(`${float1} / ${float2}`)
//       result= float1 / float2
//       break;
//     case "*":
//       console.log(`${float1} * ${float2}`)
//       result = float1 * float2
//       break;
  
//     default:
//       break;
//   }
//   return result.toFixed(numDecimals)
// }
// // console.log(currencyOperation2(0.50, 0.6, '+', 5))


// // //Test with different values as well as the below:
// console.log(0.3 === currencyAddition(0.1, 0.2)) // true
// console.log(0.3 === currencyOperation2(0.1, 0.2, '+', 2)) // true


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 6...
// // Create a function unique(duplicatesArray) which takes an array parameter that may
// // include duplicates. Your function should return an array containing only the unique values
// // from duplicatesArray.
// // Test with the following arrays and create another one of your own.
// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

// function unique(duplicatesArray) {
//   let wordChecker = new Set(duplicatesArray)
//   return wordChecker

// }

// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 7
// // Use the following array of book objects to practice the array functions for map, find and
// // filter. Test each of your answers to the below tasks.

// const books = [
// { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
// { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
// { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
// { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
// { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
// ];
// // console.log(books)
// // const title = books.filter(prod => prod.title).map(prod => prod.title)
// // console.log(title)

// // // a) Write a function getBookTitle(bookId) that uses the find function to return the
// // // title of the book object with the matching id.
// function getBookTitle(bookID) { 
//   // let findTitle = books.filter(prod => prod.title).map(prod => prod.title) //not necessary
//   let findTitle = books.find(book => bookID===book.id) //reads through the array items and locates the item's ID compared against the parameter passed through in the function (bookID)
//   // console.log(findTitle)
//   return findTitle.title
// }

// // console.log(getBookTitle(3))

// // // b) Write a function getOldBooks() that uses the filter function to return all book
// // // objects written before 1950.
// function getOldBooks(writtenDate) {
//   let bookYears = books.filter(year => year.year < writtenDate) //Looks through array and filters all the books that were written before 1950
//   return bookYears
// }
// // console.log(getOldBooks(1950))

// // // c) Write a function addGenre() that uses the map function to add a new genre property
// // // to all of the above books, with the value ‘classic’.
// function addGenre(key, value) { //modified past the prompt to add the ability to directly enter in the key:value pairs in the array by calling the function later and passing my parameters through 
//   let bookGenre = books.map((element) => { //mapped array to a new array
//     element.Genre= "Classic"; //defined a new key:value pair
//     const newElement = { //copied array below
//       ...element, 
//       [key]: value, //can pass through parameter to modify new array
//     }
//     return newElement
//   });
//   // console.log(bookGenre)
//   return bookGenre
// }
// // console.log(addGenre("Year Author Died", "Yesterday"))


// // // d) (Extension) Write a function getTitles(authorInitial) that uses map and
// // // filter together to return an array of book titles for books written by authors whose
// // // names start with authorInitial.
// function getTitles(authorInitial) {
//   // let authInit = books.filter(element => element.author[0] === authorInitial).map(element => element.title) //alternative way to get the array items that doesn't use the .find method
//   let authInit = books.find(element => element.author[0] === authorInitial)
//   // console.log(authInit)
//   return authInit.title
// }

// // console.log(getTitles("H"))

// // // e) (Extension) Write a function latestBook() that uses find and forEach to get the
// // // book with the most recent publication date.

// function latestBook() {
//   let latest = books[0];
//   books.forEach(book => {
//       if (book.year > latest.year) {
//           latest = book;
//       }
//   });
//   return latest;
// }

// console.log(latestBook())


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Number 8...
