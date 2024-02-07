// 1st problem solved
function calculateMoney(ticketSale) {
    if (ticketSale <= 0) {
    return "Please give positive number";
    }
    const totalEarn = ticketSale * 120 - (500 + 8 * 50);
    return totalEarn;
}
// console.log(calculateMoney(10));
