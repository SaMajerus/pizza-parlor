/*   Business Logic   */
function Pizza(pType, pSize, topps) {   //Parameter data types (in order):   String,   array of Strings (created by parsing user input).
  this.pizzaType = pType; 
  this.size = pSize; 
  this.toppings = topps; 
  //this.calculatedPrice = this.findPrice(pSize, toppings); 
} 

/*Pizza.prototype.findPrice = function(pieType, size, toppings) {*/ 
function findPrice(pieType, size, toppings) {
  let price = 0.00; 

  //Pizza Type  
  if (pieType === "normal") {
    price += 7.50; 
  } else if (pieType === "deep-dish") {
    price += 10.00; 
  } else {  //(pieType === "stuffed")
    price += 12.50; 
  } 
  console.log("Price (after Type calc) =  " + String(price)); 

  //Pizza Size
  if(size === "S") {
    price += 1.00; 
  } else if(size === "M") {
    price += 1.50; 
  } else if(size === "L") {
    price += 2.50; 
  } else {  //(size === "XL")
    price += 3.50; 
  } 
  console.log("Price (after Size calc) =  " + String(price)); 

  //Toppings
  let numAddit;  //Short for "number of additional toppings".   (If toppings.length > 2, then the result of  'toppings.length-2' is saved here.) 
  if(toppings.length >= 2) { 
    price += 1.50;  //This happens regardless of the next line's conditional being True or False. 
    if(toppings.length > 2){ 
      numAddit = (toppings.length-2); 
      price += (1.00 * numAddit); 
    } 
  } 
  console.log("Price (after Toppings calc (" + toppings.length + " toppings)) =  " + String(price)); 

  return String(price); 
} 

/*   UI Logic   */ 
//Code starts here 

