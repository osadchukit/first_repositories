// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = false;
// console.log(dog.hasOwnProperty('barks')); // true

// const dogKeys = Object.keys(dog);
// console.log(dogKeys); // ['barks']

// ------------------------

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Манго", "mango@mail.com");
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// console.log(mango.name);

// ----------------------------------

// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Манго", email: "mango@mail.com" }

// const poly = new User({
//   name: "Поли",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Поли", email: "poly@mail.com" }

// ------------------------------

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });

// mango.changeEmail("mango@supermail.com");

// console.log(mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email); // Виникне помилка, це приватна властивість
// console.log(mango.name);

// --------------------------------------------

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   set email(newEmail) {
//     if (newEmail === '') {
//       console.error('Помилка! Пошта не може бути порожнім рядком!');
//       return;
//     }

//     this.#email = newEmail;
//   }

//   get email() {
//     return this.#email;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// ---------------------------------
// Статичні методи

// class User {
//     static #takenEmails = [];

//     static isEmailTaken(email) {
//         return User.#takenEmails.includes(email);
//     }

//     #email;

//     constructor({ email }) {
//         this.#email = email;
//         User.#takenEmails.push(email);
//     }

// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));

// ------------------------------------
// Наслідування класів

// class User {
//     #email;

//   constructor(email) {
//       this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"
// editor.email = 'dfgsdfg'
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// ---------------------------------------------
// Конструктор дочірнього класу

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// // Методи дочірнього класу

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ posts: [], email: "mango@mail.com" });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-111");
// console.log(editor.posts); // ['post-1']

//  =======================================================================
// =======================================================================
// =======================================================================

// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class User {
//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }

// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// // mango.updatePostCount(5);
// // console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(12);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// Оператор ~
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT

// Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// // Додай методи класу:

// // getItems() - повертає масив товарів.
// // addItem(item) - отримує новий товар і додає його до поточних.
// // removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     //   if (this.items.includes(item))
//     //     return this.items.splice(this.items.indexOf(item), 1);

//     const idx = this.items.indexOf(item);
//     //   console.log(~0);
//     //   console.log(~-1);
//     //   console.log(!!~0);
//     //   -(idx + 1) === ~idx
//     // console.log(!!~idx);
//       if(!!~idx){
//           this.items.splice(idx, 1)
//           console.log(idx);
//       }
//   }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// console.log(storage.getItems());
// storage.addItem('🍌');
// console.log(storage.getItems());
// storage.removeItem('🍇');
// console.log(storage.getItems());
// const items = storage.productItems;
// // console.log (items); // [ '🍎', '🍋', '🍇', '🍑' ]

// // storage.productItems = '🍌';
// // storage.productItems = '🍋';
// // console.log(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// console.log(1);
// console.log(!!1);
// console.log(Boolean(1));

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//   #login;
//   #email;
//   constructor({ login, email }={}) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//    return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor({ arr = [], text, priority } = {}) {
//     this.items = arr;
//     this.text = text;
//     this.priority = priority;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     // console.log(this.items.map(item => item.text));
//     //   const textSearch = this.items.map(item => item.text).includes(text);
//     const index = this.items.map(item => item.text).indexOf(text);
//     if (!!~index) {
//       this.items.splice(index, 1);
//     }
//   }

//   updateNotePriority(text, newPriority) {
//     const index = this.items.map(item => item.text).indexOf(text);
//     if (!!~index) {
//       this.items[index].priority = newPriority;
//     }
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// // console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// // console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя 3 замітка',
//   priority: Notes.Priority.LOW,
// });
// // console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// // console.log(myNotes.items);

// myNotes.updateNotePriority('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// Example 5 - Toggle
// Напишіть клас Toggle
// який приймає об'єкт налаштувань {isOpen: boolean}
// і оголошує одну властивість on - стан вкл / викл(true / false).
// За замовчуванням значення властивості on повинно бути false.

// class Toggle {
//   constructor({ isOpen } = { isOpen: false }) {
//     this.on = isOpen;
//   }
//   //   toggle() {
//   //     if (this.on === false) {
//   //       return (this.on = true);
//   //     }
//   //     if (this.on === true) {
//   //       return (this.on = false);
//   //     }
//   //   }

//   toggle = () => {
//     this.on = !this.on;
//   };
// }

// const firstToggle = new Toggle({ isOpen: true });

// // console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// // console.groupEnd('firstToggle');



// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
