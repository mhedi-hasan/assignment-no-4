//----> 1st problem solved <----
function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "Please give positive number";
  }
  const totalEarn = ticketSale * 120 - (500 + 8 * 50);
  return totalEarn;
}
// console.log(calculateMoney(-10));

// ------------------------------------------------

//----> 2nd problem solved <----
function checkName(name) {
  if (typeof name !== "string") {
    return "Please give string value";
  }
  const lastCharacters = name.slice(-1);
  const validCharacters = ['A', 'y', 'i' , 'e' , 'o' , 'u', 'w'];

  if (validCharacters.includes(lastCharacters)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}
// console.log(checkName("Roiden"));
