
 // Week 4 Day 1 — forEach: a shorter way to loop
// forEach runs a function once for every item. No counter, no i.
//
// Every step works the same way:
//   1. Read the EXAMPLE. Save, and see what it does.
//   2. Copy it under YOUR TURN.
//   3. Change what the comment says.

// Your Kajun Cowboy Kitchen menu
const menu = [
  { name: "Chicken and Sausage Gumbo", price: 8.50 },
  { name: "Cajun Jambalaya", price: 9.00 },
  { name: "Shrimp Po Boy", price: 12.50 },
  { name: "Crawfish Etouffee", price: 13.00 },
];

// ---------- Step 1: Same job, no counter ----------
// THE for LOOP YOU ALREADY KNOW: logs every name.
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i].name);
}

// EXAMPLE: the same job with forEach.
function logName(item) {
  console.log(item.name);
}
menu.forEach(logName);

// YOUR TURN: log every item's PRICE.
function logPrice(item) {
  console.log(item.price);
}
menu.forEach(logPrice);


// ---------- Step 2: Write the function right inside ----------
// EXAMPLE: logs each food name.
menu.forEach(function (item) {
  console.log(item.name + " is on the menu");
});

// YOUR TURN: log each food name and price.
menu.forEach(function (item) {
  console.log(item.name + " costs $" + item.price);
});


// ---------- Step 3: Put the menu on the page ----------

// EXAMPLE: puts every NAME on the page, one per line.
// It's the same "keep what's there and add one more" move as Menu Card.


// YOUR TURN: don't copy this one. Change the example above,

const menuText = document.querySelector("#menu-text");
menuText.textContent = "";

menu.forEach(function (item) {
  menuText.textContent = menuText.textContent + item.name + ": $" + item.price + "\n";
});



// ---------- Extra (if you finish early): add it up ----------
// EXAMPLE: COUNT the items. count starts at 0 BEFORE forEach,
// and goes up by 1 INSIDE the function.
let count = 0;
menu.forEach(function (item) {
  count = count + 1;
});
console.log("Items:", count);

// YOUR TURN: add up every PRICE into a total. Log it.
// Change: count → total, and + 1 → + item.price

let total = 0;

menu.forEach(function (item) {
  total = total + item.price;
});

console.log("Menu total: $" + total.toFixed(2));
