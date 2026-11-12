
 // Week 4 Day 2 — createElement

// Kajun Cowboy Kitchen menu
const menu = [
  { name: "Chicken and Sausage Gumbo", price: 8.50 },
  { name: "Cajun Jambalaya", price: 9.00 },
  { name: "Shrimp Po Boy", price: 12.50 },
  { name: "Crawfish Etouffee", price: 13.00 },
];

// Find the area for our cards
const area = document.getElementById("card-area");

// Step 1: Make the teacher's example card
const card = document.createElement("div");
card.className = "card p-3";
card.textContent = "Today's special";
area.appendChild(card);

// Step 1: Make your own card
const card2 = document.createElement("div");
card2.className = "card p-3";
card2.textContent = "Kajun Cowboy Kitchen";
area.appendChild(card2);

// Step 2 and 3: Make a styled card for every food item
menu.forEach(function (item) {
  const itemCard = document.createElement("div");
  itemCard.className = "card p-3 text-center shadow-sm";
  itemCard.textContent = item.name + ": $" + item.price.toFixed(2);
  area.appendChild(itemCard);
});

