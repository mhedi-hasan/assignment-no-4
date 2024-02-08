//----> 1st problem solved <----
function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "Invalid number. Please enter a valid numeric value";
  }
  const totalEarn = ticketSale * 120 - (500 + 8 * 50);
  return totalEarn;
}
// console.log(calculateMoney(-130));

// ------------------------------------------------

//----> 2nd problem solved <----
function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid string . Please enter a valid string value";
  }
  const lastCharacters = name.slice(-1).toLocaleLowerCase();
  const validCharacters = ["a", "y", "i", "e", "o", "u", "w"];

  if (validCharacters.includes(lastCharacters)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}
// console.log(checkName('Jhankar'));

// ------------------------------------------------

//----> 3rd problem solved <----
function deleteInvalids(array) {
  let filterArray = []
  if(!Array.isArray(array)){
    return "Invalid Array!"
  }
  for (element of array){
    if(typeof(element)==='number'){
      if(isNaN(element)){
        continue
      }
      filterArray.push(element)  
    }
  }
  return filterArray
}
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))
// ------------------------------------------------

//----> 4th problem solved <----

function password(obj) {
    const { name,birthYear,siteName}=obj;
    if(name==null || birthYear==null|| siteName==null||birthYear.toString().length!==4){
      return "invalid"
      
    }
    return `${siteName[0].toUpperCase()+siteName.slice(1)}#${name}@${birthYear}`;
    
}
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }))
// ------------------------------------------------

//----> 5th problem solved <----
function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) && typeof livingCost !== "number") {
    return "Please! Ensure firstOne is an Array and secondOne is a Number";
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3000) {
      let tax = (arr[i] * 20) / 100;
      let afterTax = arr[i] - tax;
      sum += afterTax;
    } else {
      sum += arr[i];
    }
  }
  let savings = sum - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "You should Earn More";
  }
}
// console.log(monthlySavings(100, [ 900 , 2700 , 3400]))
