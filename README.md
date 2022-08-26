# Pizza Parlor

#### By Samuel Majerus 

####  A webpage that allows one to make a simulated pizza order, and get a receipt with their order and the total price in return. 

## Technologies Used

* HTML
* JavaScript 
* Cascading Style Sheets (CSS) 
* Git, Git BASH 
* GitHub (remote repository)
* Markdown (this document) 
* Markdown 'details' tag  (creates dropdown that contains, in this case, all the TDD Test Blocks) 


## Description
The user can select Pizza Type, Pizza Size, and whatever toppings they want (minimum of 2), then click the Order button. A summary of their order, followed by a price, will be printed in a Receipt section immediately below that. 
When I say a minimum of 2 toppings, I really do mean that. The UI Logic that handles user submissions filters out any Blank select-box inputs before creating the a new Pizza object. So, if the user selects toppings for the first 2 boxes but leaves the other 3 blank, the receipt only shows those two toppings in the order. 

This application is the Minimum Viable Product (MVP) iteration -- I plan to finish it out with more ordering options (like those included in the Menu text but not the input fields).  The input type will be changed to checkboxes for the Toppings as well, which will also save the space taken up by 5 select-boxes and their labels. 

Other notes: 
* This program's Business Logic was built up using Test-Driven Development (TDD). To see the tests I used, look no further than the next section. 
* For those wondering how to implement dropdowns/spoilers (like below) in Markdown,  I Googled 'details tag markdown' and found this website:  https://spinningnumbers.org/a/details.html#details-markdown-template .   (Yes, I used that template for the dropdown in this document) <br> 


## Tests
Please note: when a given Test is done, all of the testee-code is copied into Chrome's DevTools Console first  (and submitted with the ENTER key),   <em>before</em> the test code gets input and run.  

<details markdown=block>
<summary markdown=span>TDD Test-Blocks (Business Logic)</summary>

  Describe:  Pizza() <br>
  Test 1:  "It should return a new 'Pizza' object with three properties for Size, Toppings and Price, respectively. Object is printed with 'console.log' to confirm.   ('To-be-calculated' is a placeholder for the number-value returned in the 'calculatedPrice' field.)" <br>
    Code: <br>
      let newPie = new Pizza("medium", ["pepperoni", "sausage"]);  //Sauce and cheese added by default, currently -- (emphasis on 'currently') <br>
      console.log(newPie); <br>
    Expected Output:  {size:  'medium',  toppings: ["pepperoni", "sausage"],  calculatedPrice: 'To-be-calculated'} <br><br><br>

  Describe:  findPrice() <br>
  Test 1:  "It should sum the price values of size, toppings, etc  and return the calculated price (as a String or a Double, either works)." <br> 
    Code: <br> 
      const type = "normal"; <br> 
      const size = "M"; <br> 
      const toppings = ["pepperoni", "sausage"]; <br> 
      console.log(findPrice(type, size, toppings)); <br> 
    Expected Output:  '12.75' <br><br> 

  Test 2:  "It should print the calculated price after passing through each calculation block (pizza type, size and toppings, respectively), and end with the total price." <br> 
    Code: <br> 
      const type = "normal"; <br> 
      const size = "L"; <br> 
      const toppings = ["pepperoni", "italian sausage", "green peppers", "canadian bacon", "pineapple"]; <br> 
      console.log(findPrice(type, size, toppings)); <br> 
    Expected Output: <br>
      'Price (after Type calc) =  7.50'  <br>
      'Price (after Size calc) =  10.00'  <br>
      'Price (after Toppings calc (5 toppings)) =  14.50'  <br>
      '14.50' <br><br><br> 

  Describe:  generateReceipt() <br> 
  Test 1:  "It should print out the String values (with newline escape-characters applied) that lists out the user's ordered options, then prints the total price (which contains a placeholder for this test)." <br> 
    Code: <br> 
      function generateReceipt(pizzaType, pizzaSize, tppgs, price) { <br> 
        //Receipt is initialized with the 'type' and 'size' parts. (Toppings and price will follow). <br> 
        let receipt = "Type: "+ pizzaType + "\nSize: " + pizzaSize;  //[Assuming this is the case in JS also,] '\n' is an escape character for 'newline'. <br> 
        receipt = receipt + "\nToppings: " + String(tppgs) + "\n\n" + "Price:  $" + price; <br> 
        return receipt; <br> 
      } <br> 
      const type = "stuffed"; <br>
      const size = "XL"; <br> 
      const toppings = ["pepperoni", "italian sausage", "pineapple"]; <br> 
      const price = "xx.xx"; <br> 
      console.log(generateReceipt(type, size, toppings, price)); <br> 
    Expected Output:  <br> 
      "Type: stuffed <br> 
      Size: XL <br> 
      Toppings: pepperoni, italian sausage, pineapple <br><br> 
      Price: $xx.xx" 

</details> <br> 


## Setup/Installation Requirements

* All that's required to run this application -- at minimum -- is:  a decently-performing laptop, and a reliable Internet connection. 
* To Clone the program from the GitHub repo to your local machine: 
  * 1.)    Click the green button labelled 'Code'. Under the 'HTTPS' tab, there are 3 Options. If you know how to use Git in command line and have Git BASH installed, move on to Step 2a.    Otherwise, I recommend Option 3, where it says 'Download ZIP'. (move on to Step 2b).  
  * 2.)
    * a.)   If you selected Option 1:   Copy the link. Then, in Git BASH, navigate to the folder you want to put the files in. This can be your Desktop directory, or a different subfolder, whatever you prefer. Next, still in the Git BASH console, type the following (with the copied-link in place of 'HTTPS') and hit ENTER:  
    'git clone HTTPS' 
    Several lines of text will come up in the console -- that's the files being copied into whichever directory/folder you're in currently.  Then, do the following once your prompt line reappears:   While still in the console window, type 'pwd' and press ENTER.  This will display your current file path. Copy that by highlighting it and pressing 'Ctrl-C', and then pasting it in an easily-accessible word processor like Notepad for reference.    
    Next, open File Explorer, and navigate to through your files according to that File Path you just copy-pasted for reference.  Once you've done this, move on to Step 3. 
    
    * 2b.)  Once the '.zip' file is downloaded, unzip and open the folder.  Next, move on to Step 3.

  * 3.)  Before opening the HTML file, do the following:   right-click the containing folder (in which the newly-copied files are stored)  and select the option that says 'Pin to Quick Access'. That way, if the tab is accidentally closed for whatever reason and you want to reopen it, the folder can be accessed again in one step.  
  Move on to Step 4. 
  
  * 4.)  To open the webpage, double-click the file named  "pizza.html". The webpage will then be opened in a new browser tab.  Everything else after that should be self-explanatory. 
* IMPORTANT:  the webpage's interactive features will not work if the files' containing folder doesn't look something like this  (names with a '/' are folders):  
'css/'     'js/'     'pizza.html'     'README.md'
<br> 


## Known Bugs

* It's not a bug per-se, but currently the User has to scroll down a bit after clicking the 'Order' button to find the receipt.  


## License

Email me at ladolego@gmail.com for questions, ideas, concerns, or even any issues that you run into.  You may also clone or Fork the content in this Repo to fiddle around with it, if you like. 

Licensed through MIT. Copyright (c) 8/26/2022, Samuel Majerus. 