function calculateTotalCost(items) {
    let totalCost = 0;
    for (let i = 0; i < items.length; i++) {
        totalCost += items[i].price;
    }
    return totalCost.toFixed(2); // Fixing to 2 decimal places for currency
}
// Example:
const items = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const totalCost = calculateTotalCost(items);
console.log("Total Cost:", totalCost);