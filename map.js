const products = [
  { id: 1, name: "Bread", price: 200, sold: false },
  { id: 2, name: "Sugar", price: 100, sold: true },
  { id: 3, name: "Chocolate", price: 150, sold: true },
  { id: 4, name: "Milk", price: 50, sold: false },
];

const halfPriceProducts = products.map(product => {
  return {
    ...product,
    price: product.price / 2
  }
});

console.log(halfPriceProducts);

// todo Outputs

// ? [
// ?  { id: 1, name: 'Bread', price: 100, sold: false }
// ?  {id: 2, name: 'Sugar', price: 50, sold: true}
// ?  {id: 3, name: 'Chocolate', price: 75, sold: true}
// ?  {id: 4, name: 'Milk', price: 25, sold: false}
// ? ]

// using for loop

const halfPrice = [];

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  halfPrice.push({
    ...product,
    price: product.price / 2
  })
}
