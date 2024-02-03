console.log('działa!')

// 1 czesc
const name = '1';

// 2 czesc
let value = 1;
value = 0;

// tablice

// deklaracja tablicy
const tab = ['bob', 'alice', 'jerry'];

// metody tablicowe które nam modyfikuja tablice
// tab.push('teddy');
// tab.pop();
// tab.shift();

// metody tablicowe - pętle
// nie zwraca nam nic - iteruje po elementach bez modyfikacji
console.log('forEach')
tab.forEach((item) => {
  console.log(item)
})
// zwraca nam tablice elementów - które można modyfikowac
const newTab = tab.map(item => {
  return item + '123';
})
console.log('map', newTab)
// filtruje nam elementy tablicy na bazie warunku () => warunek
const newFilteredTab = tab.filter((item) => item.length >= 4)
console.log('filter', newFilteredTab)


// funkcja o nazwie getItem(() => {})