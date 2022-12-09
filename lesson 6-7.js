// 'use strict';

// // const createContact = function (contact) {
// //   return {
// //       list: 'default',
// //       id: 1,
// //       ...contact,
// //   };
// // };

// // const contact = {
// //   name: 'Mango',
// //   email: 'mango@mail.com',
// //   list: 'friends',
// // };

// // const newContact = createContact(contact);
// // newContact.name = 'Ser. Pan';

// // console.log(contact);
// // console.log(newContact);

// // -----------------

// // const transformUsername = function ({ firstName, lastName, ...restProps }) {
// //   return {
// //     fullName: `${firstName} ${lastName}`,
// //       ...restProps,
// //     ...restProps
// //   };
// // };

// // const user = {
// //   id: 1,
// //   firstName: 'Jacob',
// //   lastName: 'Mercer',
// //   email: 'j.mercer@mail.com',
// //   friendCount: 40,
// // };

// // const newUser = transformUsername(user);
// // console.log(newUser);

// // -----------------------------------

// // const users = [
// //   {
// //     name: 'Moore Hensley',
// //     email: 'moorehensley@indexia.com',
// //     eyeColor: 'blue',
// //     friends: ['Sharron Pace'],
// //     isActive: false,
// //     balance: 2811,
// //     gender: 'male',
// //   },
// //   {
// //     name: 'Sharlene Bush',
// //     email: 'sharlenebush@tubesys.com',
// //     eyeColor: 'blue',
// //     friends: ['Briana Decker', 'Sharron Pace'],
// //     isActive: true,
// //     balance: 3821,
// //     gender: 'female',
// //   },
// //   {
// //     name: 'Ross Vazquez',
// //     email: 'rossvazquez@xinware.com',
// //     eyeColor: 'green',
// //     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
// //     isActive: false,
// //     balance: 3793,
// //     gender: 'male',
// //   },
// //   {
// //     name: 'Elma Head',
// //     email: 'elmahead@omatom.com',
// //     eyeColor: 'green',
// //     friends: ['Goldie Gentry', 'Aisha Tran'],
// //     isActive: true,
// //     balance: 2278,
// //     gender: 'female',
// //   },
// //   {
// //     name: 'Carey Barr',
// //     email: 'careybarr@nurali.com',
// //     eyeColor: 'blue',
// //     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
// //     isActive: true,
// //     balance: 3951,
// //     gender: 'male',
// //   },
// //   {
// //     name: 'Blackburn Dotson',
// //     email: 'blackburndotson@furnigeer.com',
// //     eyeColor: 'brown',
// //     friends: [
// //       'Jacklyn Lucas',
// //       'Linda Chapman',
// //       'Adrian Cross',
// //       'Solomon Fokes',
// //     ],
// //     isActive: false,
// //     balance: 1498,
// //     gender: 'male',
// //   },
// //   {
// //     name: 'Sheree Anthony',
// //     email: 'shereeanthony@kog.com',
// //     eyeColor: 'brown',
// //     friends: ['Goldie Gentry', 'Briana Decker'],
// //     isActive: true,
// //     balance: 2764,
// //     gender: 'female',
// //   },
// // ];

// // const getTotalBalanceByGender = (users, gender) => {
// //   let res = 0;

// //   for (const user of users) {
// //     if (user.gender === gender) {
// //       res += user.balance;
// //     }
// //   }
// //   return console.log(res);;
// // };

// // // const getTotalBalanceByGender = (users, gender) =>
// // //   users
// // //     .filter(user => user.gender === gender)
// // //     .reduce((acc, {balance}) => acc + balance, 0);

// // getTotalBalanceByGender(users, 'male');
// // getTotalBalanceByGender(users, 'female');

// // ---------------------------
// // // Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// // function calcBMI(object) {
// //     const { weight, height } = object;
// //   const numericWeight = Number(weight.replace(',', '.'));
// //   const numericHeight = Number(height.replace(',', '.'));
// //   return Number((numericWeight / numericHeight ** 2).toFixed(2));
// // }

// // // Було
// // // console.log(calcBMI('88,3', '1.75'));
// // // console.log(calcBMI('68,3', '1.65'));
// // // console.log(calcBMI('118,3', '1.95'));

// // // Очікується
// // console.log(calcBMI({weight: '88,3', height: '1.75',}));
// // // console.log(
// // //   calcBMI({
// // //     weight: '68,3',
// // //     height: '1.65',
// // //   })
// // // );
// // // console.log(
// // //   calcBMI({
// // //     weight: '118,3',
// // //     height: '1.95',
// // //   })
// // // );

// // ===================================

// // // Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// // function printContactsInfo({names, phones}) {
// //     const nameList = names.split(',');
// //   const phoneList = phones.split(',');
// //   for (let i = 0; i < nameList.length; i += 1) {
// //     console.log(`${nameList[i]}: ${phoneList[i]}`);
// //   }
// // }

