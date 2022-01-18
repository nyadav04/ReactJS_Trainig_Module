//Explanation of closure
// function foo() {
//     var b = 1;
//     function inner(){
//         return b;
//     }
//     return inner;
// }
// var get_func_inner = foo();
// console.log(get_func_inner());
// console.log(get_func_inner());
// console.log(get_func_inner());
//Explanation: At line number 9 we are done with the execution 
//of function foo() and the entire body of function inner() is returned and stored in var get_func_inner, due to the line 7 return inner. 
// [The return statement does not execute the inner function – function is executed only when followed by (), but rather the return 
//statement returns the reference to the function as a function in JavaScript is also an object.]


// We can access the variable b which is defined in function foo() through function inner() as the later preserves the scope 
//chain of enclosing function at the time of execution of enclosing function i.e. the inner function knows the value of b through 
//it’s scope chain. 
// This is closure in action that is inner function can have access to the outer function variables as well as all the global variables. 


//In order to see the variable and function bound within closure we can write as:  

// As we can see the variables within the closure in the scope section.

// Definition of Closure: 

// In programming languages, closures (also lexical closures or function closures) are techniques for implementing lexically 
// scoped name binding in languages with first-class functions. Operationally, 
// a closure is a record storing a function[a] together with an environment:[1] 
// a mapping associating each free variable of the function (variables that are used locally, but defined in an enclosing scope) 
// with the value or reference to which the name was bound when the closure was created.[b]

// In other words, closure is created when a child function keep the environment of the parent scope even after the parent 
// function has already executed 


// function foo(outer_arg) {
//     function inner(inner_arg) {
//         return outer_arg + inner_arg;
//     }
//     return inner;
// }
// var get_func_inner = foo(5);

// console.log(get_func_inner(4));
// console.log(get_func_inner(3));


// Explanation: In the above example we used a parameter function rather than a default one. 
// Note even when we are done with the execution of foo(5) we can access the outer_arg variable from the inner function. 
// And on execution of inner function produce the summation of outer_arg and inner_arg as desired. 


// //closure within a loop
// function outer() {
//     var arr = [];
//     var i;
//     for(i = 0; i < 4; i++){
//         arr[i] = function(){
//             return i;
//         }
//     }
//     return arr;
// }

// var get_arr = outer();

// console.log(get_arr[0]());
// console.log(get_arr[1]());
// console.log(get_arr[2]());
// console.log(get_arr[3]());

// Explanation: Did you guess the right answer? In the above code we have created four closure which point to the variable i which is 
// local variable to the function outer. Closure don’t remember the value of the variable it only points to the variable or 
// stores the reference of the variable and hence, returns the current value. In the above code when we try to update the value of it 
// gets reflected to all because the closure stores the reference. 

///correct implimentation of the above example

// function outer() {
//     function create_closure(val) {
//         return function(){
//             return val;
//         }
//     }
//     var arr = [];
//     var i;
//     for (i = 0; i < 4; i++){
//         arr[i] = create_closure(i);
//     }
//     return arr;
// }

// var get_arr = outer();
// console.log(get_arr[0]());
// console.log(get_arr[1]());
// console.log(get_arr[2]());
// console.log(get_arr[3]());

//Promises

// Explanation: In the above code we are updating the argument of the function create_Closure with every call. 
// Hence, we get different values of i at different index.

//Promises
// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous 
// operations where callbacks can create callback hell leading to unmanageable code. 

// Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code. 
// Multiple callback functions would create callback hell that leads to unmanageable code. Also it is not easy for any user to handle 
// multiple callbacks at the same time.
// Events were not good at handling asynchronous operations.

// Promises are the ideal choice for handling asynchronous operations in the simplest manner. They can handle multiple asynchronous 
// operations easily and provide better error handling than callbacks and events. In other words also, we may say that, promises are the 
// ideal choice for handling multiple callbacks at the same time, thus avoiding the undesired callback hell situation. Promises do 
// provide a better chance to a user to read the code in a more effective and efficient manner especially it that particular code 
// is used for implementing multiple asynchronous operations. 

// Benefits of Promises 
// Improves Code Readability
// Better handling of asynchronous operations
// Better flow of control definition in asynchronous logic
// Better Error Handling
// A Promise has four states: 
// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e. not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected
// A promise can be created using Promise constructor.
// Syntax:
// var prom = new Promise(function(resolve, reject){
//     //.....
// })

// Parameters 
// Promise constructor takes only one argument which is a callback function (and that callback function is also referred as 
//     anonymous function too).
// Callback function takes two arguments, resolve and reject
// Perform operations inside the callback function and if everything went well then call resolve.
// If desired operations do not go well then call reject.
// Example:

// var promise = new Promise(function(resolve, reject){
//     const x = "we are learning promises";
//     const y = "we are learning promises";
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise.
//     then(function(){
//         console.log("Success, you got it");
//     }).catch(function(){
//         console.log("oops, you didn't get it");
//     });


// Promise Consumers
// Promises can be consumed by registering functions using .then and .catch methods.

// 1. then() 
// then() is invoked when a promise is either resolved or rejected. It may also be defined as a career which takes data from promise 
// and further executes it successfully.

// Parameters: 
// then() method takes two functions as parameters. 

// First function is executed if promise is resolved and a result is received.
// Second function is executed if promise is rejected and an error is received. (It is optional and there is a better way to handle error 
//     using .catch() method
// Syntax:

// .then(function(result){
//         //handle success
//     }, function(error){
//         //handle error
//     })


//Example: promise resolved

var promise = new Promise(function(resolve, reject){
    resolve('it is resolved');
})

promise.
    then(function(successMessage){
        console.log(successMessage);
    },function(errorMessage){
        console.log(errorMessage);
    })
    
//Example: rejected
var promise = new Promise(function(resolve, reject){
    resolve('it is rejected');
})

promise.
    then(function(successMessage){
        console.log(successMessage);
    },function(errorMessage){
        console.log(errorMessage);
    })

    //Examples: Promise Rejected
    var promise = new Promise(function(resolve, reject) {
        reject('Promise Rejected')
    })
    
    promise
        .then(function(successMessage) {
            console.log(successMessage);
        }, function(errorMessage) {
        //error handler function is invoked
            console.log(errorMessage);
        })

        
// 2. catch() 

// catch() is invoked when a promise is either rejected or some error has occurred in execution. It is used as an Error Handler 
//whenever at any step there is a chance of getting an error.

// Parameters: 
// catch() method takes one function as parameter. 

// Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler), i.e. .catch() is 
//just a shorthand for .then(null, errorHandler) )
// Syntax:

// .catch(function(error){
//         //handle error
//     })
// Examples: Promise Rejected

var promise = new Promise(function(resolve, reject) {
	reject('Promise Rejected')
})

promise
	.then(function(successMessage) {
		console.log(successMessage);
	})
	.catch(function(errorMessage) {
	//error handler function is invoked
		console.log(errorMessage);
	});

//    Examples: Promise Rejected

var promise = new Promise(function(resolve, reject) {
	throw new Error('Some error has occurred')
})

promise
	.then(function(successMessage) {
		console.log(successMessage);
	})
	.catch(function(errorMessage) {
	//error handler function is invoked
		console.log(errorMessage);
	});

//     Applications 

// Promises are used for asynchronous handling of events.
// Promises are used to handle asynchronous http requests.