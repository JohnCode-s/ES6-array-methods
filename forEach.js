const products = [
  { id: 1, name: "Bread", price: 200, sold: false },
  { id: 2, name: "Sugar", price: 100, sold: true },
  { id: 3, name: "Chocolate", price: 150, sold: true },
  { id: 4, name: "Milk", price: 50, sold: false },
];

products.forEach((product, index) => {
    console.log(product.name);
});

// todo Outputs
// ? Bread
// ? Sugar
// ? Chocolate
// ? Milk


// Using for loop

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}