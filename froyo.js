const froyoFlavors = {};
const orders = prompt(
  "Enter the flavor of yogurt you'd like to order:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const splitOrder = orders.split(",");
froyoFlavors.orders = splitOrder;
console.log(froyoFlavors.orders);

const countOrder = [];

for (order in froyoFlavors.orders) {
  // console.log(order)
  if (!countOrder[order]) {
    countOrder.push(`${order}`);
  } else {
    countOrder.push(order++);
  }
}

console.log(countOrder);
