const products = [
  { id: 1, name: "Bread", price: 200, sold: false },
  { id: 2, name: "Sugar", price: 100, sold: true },
  { id: 3, name: "Chocolate", price: 150, sold: true },
  { id: 4, name: "Milk", price: 50, sold: false },
];

let productOne = products.find((product) => product.id == 1);

console.log(productOne);

// { "id": 1, "name": "Bread", "price": 200, "sold": false }
