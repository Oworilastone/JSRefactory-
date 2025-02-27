let trustedBuyer = true;
let amountDue = 150000;

if (trustedBuyer && amountDue > 10000) {
    console.log("✅ Credit sale allowed.");
} else {
    console.log("❌ Buyer not eligible for credit.");
}