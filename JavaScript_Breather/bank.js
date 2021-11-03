'use strict'

///Bankist App
const account1 = {
    owner: 'Akshay Kumar',
    movements: [200, 450, -400, 3000,, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};

const account2 = {
    owner: 'Tiger Shroff',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
}

const account3 = {
    owner: 'Rajkumar Rao',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
}

const account4 = {
    owner: 'Shahid Kapoor',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
}

const accounts = [account1, account2, account3, account4];

///Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login_btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.form__input--user');
const inputLoginPin = document.querySelector('.form__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loanamount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin= document.querySelector('.form__input--pin');

////displaying transactions in app

const displayMovements = function (movements) {

    movements.forEach(function (mov, i){
        const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html = `
        <div class="movement__row">
        <div class="movement__type movement__type--${type}">${i + 1} ${type}
        </div>
        <div class="movement__value">${mov}</div>
    </div>   
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html)
    })
}

displayMovements(account1.movements)


//Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];

// ///slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// ///splice
// console.log(arr.splice(2));
// console.log(arr);

// ///reverse
// const arr2 = ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse())
// console.log(arr2);

//concat
// const alphabets = arr.concat(arr2);
// console.log(alphabets);

// ///join
// console.log(alphabets.join(' - '));

///looping arrays - forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

for (const movement of movements) {
    if (movement > 0) {
        console.log(`You credited ${movement}`)
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
}

console.log(`------forEach-----`)

movements.forEach(function (movement){
    if (movement > 0) {
        console.log(`You credited ${movement}`)
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
})

///with the indexes as well

console.log(`------with Indexes------`)
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You credited ${movement}`)
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
    }
}


console.log(`----forEach with indexes----`)

movements.forEach(function (movement, i, arr){
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You credited ${movement}`)
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
    }
})

///forEach with Maps
const currency = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'EURO'],
    ['GBP', 'Sterling Pond']
])

currency.forEach(function(value, key, map){
    console.log(`${key}: ${value}`)
})


///forEach with Set
const uniqueCurrency = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
uniqueCurrency.forEach(function(value, _, map){
    console.log(`${_}: ${value}`)
})

///Challenge
/* Aman and Deepanshu did some survey related to dog's data. Each of them asked 5 dog owners about their age, and stored the info in an array

Create a function 'checkDogs', which accepts 2 arrays of dogs(Aman's array and Deepanshu's array), we need to perform the following things:

1. Aman found out that thwe owner of the first and the last two dogs actually have lions, not dogs. So we need to create a shallow copy of Aman's array
and remove the lion data from the copied array.

2. Create an array with both aman's corrected array and deepnashu's original array

3. We need to print that whether a dog is puppy or an adult

Test Cases: Aman's array [3, 4, 8,9,1] and deepamshu [1, 6, 3, 7, 3]

*/

// const checkDogs = function (dogsAman, dogsDeep) {
//     const dogsAmanCorrected = dogsAman.slice();
//     dogsAmanCorrected.splice(0, 1);
//     dogsAmanCorrected.splice(-2);
//     //console.log(dogsAmanCorrected)
//     const dogs = dogsAmanCorrected.concat(dogsDeep)
//     console.log(dogs)

//     dogs.forEach(function (dog, i){
//         if (dog >=3 ){
//             console.log(`Dog number ${i + 1} is an adult, and is a ${dog} years old`)
//         } else {
//             console.log(`Dog number ${i + 1} is still a puppy`)
//         }
//     })
// }

// checkDogs([3, 4, 8,9,1], [1, 6, 3, 7, 3])

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
    return mov * eurToUsd;
})

console.log(movements)
console.log(movementsUSD)

const movementsUSDfor = []
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor)

// const movemenDescription = movements.map((mov, i, arr) => {
//     if(mov > 0){
//         return `Movement ${i + 1}: You deposited ${mov}`
//     } else {
//         return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`
//     }
// })

const movemenDescription = movements.map((mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
)

console.log(movemenDescription)