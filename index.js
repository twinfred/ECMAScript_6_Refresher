// Let

// var div;
// var box = document.getElementById('box');

// for (let i = 0; i < 5; i++) {
//     div = document.createElement('div');
//     div.onclick = function() {
//         alert('This is box # ' + (i + 1));
//     }
//     box.appendChild(div);
// }


// Template Strings

// function print(firstName) {
//     console.log(`Hello ${firstName}`);
// }

// print('Tim');

// function createEmail(firstName, price) {
//     let shipping = 5.95;
//     console.log(`Hi ${firstName}! Thanks!
//         Total: $${price}
//         Shipping: $${shipping}
//         Grand Total: $${price + shipping}
//     `);
// }

// createEmail('Johnny', 100);


// Searching Strings

// const planet = 'Earth';
// console.log(planet.startsWith('Ear'));
// console.log(planet.endsWith('thy'));
// console.log(planet.includes('h'));
// console.log(planet.search('art'));


// Symbols

// const id = Symbol();

// const courseInfo = {
//   title: 'JavaScript',
//   topics: ['strings', 'arrays', 'objects'],
//   id: 'js-course',
// };

// courseInfo[id] = 41284;
// console.log(courseInfo); 


// Maps

// let course = new Map();

// course.set('react', { description: 'UI' });
// course.set('jest', { description: 'testing' });

// console.log(course);
// console.log(course.react);
// console.log(course.get('react'));

// let details = new Map([
//   [new Date(), 'today'],
//   [2, {javascript: ['js', 'node', 'react']}],
//   ['items', [1, 2]],
// ]);

// console.log(details);
// console.log(details.size);

// details.forEach(function (item) {
//   console.log(item);
// });



// Sets

// let books = new Set();
// books.add('Pride and Prejudice');
// books.add('War and Peace').add('Oliver Twist');

// console.log(books);
// console.log(books.size);

// books.delete('Oliver Twist');
// books.forEach(function(item) {
//   console.log(item);
// })

// console.log('has Oliver Twist', books.has('Oliver Twist'));



// Spread Operator

// let cats = ['Biscuit', 'Henry', 'Margaret'];
// let dogs = ['Noodle', 'Jojo', 'Shadow'];
// let animals = ['Bamboo', 'Hector', 'Alphabet', ...cats, ...dogs];

// console.log(animals);



// Destructuring Arrays

// let [first, second, third, fourth, fifth] = ['Chicago', 'Boston', 'San Jose', 'Portland', 'Seattle'];
// console.log(first);
// console.log(third);



// Arrary Includes

// let cities = ['Chicago', 'Boston', 'San Jose', 'Portland', 'Seattle'];

// console.log(cities.includes('Seattle'));
// console.log(cities.includes('Los Angeles'));



// Object Literals Enhancement

// function pokemon(name, gender) {
//   return {
//     name,
//     gender,
//     sayName: function() {
//       console.log(`${name}, ${name}!!`);
//     }
//   }
// }

// let Pikachu = pokemon('Pikachu', 'male');
// console.log(Pikachu.gender);



// Objects with Spread Operator

// const daytime = {
//   breakfast: 'oatmeal',
//   lunch: 'sandwich',
// }

// const nighttime = 'steak';

// const meals = {
//   ...daytime,
//   nighttime,
// };

// console.log(meals);



// Destructuring Objects

// const { name, price, description, ingredients } = {
//   name: 'Turkey',
//   price: 6.5,
//   description: 'Turkey on white bread',
//   ingredients: [
//     'bread',
//     'oven-baked turkey',
//     'mustard',
//     'mayo',
//     'cheese',
//     'lettuce',
//   ],
// };

// console.log(name);
// console.log(description);

// const hamSandwich = {
//   name: 'Ham',
//   price: 6.5,
//   description: 'A delcious ham sandwich on white bread',
//   ingredients: [
//     'bread',
//     'honey-baked ham',
//     'mustard',
//     'mayo',
//     'cheese',
//     'lettuce',
//   ],
// };

// function promotion({ name, description }) {
//   return `Try the ${name} sandwich! ${description}!`;
// }

// console.log(promotion(hamSandwich));



// For / Of

for (let letter of 'Timothy') {
  console.log(letter);
}

let fruits = ['banana', 'apple', 'cherry'];

for (let fruit of fruits) {
  console.log(fruit);
}

let sandwiches = new Map();

sandwiches.set('turkey', 'A delcious turkey sandwich on white bread');
sandwiches.set('ham', 'A delcious ham sandwich on wheat bread');
sandwiches.set('chicken', 'A delcious chicken sandwich on whole grain bread');

for (let sandwich of sandwiches) {
  console.log(sandwich);
}

for (let sandwich of sandwiches.keys()) {
  console.log(sandwich);
}

for (let sandwich of sandwiches.values()) {
  console.log(sandwich);
}

for (let sandwich of sandwiches.entries()) {
  console.log(sandwich);
}