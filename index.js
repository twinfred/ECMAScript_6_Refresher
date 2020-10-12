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

let books = new Set();
books.add('Pride and Prejudice');
books.add('War and Peace').add('Oliver Twist');

console.log(books);
console.log(books.size);

books.delete('Oliver Twist');
books.forEach(function(item) {
  console.log(item);
})

console.log('has Oliver Twist', books.has('Oliver Twist'));