// // // Було
// // // printContactsInfo(
// // //   'Jacob,William,Solomon,Artemis',
// // //   '89001234567,89001112233,890055566377,890055566300',
// // // );

// // // Очікується
// // printContactsInfo({
// //   names: 'Jacob,William,Solomon,Artemis',
// //   phones: '89001234567,89001112233,890055566377,890055566300',
// // });

// // ===================================

// // // Example 3 - Глибока деструктуризація
// // // Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// // function getBotReport({ companyName, bots: { repairBots, defenceBots } }) {

// //   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// // }

// // // Було
// // // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // // Очікується
// // console.log(
// //   getBotReport({
// //     companyName: 'Cyberdyne Systems',
// //     bots: {
// //       repair: 150,
// //       defence: 50,
// //     },
// //   })
// // ); // "Cyberdyne Systems has 200 bots in stock"

// // ===================================

// // // Example 4 - Деструктуризація
// // // Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// // // Рішення
// // function getStockReport({ companyName, stock: { ...objectTovar } }) {
// //   const arr = Object.values(objectTovar);
// //   let total = 0;
// //   for (const tovar of arr) {
// //     total += tovar;
// //   }
// //   return `${companyName} Systems has ${total} items in stock`;
// // }

// // // Перевірка
// // console.log(
// //   getStockReport({
// //     companyName: 'Cyberdyne Systems',
// //     stock: {
// //       repairBots: 150,
// //       defenceBots: 50,
// //     },
// //   })
// // ); // "Cyberdyne Systems has 200 items in stock"

// // console.log(
// //   getStockReport({
// //     companyName: 'Belacci',
// //     stock: {
// //       shoes: 20,
// //       skirts: 10,
// //       hats: 5,
// //     },
// //   })
// // ); // "Belacci has 35 item in stock"

// // ===================================
// // ===================================
// // ===================================

// // Example 1 - Коллбек функції
// // Напишіть наступні функції:

// // createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// // logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// // logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// // // your code here

// // const product = {
// //   name: 'chocolate',
// //   price: 34,
// //   quantity: 5,
// // };

// // function createProduct(obj, callback) {
// //   const product = {
// //     ...obj,
// //     id: 1,
// //   };
// //    return callback(product);

// // }

// // const logProduct = value => console.log(value);

// // const logTotalPrice = ({ price, quantity }) => price * quantity;

// // createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);

// // console.log(
// //   createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice)
// // );



// // Example 2 - Коллбек функції
// // Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// // Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// // Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.
// // /

// // const TRANSACTION_LIMIT = 1000;

// // const account = {
// //   username: 'Jacob',
// //   balance: 400,

// //   withdraw(amount, onSuccess, onError) {
// //     amount = Math.abs(amount);
// //     if (amount > TRANSACTION_LIMIT) {
// //       return onError(amount, `перевищено ліміт`);
// //     }
// //     if (amount > this.balance) {
// //       return onError(amount, `недостатньо коштів`);
// //     }
// //     onSuccess(amount);
// //   },

// //   deposit(amount, onSuccess, onError) {
// //     amount = Math.abs(amount);
// //     if (amount > TRANSACTION_LIMIT) {
// //       return onError(amount, `перевищено ліміт`);
// //     }
// //     if (amount <= 0) {
// //       return onError(amount, `сумма менша за нуль`);
// //     }
// //     onSuccess(amount);
// //   },
// // };

// // const handleSuccess = amount => console.log(`${amount} Успішно опрацьовано!`);

// // const handleError = (amount, message = 'Невідомо') =>
// //   console.log(`${amount} Не опрацьовано! По причині: ${message}`);

// // account.withdraw(2000, handleSuccess, handleError);
// // account.withdraw(600, handleSuccess, handleError);
// // account.withdraw(300, handleSuccess, handleError);
// // account.deposit(1700, handleSuccess, handleError);
// // account.deposit(0, handleSuccess, handleError);
// // account.deposit(-600, handleSuccess, handleError);
// // account.deposit(600, handleSuccess, handleError);

// // Example 3 - Коллбек функції
// // Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// // ================

// // const tweets = [
// //   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
// //   { id: '001', likes: 2, tags: ['html', 'css'] },
// //   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
// //   { id: '003', likes: 8, tags: ['css', 'react'] },
// //   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// // ];

// // const getTags = tweets =>
// //   tweets.reduce((allTags, tweet) => {
// //     allTags.push(...tweet.tags);

// //     return allTags;
// //   }, []);

// // const tags = getTags(tweets);

// // // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // // Це стандартна практика, якщо callback-функція досить велика.

// // // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // // то створюємо її і записуємо їй значення 0.
// // // В іншому випадку збільшуємо значення на 1.
// // const getTagStats = (acc, tag) => {
// //   if (!acc.hasOwnProperty(tag)) {
// //     acc[tag] = 0;
// //   }

