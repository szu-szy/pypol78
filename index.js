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

//--obiekty
const person = {
  firstName: 'bob',
  lastName: 'bob',
  "second-name": 'alice',
}

// I sposob na odczyt danych z obiektu
console.log(person.firstName)
// II sposób na odczyt danych z obiektu
console.log(person["second-name"])

console.log(person.lastName)

// - przypisanie nowej wartosci
// jezeli znalazlo
person.firstName = 'new bob'; // zmiana wartosci firstName na 'new bob'

// jezeli nie znalazlo
person.age = 10 // do obiektu person doda nam wlasciwosc age = 10
person["car"] = 'golf' // do obiektu person doda nam wlasciwosc car = 'golf'

//-- destrukturyzacja

// destrukturyzacja obiektu

const {firstName, lastName} = person;

console.log(firstName, lastName)

// destrukturyzacja tablicowa
// const tab = ['bob', 'alice', 'jerry'];

const [,, item3, item4] = tab;

// console(item3) -> jerry
// console(item4) -> undefined