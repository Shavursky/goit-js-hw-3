//=====================завдання 1=========================
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };
//=====================завдання 2=========================
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
//=====================завдання 3=========================
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
//=====================завдання 4=========================
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
//=====================завдання 5=========================
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
//=====================завдання 6=========================
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com'
//     }
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola'
// apartment.tags.push("trusted")

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);
//=====================завдання 7=========================
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4.7,
//     price: 5000,
//     tags: ['premium', 'promoted', 'top', 'trusted'],
//     owner: {
//         name: 'Henry Sibola',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com'
//     }
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location.country);
// console.log(apartment.location.city);
//=====================завдання 8=========================
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//     name,
//     price,
//     image,
//     tags
// };
// console.log(product.name);
// console.log(product.price);
// console.log(product.image);
// console.log(product.tags);
//=====================завдання 9=========================
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//     [emailInputName]: 'henry.carter@aptmail.com',
//     [passwordInputName]: 'jqueryismyjam'
// };
// console.log(credentials[emailInputName]);
// console.log(credentials[passwordInputName]);
// // Або те ж саме можна прописати іншим методом
// console.log(credentials);
// // Або те ж саме можна прописати іншим методом
// console.log(credentials.email);
// console.log(credentials.password);
//=====================завдання 10=========================
// const apartment = {
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
// };
// const keys = apartment[];
// const values = [];
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }
//=====================завдання 11=========================
// const keys = [];
// const values = [];
// const advert = {
//     service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city centre';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key))
//         keys.push(key);
//     values.push(apartment[key]); {
//     }
// }
//=====================завдання 12=========================
// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)); {
//             propCount += 1;
//         }
//     }
//     return propCount;
// }
//=====================завдання 13=========================
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
// }
//=====================завдання 14=========================
// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     const keys = Object.keys(object);
//     for (const key of keys) {
//         propCount += 1;
//     }
//     return propCount;
//     // Change code above this line
// }
//=====================завдання 15=========================
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys, values);
//=====================завдання 16=========================
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//     const values = Object.values(salaries);
//     for (const value of values) {
//         totalSalary += value;
//     }
//     // Change code above this line
//     return totalSalary;
// }
//=====================завдання 17=========================
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (let color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
//=====================завдання 18=========================
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     let price = null;
//     for (product of products) {
//         if (product.name === productName) {
//             price = product.price;
//         }
//     }
//     return price;
// }
// ===========        варіант розвязку №2    =============

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line

//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }
//     }
//     return null;

// }
//=====================завдання 19=========================
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     const values = [];
//     for (const product of products) {
//         if (product.hasOwnProperty(propName)) {
//             values.push(product[propName]);
//         }
//     }
//     return values;
//     // Change code above this line
// }
// const full = getAllPropValues("name");
// const full1 = getAllPropValues("quantity");
// const full2 = getAllPropValues("price");
// const full3 = getAllPropValues("category");
// console.log(full, full1, full2, full3);

//+++++++++++++++++     приклад 1      ++++++++++++++++++++
// const a = getProductPrice('Radar');
// const b = getProductPrice('Grip');
// const c = getProductPrice('Scanner');
// const d = getProductPrice('Droid');
// const e = getProductPrice('Engine');
// console.log(a, b, c, d, e);

// function findNumber(array, number) {
//     for (const numb of array) {
//         if (numb === number) {
//             return true;
//         }
//     }
//     return false;
// }
// const dupa = findNumber([1, 2, 3], 25);
// console.log(dupa);
//+++++++++++++++++          приклад 2      ++++++++++++++++++
// function findPrice(cars, name) {
//     for (const kiki of cars) {
//         if (kiki.name === name) {
//             return kiki.price;
//         }
//     }
//     return null;
// }
// const allCars = [{
//         name: "Mersedes",
//         price: 2000

//     },
//     {
//         name: "Porshe",
//         price: 250
//     },
//     {
//         name: "Chevrolet",
//         price: 300
//     }
// ]

// console.log(findPrice(allCars, "Porshe"));
//=====================завдання 20=========================
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity
//         }
//     }
//     return 0;
//     // Пиши код выше этой строки
// }
// const oneObj = calculateTotalPrice("Blaster");
// const oneObj2 = calculateTotalPrice("Radar");
// const oneObj3 = calculateTotalPrice("Droid");
// const oneObj4 = calculateTotalPrice("Grip");
// const oneObj5 = calculateTotalPrice("Scanner");
// console.log(oneObj, oneObj2, oneObj3, oneObj4, oneObj5);
//=====================завдання 21=========================
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
//=====================завдання 22=========================
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
//=====================завдання 23=========================
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line
// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
//=====================завдання 24=========================
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb }
//     of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }
//=====================завдання 25=========================
// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line
// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;
//=====================завдання 26=========================
// Change code below this line
// function calculateMeanTemperature(forecast) {

