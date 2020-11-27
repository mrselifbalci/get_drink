
// You have a shopping robot and want to order some drinks from market.
// Write a function to programme your robot. Give your directions from home to the market on console.




function calcBottles(totalMoney, pricePerDrink) {
  return Math.floor(totalMoney / pricePerDrink);
}

function calcChange(totalMoney, pricePerDrink) {
  return totalMoney % pricePerDrink;
}

function getDrink(totalMoney, pricePerDrink) {
  let numberOfBootles = calcBottles(totalMoney, pricePerDrink);
  let myChange = calcChange(totalMoney, pricePerDrink);
  return ` Leave house.\n Turn left.\n Go to the market.\n Buy ${numberOfBootles} bottles of drinks.\n Come back to house.\n Bring back my change of ${myChange}$.`;
}
console.log(getDrink(100, 3));
