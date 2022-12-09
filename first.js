'use strict';

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// ----------------------------

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(
//     `Число більше за ${threshold}: ${numbers[i]}`
//   ); // 18, 29, 34
// }

// ----------------------------

// const redFruits = [
//   "apple",
//   "strawberry",
//   "cherry",
//   "cranberries",
//   "cherry",
// ];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//     console.log(`${fruit} is a red fruit!`);
// }

// ----------------------------

// function multiply() {
//     let total = 1;
//     console.log(arguments);

//     for (const argument of arguments) {
//       console.log(argument);
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(8, 7, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// ----------------------------

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//   } else if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//   } else {
//     console.log("Операція зняття коштів проведена успішно");
//   }
// }

// withdraw(100, 100); // "Для проведення операції введіть суму більшу за нуль"
// // withdraw(500, 300); // "Недостатньо коштів на рахунку"
// // withdraw(100, 300); // "Операція зняття коштів проведена успішно"

// ----------------------------

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks();

// ----------------------------

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// ----------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key, "=", book[key]);
// }

// ----------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     // console.log(key);
//     // console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }

// const animal = Object.create(book);
// animal.text = 'qwe'

// for (const key in animal) {
//     if (animal.hasOwnProperty(key))
//         console.log(key);
// }

// ----------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// for (const key of keys) {
//   console.log(key, "=", book[key]);
// }

// ----------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// const bookNames = [];
// let totalRating = 0;

// for (const book of books) {
//   // Об'єкт книги
// //   console.log(book);
//   // Назва
//   // console.log(book.title);
//   bookNames.push(book.title);
// //   // Автор
//   // console.log(book.author);
// //   // Рейтинг
//     //   console.log(book.rating);
//     totalRating += book.rating;
// }
// console.log(bookNames);

// const averageRating = (totalRating / books.length).toFixed(2);
// console.log(averageRating); // 8.21

// ----------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const {
//   title,
//   author,
//   isPublic,
//   rating,
//   coverImage,
// } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic
//   ? "публічному"
//   : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

// console.log(message);

// -------------------
// Глибока деструктуризація

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// =========== Деструктуризація масивів

// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(
//   `R:${red}, G:${green}, B:${blue}, Alfa:${alfa}`
// ); // "R:200,G:100,B:255,Alfa:0.3"

// ----------------

// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(isPublic);
//   // І так далі
// }

// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// ---------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// apartment.tags[apartment.tags.length - 1];

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// console.dir(apartment);

// const name = "Repair Droid";
// const price = 2500;
// const image =
//   "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name: 'sdfgs',
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// console.log(product);
// --------------------
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr =
//   "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key))
//     keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }
// console.log(keys);

// --------------------

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// --------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const { name, price } of products) {
//     // console.log(name);
//     if (name === productName) {
//       return price;
//     }
//   }
//   return "null";
// }
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Engine"));

// --------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   let result = []
//   for (const { name, price, quantity } of products) {
//     if ('name' === propName) {
//       result.push(name);
//     }
//     if ("price" === propName) {
//       result.push(price);
//     }
//      if ("quantity" === propName) {
//        result.push(quantity);
//      }
//   } return result
// }

// console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // []

// -------------------- 3/20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   for (const {
//     name,
//     price,
//     quantity,
//   } of products) {
//     if (name === productName) {
//       return price * quantity;
//     }
//   }
//   return 0;
// }

// console.log(calculateTotalPrice("Blaster")); // повертає 0
// console.log(calculateTotalPrice("Radar")); // повертає 5200
// calculateTotalPrice("Droid"); // повертає 2800
// calculateTotalPrice("Grip"); // повертає 10800
// calculateTotalPrice("Scanner"); // повертає 8100

// ---------------3/25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(tomorrowIcon);

// ---------------3/27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(scores);
// const worstScore = Math.min(...scores);
// console.log(...scores);

// ---------------3/30

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   data;
//   return {
//     completed,
//     category,
//     priority,
//     ...data,
//   };
// }

// console.log(makeTask({})); //{ category: "General", priority: "Normal", completed: false }

// ---------------3/32

// function add(...rest) {
//   let numbers = 0;
//   for (const num of rest) {
//     numbers += num;
//   }
//   return numbers;
// }

// console.log(add(12, 4, 11, 48)); // 75

// ---------------3/33

// function findMatches(...args) {
//   const matches = [];
//   for (const num of args) {
//     if (args[0].includes(num)) {
//       matches.push(num);
//     }
//   }
//   return matches;
// }

// console.log(
//   findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// ); // [1, 2]

// ---------------3/34

// const bookShelf = {
//   books: [
//     "The last kingdom",
//     "The guardian of dreams",
//   ],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     return "Deleting book Red sunset";
//   },

//   updateBook(bookName) {
//     return "Updating book Sands of dune to Dune";
//   },
// };

// console.log(bookShelf.getBooks()); // "Returning all books"

// console.log(bookShelf.addBook("Haze")); // "Adding book Haze"

// console.log(bookShelf.removeBook("Red sunset")); // "Deleting book Red sunset"

// console.log(
//   bookShelf.updateBook("Sands of dune", "Dune")
// ); // "Updating book Sands of dune to Dune"

// ---------------3/35

// const bookShelf = {
//   books: [
//     "The last kingdom",
//     "Haze",
//     "The guardian of dreams",
//   ],
//   updateBook(oldName, newName) {
//     let index = this.books.indexOf(oldName);
//     console.log(index);
//     let arr = this.books;

//     arr.splice(index, 1, newName);
//     return arr
//   },
// };

// console.log(
//   bookShelf.updateBook("The last kingdom", "Dune")
// ); // значення властивості `books` - це масив `['Dune', 'Haze', 'The guardian of dreams']`
// ------------
// const atTheOldToad = {
//   potions: [],
// };
// ------------
// const atTheOldToad = {
//   potions: [
//     "Speed potion",
//     "Dragon breath",
//     "Stone skin",
//   ],

//   getPotions() {
//     console.log(this.potions);
//   },
// };

// console.log(atTheOldToad.getPotions()); // повертає ["Speed potion", "Dragon breath", "Stone skin"]

// ------------3/41
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (potionName === this.potions[i].name) {
//         return this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
//   // Change code above this line
// };



// console.log(atTheOldToad.getPotions()); // для вихідного об'єкта повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// console.log(
//   atTheOldToad.addPotion({
//     name: 'Invisibility',
//     price: 620,
//   })
// ); // в масиві potions останнім елементом буде цей об'єкт

// console.log(
//   console.log(
//     atTheOldToad.addPotion({
//       name: 'Power potion',
//       price: 270,
//     })
//   )
// ); // в масиві potions останнім елементом буде цей об'єкт

// console.log(
//   atTheOldToad.addPotion({
//     name: 'Dragon breath',
//     price: 700,
//   })
// ); //, масив potions не змінюється

// console.log(
//   atTheOldToad.addPotion({
//     name: 'Stone skin',
//     price: 240,
//   })
// ); //, массив potions не змінюється

// console.log(
//   atTheOldToad.addPotion({
//     name: 'Dragon breath',
//     price: 700,
//   })
// ); //, повертає рядок "Error! Potion Dragon breath is already in your inventory!"

// console.log(
//   atTheOldToad.addPotion({
//     name: 'Stone skin',
//     price: 240,
//   })
// ); // повертає рядок "Error! Potion Stone skin is already in your inventory!"
// // Значення властивості atTheOldToad.removePotion - це метод об'єкта

// console.log(atTheOldToad.removePotion('Dragon breath')); //, у властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]

// console.log(atTheOldToad.removePotion('Speed potion'));
// //;, у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')); // ;, у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]

// console.log(
//   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
// ); // у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
// ------------------------------------------