//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
//=====================завдання 27=========================
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
//=====================завдання 28=========================
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
//=====================завдання 29=========================
// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings };
//=====================завдання 30=========================
// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
//     // Change code below this line
//     const newData = { completed, category, priority, ...data };
//     return newData;
//     // Change code above this line
// }
//=====================завдання 31=========================
// function add(...args) {
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//     }
//     return sum;
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));
//=====================завдання 32=========================
// Change code below this line
// function addOverNum(values, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > values) {
//             total += arg;
//         }
//     }
//     return total;
// }
//=====================завдання 33=========================
// function findMatches(...args) {
//     const matches = []; // Don't change this line
//     for (let i = 1; i < args.length; i += 1) {
//         if (args[0].includes(args[i])) {
//             matches.push(args[i]);
//         }
//     }
//     return matches;
// }
//=====================завдання 34=========================
// const bookShelf = {
//     // Change code below this line
//   removeBook(bookName) {
//   return `Deleting book ${bookName}`;
//   },
//     books: ['The last kingdom', 'The guardian of dreams'],
//     getBooks() {
//       return 'Returning all books';
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//     }
//     // Change code above this line
//   };
//=====================завдання 35=========================
// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         const bookIndex = this.books.indexOf(oldName);
//         this.books.splice(bookIndex, 1, newName);
//         return this.books;
//         // Change code above this line
//     },
// };
//=====================завдання 36=========================
// const atTheOldToad = {
//     // Change code below this line
//     potions: []
//         // Change code above this line
// };
//=====================завдання 37=========================
// const atTheOldToad = {
//     // Change code below this line
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     getPotions() {
//         return this.potions;
//     }
//     // Change code above this line
// };
//=====================завдання 38=========================
// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     addPotion(potionName) {
//         // Change code below this line
//         this.potions.push(potionName);
//         // Change code above this line
//     },
// };
//=====================завдання 39=========================
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         // Change code below this line
//         const index = this.potions.indexOf(potionName);
//         this.potions.splice(index, 1);
//         // Change code above this line
//     },
// };
//=====================завдання 40=========================
// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     updatePotionName(oldName, newName) {
//         // Change code below this line
//         const index = this.potions.indexOf(oldName);
//         this.potions.splice(index, 1, newName);
//         return this.potions;
//         // Change code above this line
//     },
// };
//=====================завдання 41=========================
// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Dragon breath', price: 780 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(potionName) {
//         const { potions } = this;
//         const { name } = potionName;
//         for (let i = 0; i < potions.length; i += 1) {
//             if (potions[i].name === name) {
//                 return `Potion ${name} is already equipped!`;
//             }
//             potions.push(potionName);
//         }
//     },
//     removePotion(potionName) {
//         const { potions } = this;
//         for (let i = 0; i < potions.length; i += 1) {
//             if (potions[i].name === potionName) {
//                 potions.splice(i, 1);
//                 return potions;
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//         const { potions } = this;
//         for (let i = 0; i < potions.length; i += 1) {
//             if (potions[i].name === oldName) {
//                 potions[i].name = newName;
//                 return potions;
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
// };