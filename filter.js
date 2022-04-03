const products = [
  { id: 1, name: "Bread", price: 200, sold: false },
  { id: 2, name: "Sugar", price: 100, sold: true },
  { id: 3, name: "Chocolate", price: 150, sold: true },
  { id: 4, name: "Milk", price: 50, sold: false },
];

const cheapProducts = products.filter(product => product.price <= 100)
console.log(cheapProducts);


// todo Output
// ? [
// ?   { id: 2, name: 'Sugar', price: 100, sold: true },
// ?   { id: 4, name: 'Milk', price: 50, sold: false }
// ? ];


// Using for loop

let cheapItem = [];
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  if (product.price <= 100) {
    cheapItem.push(product);
  }
}