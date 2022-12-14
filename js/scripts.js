/*   Business Logic   */
function Pizza(pType, pSize, topps) {   //Parameter data types (in order):   String,   array of Strings (created by parsing user input).
  this.pizzaType = pType; 
  this.size = pSize; 
  this.toppings = topps; 
  this.price = this.findPrice(pType, pSize, topps); 
} 

Pizza.prototype.findPrice = function(pieType, size, toppings) {
  let price = 0.00; 

  //Pizza Type  
  if (pieType === "Normal") {
    price += 7.50; 
  } else if (pieType === "Deep-dish") {
    price += 10.00; 
  } else {  //(pieType === "stuffed")
    price += 12.50; 
  } 

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

  //Toppings  
  if(toppings.length >= 2) { 
    price += 1.50;  //This happens regardless of the next line's conditional being True or False. 
    if(toppings.length > 2){ 
      price += (1.00 * (toppings.length-2)); 
    } 
  }  

  return String(price); 
} 

Pizza.prototype.generateReceipt = function() { 
  //Receipt is initialized with the 'type' and 'size' parts. (Toppings and price will follow).
  let receipt = "Type: "+ this.pizzaType + "\n Size: " + this.size;   //'\n' is an escape character for 'newline'.
  receipt = receipt + "\nToppings: " + String(this.toppings) + "\n\n" + "Price:  $" + this.price;
  return receipt; 
} 

/*   UI Logic   */ 
function handleOrder(event){ 
  event.preventDefault();  

  const pieType = document.getElementById("pizza-type").value; 
  const pieSize = document.getElementById("pizza-size").value; 
  const topp1 = document.getElementById("topping-1").value; 
  const topp2 = document.getElementById("topping-2").value; 
  const topp3 = document.getElementById("topping-3").value; 
  const topp4 = document.getElementById("topping-4").value; 
  const topp5 = document.getElementById("topping-5").value;  

  let allToppFields = [topp1, topp2, topp3, topp4, topp5];  //This saves Entered -- as well as Default (blank-selection) -- inputs.
  let toppsArr = [];  //This saves the User's inputs regarding what toppings to put on the Pizza.  

  allToppFields.forEach( function(entry) {   //Filters user entries from still-blank input fields. 
    if(!(entry === "default")) {  //Pushes given entry to toppings array  ('toppsArr'). 
      toppsArr.push(entry); 
    }
  }); 

  let newPie = new Pizza(pieType, pieSize, toppsArr);
   
  let orderSumm = newPie.generateReceipt();  //Stores 'receipt' String. 
  
  //Displaying receipt on webpage for user 
  document.getElementById("order-summary-hdr").removeAttribute("class"); //Reveals the 'order summary' header. 
  document.getElementById("order-summary").removeAttribute("class");  //Reveals the 'order summary' paragraph. 
  document.getElementById("order-summary").innerText = orderSumm; //Prints the receipt's String value for the user.
} 

window.addEventListener("load", function() { 
  const order = document.getElementById("order-form"); 
  order.addEventListener("submit", handleOrder); 
}); 
