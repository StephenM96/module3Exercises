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

