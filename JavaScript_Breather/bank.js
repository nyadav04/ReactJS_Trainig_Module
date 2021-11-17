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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

///functions
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}
    </div>
    <div class="movements__value">${mov}</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html )
  });
};

//displayMovements(account1.movements)

//calculate and display balance in our app
const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;

};
//calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov,0)
  labelSumIn.textContent = `${incomes}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov,0)
  labelSumOut.textContent = `${Math.abs(out)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr)
      return int >=1
    })
    .reduce((acc, int) => acc + int,0);
  labelSumInterest.textContent = `${interest}`;
}

//calcDisplaySummary(account1.movements)

 
///Create UserName

//Practice - Hardcoded value
// const user = 'Steven Thomas Williams'; //stw
// const username = user
// .toLowerCase()
// .split(' ')
// .map(function (name) {
//   return name[0];
// }).join('');

const user = 'Steven Thomas Williams'; //stw
const username = user
 .toLowerCase()
 .split(' ')
 .map(name => name[0]).join('');


//Dynamic value taken from array of object in our application
// const createUsernames = function (user) {
//   const username = user.toLowerCase()
//     .split(' ')
//     .map(name => name[0]).join('');
//     return username;
// };

const createUsernames = function (accs) {
  console.log(accs);
  accs.forEach(function (acc) {
    console.log(acc);
    acc.username = acc.owner.toLowerCase()
    .split(' ')
    .map(name => name[0]).join('');
    
  });
};
createUsernames(accounts);
//console.log(accounts);
//console.log(username)

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc)
}


///implementing login
//event handler
let currentAccount;
btnLogin.addEventListener('click', function(e){
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI & message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount)
  }
})

btnTransfer.addEventListener('click', function (e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value);
    //console.log(amount,recieverAcc )
    
    if (
      amount > 0 &&
      recieverAcc &&
      currentAccount.balance >= amount &&
      recieverAcc.username !== currentAccount.username
    ) {
      //doing the transfer
      currentAccount.movements.push(-amount)
      recieverAcc.movements.push(amount)

      updateUI(currentAccount)
      //console.log('Transfer Valid')
    }

    inputTransferAmount.value = inputTransferTo.value = '';
  })

btnLoan.addEventListener('click', function (e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount >0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    //Add movement
    currentAccount.movements.push(amount);
    //update UI
    updateUI(currentAccount)
  }
})

btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.
    username &&
    Number(inputClosePin.value) === currentAccount.pin){
      const index = accounts.findIndex(
        acc => acc.username === currentAccount.username
      );
      console.log(index)
      //.indexOf(23)
      //Delete an account
        accounts.splice(index, 1)
        //hide UI
        containerApp.style.opacity = 0;
    }
})



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

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

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

//console.log(movements)
//console.log(movementsUSD)

const movementsUSDfor = []
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
//console.log(movementsUSDfor)

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

//console.log(movemenDescription)

const deposits = movements.filter(function (mov) {
    return mov > 0;
})
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.
push(mov)
console.log(depositsFor)

const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawls)

//accumulator
// const balance = movements.reduce(function (acc, cur, i, arr) {
//     console.log(`Iteration ${i}: ${acc}`)
//     return acc + cur
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur, 0)
console.log(balance)
let balanceFor = 0;
for (const mov of movements) balanceFor += mov;
console.log(balanceFor)

//Max value
const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
}, movements[0])
console.log(max)

///Chaining map, filter and reduce methods
// const totalDepositUSD = movements
// .filter(mov => mov > 0)
// .map(mov => mov * eurToUsd)
// .reduce((acc, mov) => acc + mov,0)
// console.log(totalDepositUSD)


///find method
// const firstWithDrawal = movements.find(mov => mov < 0)

// console.log(firstWithDrawal)

// const account = accounts.find(acc => acc.owner === 'Akshay Kumar')
// console.log(account)

// some and every
console.log(movements)
//equality
console.log(movements.includes(-130))
//Some: Condition
console.log(movements.some(mov => mov === -130))
const anyDeposits = movements.some(mov => mov >1500);
console.log(anyDeposits)

//Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

///looking separate methods | separate callbacks
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

///flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrNew = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrNew.flat(2));

//flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
// console.log(accounts.map(acc => acc.movements).flat())

//flatMap
const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);