// //   acc[tag] += 1;

// //   return acc;
// // };

// // // Початкове значення акумулятора - це порожній об'єкт {}
// // const countTags = tags => tags.reduce(getTagStats, {});

// // const tagCount = countTags(tags);
// // console.log(tagCount);

// // ===================

// // const employees = [
// //   {
// //     name: 'Artur',
// //     bonus: 64.5,
// //   },
// //   {
// //     name: 'Ivan',
// //     bonus: 49.2,
// //   },
// //   {
// //     name: 'Makar',
// //     bonus: 36,
// //   },
// //   {
// //     name: 'Anastasiya',
// //     bonus: 25,
// //   },
// //   {
// //     name: 'Olha',
// //     bonus: 165.13,
// //   },
// // ];

// // const each = (array, callback) => {
// //   let resultArr = [];
// //   for (const { name, bonus } of array) {
// //     resultArr.push({ name, bonus: callback(bonus) });
// //   }

// //   return resultArr;
// // };

// // const roundBonus = value => Math.round(value);

// // console.log(each(employees, roundBonus));

// // Example 4 - Стрілочні функції
// // Виконайте рефакторинг коду за допомогою стрілочних функцій.

// // const createProduct = (partialProduct, callback) => {
// //   const product = { id: Date.now(), ...partialProduct };
// //   callback(product);
// // }

// // const logProduct = (product) => console.log(product);

// // const logTotalPrice = product => console.log(product.price * product.quantity);

// // createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// // createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// // Example 5 - Стрілочні функції
// // Виконайте рефакторинг коду задачи EXAMPLE 2 за допомогою стрілочних функцій.

// // const TRANSACTION_LIMIT = 1000;

// // const account = {
// //   username: 'Jacob',
// //   balance: 400,

// //   withdraw(amount, onSuccess, onError) {
// //     amount = Math.abs(amount);
// //     if (amount > TRANSACTION_LIMIT) {
// //       return onError(amount, `перевищено ліміт`);
// //     }
// //     if (amount > this.balance) {
// //       return onError(amount, `недостатньо коштів`);
// //     }
// //     onSuccess(amount);
// //   },

// //   deposit(amount, onSuccess, onError) {
// //     amount = Math.abs(amount);
// //     if (amount > TRANSACTION_LIMIT) {
// //       return onError(amount, `перевищено ліміт`);
// //     }
// //     if (amount <= 0) {
// //       return onError(amount, `сумма менша за нуль`);
// //     }
// //     onSuccess(amount);
// //   },
// // };

// // const handleSuccess = amount => console.log(`${amount} Успішно опрацьовано!`);

// // const handleError = (amount, message = 'Невідомо') =>
// //   console.log(`${amount} Не опрацьовано! По причині: ${message}`);

// // account.withdraw(2000, handleSuccess, handleError);
// // account.withdraw(600, handleSuccess, handleError);
// // account.withdraw(300, handleSuccess, handleError);
// // account.deposit(1700, handleSuccess, handleError);
// // account.deposit(0, handleSuccess, handleError);
// // account.deposit(-600, handleSuccess, handleError);
// // account.deposit(600, handleSuccess, handleError);

// // Example 6 - Інлайн стрілочні функції
// // Виконайте рефакторинг коду за задачи EXAMPLE 3 за допомогою стрілочних функцій.

// // Example 7 - Метод forEach
// // Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// // const logItems = items => {
// //     console.log(items);
    
// // //   for (let i = 0; i < items.length; i += 1) {
// // //     console.log(`${i + 1} - ${items[i]}`);
// // //     }
    
// //     // items.forEach(function (item, index) {
// //     //     console.log(`${index + 1} - ${item}`);
// //     // });

// //      items.forEach( (item, index) => console.log(`${index + 1} - ${item}`));
    
// // };

// // logItems(['Mango', 'Poly', 'Ajax']);
// // logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// // Example 8 - Метод forEach
// // Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// // function printContactsInfo({ names, phones }) {
// //     const phoneList = phones.split(',');

// //     names.split(',').forEach((name, index) => {
// //       console.log(`${name}: ${phoneList[index]}`);
// //     });


// // }

// // printContactsInfo({
// //   names: 'Jacob,William,Solomon,Artemis',
// //   phones: '89001234567,89001112233,890055566377,890055566300',
// // });

// // Example 9 - Метод forEach
// // Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// // function calсulateAverage(...args) {
// //   let total = 0;
// //   for (let i = 0; i < args.length; i++) {
// //     total += args[i];
// //   }
// //   return total / args.length;
// // }

// const calсulateAverage = (...args) => {
//     console.log(args);
//     let total = 0;
    
// //   for (let i = 0; i < args.length; i++) {
// //     total += args[i];
// //     }
//     args.forEach(elem => (total += elem));
    
//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
