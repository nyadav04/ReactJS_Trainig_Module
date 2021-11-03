// Coding challenge - Nov 01, 2021
const paragraph = document.querySelector('p');

function checkDogs(array1, array2) {
  // Filter out first and last two lions from array1/ Aman's dogs
  const newArray1 = array1.slice(1, 3);

  const combinedArray = [...newArray1, ...array2];

  combinedArray.forEach((element) => {
    if (element >= 3) {
      paragraph.innerText += `Dog with age ${element} is an adult dog.\n`;
    } else {
      paragraph.innerText += `Dog with age ${element} is a puppy.\n`;
    }
  });
}

// Age of dogs
const amansDogs = [3, 4, 8, 9, 1];
const deepanshusDogs = [1, 6, 3, 7, 3];

checkDogs(amansDogs, deepanshusDogs);
