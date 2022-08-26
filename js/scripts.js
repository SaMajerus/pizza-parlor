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

  //Pizza Size
  if(size === "s") {
    price += 1.00; 
  } else if(size === "m") {
    price += 1.50; 
  } else if(size === "l") {
    price += 2.50; 
  } else {  //(size === "xl")
    price += 3.50; 
  } 

  //Toppings
  let numAddit;  //Short for "number of additional toppings".   (If toppings.length > 2, then the result of  'toppings.length-2' is saved here.) 
  if(toppings.length >= 2) { 
    price += 1.50;  //This happens regardless of the next line's conditional being True or False. 
    if(toppings.length > 2){
      numAddit = (toppings.length-2); 
      price += (0.75 * numAddit); 
    }
  } 

  return String(price); 
}

/*   UI Logic   */ 
//Code starts here

