// // //Number 1...
// // // makeCounter below is a decorator function which creates and returns a function that
// // // increments a counter.
// function makeCounter(startFrom = 0, incrementBy = 1) { //added startFrom and incrementBy to parameters
//     let currentCount = startFrom;
//     return function() {
//     currentCount += incrementBy;
//     console.log(currentCount)
//     return currentCount;
//     };

//     }
//     let counter1 = makeCounter();
//     counter1(); // 1
//     counter1(); // 2

// // // a) Create a second counter counter2 using the makeCounter function and test to see if
// // // it remains independent to counter1
// let counter2 = makeCounter()
// counter2()

// // // b) Modify makeCounter so that it takes an argument startFrom specifying where the
// // // counter starts from (instead of always starting from 0)
// counter2()



// // // c) Modify makeCounter to take another argument incrementBy, which specifies how
// // // much each call to counter() should increase the counter value by.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 2...
// // The following delayMsg function is intended to be used to delay printing a message until
// // some time has passed.

// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

// // a) What order will the four tests below print in? Why? //It will print #3, #4, #2, then #1. Because it will read #3 first before reaching #4 even though #3 and #4 are slightly different..... 
//I was wrong... #4, #3, #2, then #1
// // b) Rewrite delayMsg as an arrow function
// const delayMsg = (msg) => {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

// // // c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// // setTimeout(delayMsg, 10000, '#5: Delayed by 10000ms')

// // // d) Use clearTimeout to prevent the fifth test from printing at all.
// let longDelay = setTimeout(delayMsg, 10000, '#5: Delayed by 10000ms') //set it as a variable so i can modify it
// clearTimeout(longDelay)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Number 3...
// // 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// // similar requests until there's a brief pause, then only executing the most recent of those
// // requests. See https://www.techtarget.com/whatis/definition/debouncing
// // It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// // requests being initiated if a user clicks repeatedly on a button.
// // Using the following code to test and start with:

// function printMe() {
//     console.log('printing debounced message')
//     }
    // printMe = debounce(printMe); //create this debounce function for a)
    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
    // 1000ms of no calls
    // setTimeout( printMe, 100);
    // setTimeout( printMe, 200);
    // setTimeout( printMe, 300);

// // a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// // suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// // pause, the most recent call to func should be executed and any others ignored.

// function debounce(func) {
//     let delayPrint 
//     return function(){
//         clearTimeout(delayPrint)
//         delayPrint = setTimeout(func, 1000)
//     }
// }
// printMe = debounce(printMe)
// console.log(debounce(printMe))
// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);

// // b) Extend the debounce decorator function to take a second argument ms, which defines the
// // length of the period of inactivity instead of hardcoding to 1000ms

// function debounce(func, ms) {
//     let delayPrint 
//     return function(){
//         clearTimeout(delayPrint)
//         delayPrint = setTimeout(func, ms)
//     }
// }
// printMe = debounce(printMe, 1000)
// console.log(debounce(printMe))
// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);

// // c) Extend debounce to allow the original debounced function printMe to take an argument
// // msg which is included in the console.log statement.

// function printMe(msg) {
//     console.log(msg)
//     }

// function debounce(func, ms) {
//     let delayPrint 
//     return function(msg){
//         clearTimeout(delayPrint)
//         delayPrint = setTimeout(func, ms, msg)
//     }
// }
// printMe = debounce(printMe, 1000)

// setTimeout(printMe, 100,'printing debounced message');
// setTimeout(printMe, 200,'printing debounced message');
// setTimeout(printMe, 300,'printing debounced message');


////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Number 4...


// // The Fibonacci sequence of numbers is a famous pattern where the next number in the
// // sequence is the sum of the previous 2.
// // e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.


// // a) Write a function printFibonacci() using setInterval that outputs a number in
// // the Fibonacci sequence every second.

