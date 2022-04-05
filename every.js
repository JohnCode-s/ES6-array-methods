const products = [
  { id: 1, name: "Bread", price: 200, sold: false },
  { id: 2, name: "Sugar", price: 100, sold: false },
  { id: 3, name: "Chocolate", price: 150, sold: false },
  { id: 4, name: "Milk", price: 50, sold: false },
];

let inStock = products.every((product) => !product.sold);

console.log(inStock);

// true


//  Using for loop

let isStock2 = false;
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  if (!product.sold) {
    isStock2 = true;
    break;
  }
}
console.log(isStock2);
//true
