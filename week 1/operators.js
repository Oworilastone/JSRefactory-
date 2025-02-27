// arithmetic operators
let pricePerKg = 3000;
let quantity = 10;
let totalCost = pricePerKg*quantity;
console.log("the price of beans is:"+totalCost);

// discount
let discount = 500;
let discountedPrice = totalCost - discount;
console.log("the discounted price is:"+discountedPrice);

// comparison operators
let buyerMoney = 5000;
let priceOfMaizePerKg = 4000;
console.log(buyerMoney == priceOfMaizePerKg);

// logical operators
let stockIsAvailable = true;
let buyerIsLegit = false;
console.log(stockIsAvailable && buyerIsLegit);

// conditional statements
let buyerName = "Stone";
let productName= "soya";
let receiptMessage = "Thank you!!" +buyerName +"you have just purchased" +quantity +"kg of" +productName;
console.log(receiptMessage);

// assignment operators(always used in loops)
let stock =100;
let sales =20;
stock -= sales;
console.log("the remaining stock is:"+stock);