// function printFibonacci() {
//     let n1 = 0, n2 = 1, nextTerm; //Set variables in order to later add them together when I call function
//     console.log(n1); //console log the first number
//     console.log(n2); //console log the second number
//     let interval = setInterval(() => {
//       nextTerm = n1 + n2; //added first and second number together
//       n1 = n2; //now n1=n2
//       n2 = nextTerm; //now n2 = nextTerm so I can incrementally add indefinitely
//       console.log(nextTerm);
//     }, 1000);
// }

// printFibonacci()

// // b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// // calls to do the same thing

// function printFibonacciTimeouts(n1 = 0, n2 = 1) {
//     if (n1 === 0 && n2 === 1) {
//       console.log(n1);
//       console.log(n2);
//     }
//     setTimeout(() => {
//       const nextTerm = n1 + n2;
//       console.log(nextTerm);
//       printFibonacciTimeouts(n2, nextTerm);
//     }, 1000);
//   }
  
//   printFibonacciTimeouts();


// // c) Extend one of the above functions to accept a limit argument, which tells it how many
// // numbers to print before stopping.

// function printFibonacciTimeoutsLimit(limit, n1 = 0, n2 = 1, count = 2) {
//     if (limit <= 0) return;
//     if (n1 === 0 && n2 === 1) {
//       console.log(n1);
//       console.log(n2);
//     }
//     if (count >= limit) return;
  
//     setTimeout(() => {
//       const nextTerm = n1 + n2;
//       console.log(nextTerm);
//       printFibonacciTimeoutsLimit(limit, n2, nextTerm, count + 1);
//     }, 1000);
//   }
  
//   printFibonacciTimeoutsLimit(10); //limited to 10 cycles before timing out


////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Number 5...

// // The following car object has several properties and a method which uses them to print a
// // description. When calling the function normally this works as expected, but using it from
// // within setTimeout fails. Why?

// let car = {
// make: "Porsche",
// model: '911',
// year: 1964,
// description() {

// console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
// }
// };
// car.description(); //works
// // setTimeout(car.description, 200); //fails //It fails due to the description method being a local function of car. You can't call it globally without binding 
// //it or defining it outside of car

// // // a) Fix the setTimeout call by wrapping the call to car.description() inside a
// // // function
// // setTimeout(() => car.description(), 200); //bound further down in d)


// // // b) Change the year for the car by creating a clone of the original and overriding it

// let cloneCar = {...car};
// cloneCar.year = 1990;

// // // c) Does the delayed description() call use the original values or the new values from
// // // b)? Why? 
// //The delayed description() will use the original values from the car object, not the new values from the cloneCar. 
// //because the setTimeout is using the description() method of the first car object and it's still referring to the original object's properties.



// // // d) Use bind to fix the description method so that it can be called from within
// // // setTimeout without a wrapper function
// setTimeout(car.description.bind(car), 200);



// // // e) Change another property of the car by creating a clone and overriding it, and test that
// // // setTimeout still uses the bound value from d)

// let cloneCar2 = {...car};
// cloneCar2.make = "Ferrari";

////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Number 6...

// // Use the Function prototype to add a new delay(ms) function to all functions, which can
// // be used to delay the call to that function by ms milliseconds.

// function multiply(a, b) {
// console.log( a * b );
// }
// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// Function.prototype.delay = function(ms) {
//     const originalFunction = this;
//     return function(a, b) {
//       setTimeout(() => originalFunction(a, b), ms);
//     };
//   };

// // a) Use the example multiply function below to test it with, as above, and assume that all
// // delayed functions will take two parameters
//Not sure what is being asked here? The function seems to work at this stage, so I suppose that's well enough to move onto b)


// // b) Use apply to improve your solution so that delayed functions can take any number of
// // parameters

// Function.prototype.delay = function(ms) {
//     const originalFunction = this;
//     return function(...args) {
//       setTimeout(() => originalFunction.apply(this, args), ms);
//     };
//   };


// // // c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// // // delay prototype function still works.

// function multiply(a, b, c, d) {
//     console.log(a * b * c * d);
//   }
  
