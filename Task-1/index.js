///Challenge
/* Aman and Deepanshu did some survey related to dog's data. Each of them asked 5 dog owners about their age, and stored the info in an array

Create a function 'checkDogs', which accepts 2 arrays of dogs(Aman's array and Deepanshu's array), we need to perform the following things:

1. Aman found out that thwe owner of the first and the last two dogs actually have lions, nit dogs. So we need to create a shallow copy of Aman's array
and remove the lion data from the copied array.

2. Create an array with both aman's corrected array and deepnashu's original array

3. We eed to print that whether a dog is puppy or an adult

Test Cases: Aman's array [3, 4, 8,9,1] and deepamshu [1, 6, 3, 7, 3]

*/

let array1=[3, 4, 8,9,1];
let array2=[1, 6, 3, 7, 3];

function checkDogs(arr1,arr2){

    let newArr1=[...arr1];

   newArr1.shift();
    newArr1.pop();
    newArr1.pop();

    console.log(newArr1);

    let combinedArray=newArr1.concat(arr2);
    console.log(combinedArray);

    for(let [i,age] of combinedArray.entries()){
        if(age>=3){
        console.log(`Dog ${i+1} whose age is ${age} is an Adult`);
        }
        else{
        console.log(`Dog ${i+1} whose age is ${age} is Puppy`);

        }
    }

}

checkDogs(array1,array2);
