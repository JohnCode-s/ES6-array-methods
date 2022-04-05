const products = [
  { id: 1, name: "Bread", price: 200, sold: false },
  { id: 2, name: "Sugar", price: 100, sold: true },
  { id: 3, name: "Chocolate", price: 150, sold: true },
  { id: 4, name: "Milk", price: 50, sold: false },
];

// todo lets calculate the price of all the products

const totalPrice = products.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);

console.log(totalPrice);
// * 500


// ========================
// Using for loop

let summedPrice = 0;
let acc = 0;
for (let i = 0; i < products.length; i++) {
  const next = products[i];
  acc = acc + next.price
}
summedPrice = acc;
console.log(summedPrice)
// * 500