//   multiply.delay(500)(2, 2, 2, 2); // prints 16 after 500 milliseconds


////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Number 7...

// // In JavaScript, the toString method is used to convert an object to a string representation.
// // By default, when an object is converted to a String, it returns a string that looks something
// // like [object Object].
// // However, we can define our own toString methods for custom objects to provide a more
// // meaningful string representation.

// // a) Define a custom toString method for the Person object that will format and print
// // their details

// // function Person(name, age, gender) {
// //     this.name = name;
// //     this.age = age;
// //     this.gender = gender;
// //   }
  
// //   Person.prototype.toString = function() {
// //     return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
// //   };

// // b) Test your method by creating 2 different people using the below constructor function
// // and printing them

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     }
    
// const person1 = new Person('James Brown', 73, 'male')

// const person2 = new Person('Jane Smith', 28, 'female');

// console.log('person1: ' + person1); // prints "person1: Name: James Brown, Age: 73, Gender: male"
// console.log('person2: ' + person2); // prints "person2: Name: Jane Smith, Age: 28, Gender: female"

// // c) Create a new constructor function Student that uses call to inherit from Person and
// // add an extra property cohort

// // function Student(name, age, gender, cohort) {
// //     Person.call(this, name, age, gender);
// //     this.cohort = cohort;
// //   }
  
// //   Student.prototype = Object.create(Person.prototype);
// //   Student.prototype.constructor = Student;

// // d) Add a custom toString for Student objects that formats and prints their details. Test
// // with 2 students.

// // Student.prototype.toString = function() {
// //     return `${Person.prototype.toString.call(this)}, Cohort: ${this.cohort}`;
// //   };
  
// //   const student1 = new Student('Alice Johnson', 22, 'female', '2023A');
// //   const student2 = new Student('Bob Wilson', 24, 'male', '2022B');
  
// //   console.log('student1: ' + student1); // prints "student1: Name: Alice Johnson, Age: 22, Gender: female, Cohort: 2023A"
// //   console.log('student2: ' + student2); // prints "student2: Name: Bob Wilson, Age: 24, Gender: male, Cohort: 2022B"

////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Number 7...

// // The following DigitalClock class uses an interval to print the time every second once
// // started, until stopped.
// class DigitalClock {
//     constructor(prefix) {
//         this.prefix = prefix;
//     }

//     display() {
//         let date = new Date();
//         //create 3 variables in one go using array destructuring
//         let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
// date.getSeconds()];

//         if (hours < 10) hours = '0' + hours;
//         if (mins < 10) mins = '0' + mins;
//         if (secs < 10) secs = '0' + secs;

//         console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//     }

//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), 1000);
//     }
// }

// const myClock = new DigitalClock('my clock:')
// myClock.start()

// // // a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// // // parameter precision – the number of ms between 'ticks'. This precision parameter
// // // should default to 1 second if not supplied.

// class PrecisionClock extends DigitalClock {
//     constructor(prefix, precision = 1000) {
//       super(prefix);
//       this.precision = precision;
//     }
  
//     start() {
//       this.display();
//       this.timer = setInterval(() => this.display(), this.precision);
//     }
//   }
  
//   const preciseClock = new PrecisionClock('Precise clock:', 500);
//   preciseClock.start();
//   setTimeout(() => preciseClock.stop(), 5000);

// // // b) Create a new class AlarmClock that inherits from DigitalClock and adds the
// // // parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
// // // should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// // // default to 07:00 if not supplied.

// class AlarmClock extends DigitalClock {
//     constructor(prefix, wakeupTime = '07:00') {
//       super(prefix);
//       this.wakeupTime = wakeupTime;
//     }
  
//     display() {
//       let date = new Date();
//       let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  
//       if (hours < 10) hours = '0' + hours;
//       if (mins < 10) mins = '0' + mins;
//       if (secs < 10) secs = '0' + secs;
  
