const froyoFlavors = {};
const orders = prompt(
  "Enter the flavor of yogurt you'd like to order:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const splitOrder = orders.split(",");
froyoFlavors.orders = splitOrder;
console.log(froyoFlavors.orders);

const countOrder = {};

for (order in froyoFlavors.orders) {
  if (!countOrder[splitOrder[order]]) {
    countOrder[splitOrder[order]] = 1;
  } else {
    countOrder[splitOrder[order]]++;
  }
}

console.log(countOrder);
