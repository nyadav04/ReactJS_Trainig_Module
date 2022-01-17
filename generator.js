async function* fetchUsers() {

  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  yield await response.json();

}


const it = fetchUsers();


it.next().then(({ value, done }) => {

  console.log(value);

});
