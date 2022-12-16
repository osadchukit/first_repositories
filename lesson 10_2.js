// ---------------TASK 1---------------------//
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//   griffindor: [
//     {
//       name: 'Harry',
//       points: 17,
//     },
//     {
//       name: 'Hermiona',
//       points: 19,
//     },
//     {
//       name: 'Ron',
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: 'Draco',
//       points: 17,
//     },
//     {
//       name: 'Goyl',
//       points: 14,
//     },
//     {
//       name: 'Crabbe',
//       points: 5,
//     },
//   ],
// };

// const object = {
//   getListFacultyStudent(fakulty) {
//     return fakulty.map(({ name }) => name);
//   },

//   getPointsFaculty(fakulty) {
//     return fakulty.reduce((arr, { points }) => (arr += points), 0);
//   },

//   getBigPointerFaculty(griffindor, sliserin) {
//       const griffindorPoints = this.getPointsFaculty(griffindor)
//       const sliserinPoints = this.getPointsFaculty(sliserin);
//        return griffindorPoints > sliserinPoints ? 'Griffindor' : 'Sliserin';
//   },
// };

// console.log(
//   'Faculty Big Pointer',
//   object.getBigPointerFaculty(hogvarts.griffindor, hogvarts.sliserin)
// );

// console.log(
//   'Faculty Griffindor',
//   object.getListFacultyStudent(hogvarts.griffindor)
// );
// console.log(
//   'Faculty Sliserin',
//   object.getListFacultyStudent(hogvarts.sliserin)
// );

// console.log('Faculty Griffindor', object.getPointsFaculty(hogvarts.griffindor));
// console.log('Faculty Sliserin', object.getPointsFaculty(hogvarts.sliserin));

// -----------------------------------------TASK 2------------------------------------------//
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [
//   {
//     name: `Lika`,
//     language: `html`,
//   },
//   {
//     name: `Anton`,
//     language: `css`,
//   },
//   {
//     name: `Andriy`,
//     language: `js`,
//   },
//   {
//     name: `Vova`,
//     language: `html`,
//   },
//   {
//     name: `Alina`,
//     language: `css`,
//   },
//   {
//     name: `Egor`,
//     language: `js`,
//   },
//   {
//     name: `Aleksandr`,
//     language: `html`,
//   },
//   {
//     name: `Taras`,
//     language: `css`,
//   },
//   {
//     name: `Ivan`,
//     language: `js`,
//   },
//   {
//     name: `Make`,
//     language: `html`,
//   },
// ];

// function getNameLernLenguage(arrStudents, LernLenguage) {
//   return arrStudents.filter(({ language }) => language === LernLenguage);
// }

// console.log(getNameLernLenguage(students, 'js'));;

// ---------------------TASK 3-------------------------//
// Порахувати скільки заробив кожен  юзер
// (функція приймає 2 параметри
// 1 параметр масив
// 2 параметр імя робітника
// Функція повертає скільки він заробив (salary*month) )

// Порахувати загальну суму заробітку всіх робітників()
// (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

// const workers = [
//   {
//     name: 'Alex',
//     salary: 3500,
//     month: 12,
//   },
//   {
//     name: 'Dima',
//     salary: 2500,
//     month: 9,
//   },
//   {
//     name: 'Oleg',
//     salary: 1500,
//     month: 36,
//   },
// ];

// function salary(workers, workerName) {
//   const worker = workers.filter(({ name }) => name === workerName);
//   return worker[0].salary * worker[0].month;
// }

// function salaryAll(workers) {
//   salarySumma = 0;
//   workers.map(
//     ({ salary, month }) => (salarySumma = salarySumma + salary * month)
//   );
//   return salarySumma;
// }

// console.log(salary(workers, 'Alex'));
// console.log(salaryAll(workers));
// -----------------------------------------TASK 4------------------------------------------//
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
//   { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//   { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
//   {
//     name: 'Oleksii',
//     books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//     age: 26,
//   },
// ];

// function users(arr, nameBook) {
//   return arr
//     .filter((book, i, arr) => book.books.includes(nameBook))
//     .map(({ name }) => name);
// }

// function users(friends) {
//   return friends
//     .filter(book => Object.keys(book).includes('age'))
//     .map(({ name }) => name);
// }

// console.log(users(friends));
// console.log(users(friends, 'Bible'));

// ----------------------------TASK 5---------------------// ???????????????????
// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

// const bankSystem = [{ privat: 1000 }, { mono: 1500 }];

// class KardBalans {
//   constructor(bank, sum) {
//     this.bank = bank;
//     this.sum = sum;
//   }

//   getSum() {
//      return `На карті в банку ${this.bank} баланс ${this.sum} грн.`;
//   }

//   addKard(kardBank, sum = 0) {

//   }

// }

// const bankPrivat = new KardBalans('privat', 1000);
// const bankMono = new KardBalans('mono', 1500);

// console.log(bankMono.getSum());
// console.log(bankPrivat.getSum());

// console.log(bankPrivat.addKard(addKard, 0));

// ---------------------------TASK 6---------------------------//
// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

const people1 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Alex'],
  },
]; //Not found

const people2 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
]; // Not found

const people3 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
]; // Jhon
// нарциса знають всі name include
// нарцис не знає нікого

function narcys(arr) {
  const ollKnow = arr.flatMap(elem => elem.know);
  // console.log(ollKnow.map(elem => elem));
  // console.log(arr.filter(elem => elem.know));
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].know);
    // console.log(arr[i].know);
    for (let j = 0; j < arr[i].know.length; j++) {
      console.log(arr[i].know);
      // console.log(arr[i].know.include());
    }
  }
}

console.log(narcys(people3));

// -----------------------------------------TASK 7------------------------------------------//
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]
