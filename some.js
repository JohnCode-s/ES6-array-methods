const products = [
  { id: 1, name: "Bread", price: 200, sold: false },
  { id: 2, name: "Sugar", price: 100, sold: true },
  { id: 3, name: "Chocolate", price: 150, sold: true },
  { id: 4, name: "Milk", price: 50, sold: false },
];

let isSold = products.some(product => product.sold);

console.log(isSold);

//true


// Usinf for loop

let isSold2 = false;
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  if (product.sold) {
    isSold2 = true;
    break;
  }
}
console.log(isSold2);
//true

