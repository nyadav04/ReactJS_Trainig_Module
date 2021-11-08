///Challenge
/* Aman and Deepanshu did some survey related to dog's data. Each of them asked 5 dog owners about their age, and stored the info in an array
Create a function 'checkDogs', which accepts 2 arrays of dogs(Aman's array and Deepanshu's array), we need to perform the following things:
1. Aman found out that thwe owner of the first and the last two dogs actually have lions, nit dogs. So we need to create a shallow copy of Aman's array
and remove the lion data from the copied array.
2. Create an array with both aman's corrected array and deepnashu's original array
3. We eed to print that whether a dog is puppy or an adult
Test Cases: Aman's array [3, 4, 8,9,1] and deepamshu [1, 6, 3, 7, 3]
*/

function checkDogs(arr1,arr2){
	const corrected_arr = [...arr1]
	corrected_arr.splice(0,1)
	corrected_arr.splice(-2)
	corrected_arr.concat(arr2).forEach((item,idx)=>{
		(item<3) ? console.log(`Dog-${idx+1} is a Puppy`) : console.log(`Dog-${idx+1} is an Adult Dog`)
	})
}

checkDogs([3, 4, 8,9,1],[1, 6, 3, 7, 3])

