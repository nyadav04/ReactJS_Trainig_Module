async function* getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  yield await response.json();
}
const data = getData();

data.next().then(({ value, done }) => {
  console.log(value);
});