//       let currentTime = `${hours}:${mins}`;
  
//       if (currentTime === this.wakeupTime) {
//         console.log('Wake Up!'); //prints wake up time and stops ticking once the time has been reached
//         this.stop();
//       } else {
//         console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//       }
//     }
//   }
  
//   const alarmClock = new AlarmClock('Alarm clock:', '07:00');
//   alarmClock.start();

// // We can delay execution of a function using setTimeout, where we need to provide both
// // the callback function and the delay after which it should execute.
// function randomDelay() {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 20 + 1) * 1000; // random delay between 1 and 20 seconds
    
//         // b) If the random delay is even, resolve the promise, and if the random number is odd, reject it
//         if (delay % 2 === 0) {
//           setTimeout(() => resolve(delay), delay);
//         } else {
//           setTimeout(() => reject(delay), delay);
//         }
//       });
// }

// // randomDelay().then(() => console.log('There appears to have been a delay.'));

// // // a) Create a promise-based alternative randomDelay() that delays execution for a
// // // random amount of time (between 1 and 20 seconds) and returns a promise we can use
// // // via .then(), as in the starter code below

// //See above code..


// // // b) If the random delay is even, consider this a successful delay and resolve the promise,
// // // and if the random number is odd, consider this a failure and reject it,
// //See above code...


// // // c) Update the testing code to catch rejected promises and print a different message,
// randomDelay()
//   .then(delay => {

//     console.log(`There appears to have been a successful delay of ${delay} ms.`);
//   })
//   .catch(delay => {
  
//     console.log(`There appears to have been a failed delay of ${delay} ms.`);
//   });

// // d) Try to update the then and catch messages to include the random delay value

//See above code in c)


////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Number 10...

// // Fetch is a browser-based function to send a request and receive a response from a server,
// // which uses promises to handle the asynchronous response.
// // The below fetchURLData uses fetch to check the response for a successful status
// // code, and returns a promise containing the JSON sent by the remote server if successful
// // or an error if it failed. (To run this code in a node.js environment, follow the instructions in
// // the comments before the function.)

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
// import fetch from 'node-fetch'
// globalThis.fetch = fetch

// function fetchURLData(url) {
//     let fetchPromise = fetch(url).then(response => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error(`Request failed with status ${response.status}`);
//         }
//     });

//     return fetchPromise;
// }

// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));


// // a) Write a new version of this function using async/await

// async function fetchURLDataAsync(url) {
//     try {
//       const response = await fetch(url);
  
//       if (response.status === 200) {
//         return await response.json();
//       } else {
//         throw new Error(`Request failed with status ${response.status}`);
//       }
//     } catch (error) {
//       throw error;
//     }
//   }

//   fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));

// // b) Test both functions with valid and invalid URLs

// // Valid URL
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
//   .then(data => console.log(data))
//   .catch(error => console.error(error.message));

// fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1')
//   .then(data => console.log(data))
//   .catch(error => console.error(error.message));

// // Invalid URL
// fetchURLData('https://jsonplaceholder.typicode.com/todos/invalid')
//   .then(data => console.log(data))
//   .catch(error => console.error(error.message));

// fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/invalid')
//   .then(data => console.log(data))
//   .catch(error => console.error(error.message));



// // c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// // using Promise.all to combine the results.

// async function fetchMultipleURLDataAsync(urls) { //new function for all URLs at once
//     try {
//       const fetchPromises = urls.map(url => fetchURLDataAsync(url)); //places them in a map to check against sequentially
//       const results = await Promise.all(fetchPromises); //combines the results using promise.all
//       return results;
//     } catch (error) {
//       throw error;
//     }
//   }
  
//   const urls = [
//     'https://jsonplaceholder.typicode.com/todos/1',
//     'https://jsonplaceholder.typicode.com/todos/2',
//     'https://jsonplaceholder.typicode.com/todos/3'
//   ];
  
//   fetchMultipleURLDataAsync(urls)
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));
