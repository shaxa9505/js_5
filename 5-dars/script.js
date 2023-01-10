"use strict";

// const channel = prompt("What's your favourite youtuber");
// console.log('https://youtube.com/' + channel + "/videos");
// console.log(`https://youtube.com/${channel}/videos`);

// const user = "Samar";
// const job = "JavaScript Developer";

// console.log(`User name is ${user}, he is ${job}`);


// Operatorlar

console.log("Samar" + " Badriddinov");
console.log("Samar" + 6);
console.log(6 * "9");


// incr, decr
let incr = 10;
let decr = 10;

// incr++; // 1 quwadi
// decr--; // 1 ayiradi

console.log(incr++); // prefix
console.log(decr--); // prefix

console.log(++incr);
console.log(--decr);

console.log(incr);
console.log(decr);


// Pratsent
console.log(5 % 2); // berda 5 ni 2 ga bo'lsak nechi qoldiq qolishini chiqarib beradi
console.log(10 % 3);



// == || ===
console.log(5 * 5 == "25") // true
console.log(5 * 5 === "25") // false


// && = va || = yoki || ! ne ravno 

const isAge = true;
const isClose = false;
const isChecked = false

console.log(isAge && isClose && isChecked); // && va operatori false qidiradi
console.log(isAge || isClose || isChecked); // || yoki operatori true qidiradi

console.log(2 + 2 * 2 != 8); // berda ! ishlepti yani ne ravno