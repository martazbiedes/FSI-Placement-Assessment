// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Marta Biedes" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let overallQuantity = gb + cc + sugar;

//refer to the class from html 
function updateQuantity(displayQuantity){
    let quantity = document.querySelector('.qty-total');
    quantity.textContent = displayQuantity;
}

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// we must have 1 or 0 to start
const QuantityUp = document.querySelector("quantity-up");
const QuantityDown = document.querySelector("quantity-down");

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb');
const ccPlusBtn = document.querySelector('#add-cc');
const sugarPlusBtn = document.querySelector('#add-sugar');

const gbMinusBtn = document.querySelector('#minus-gb');
const ccMinusBtn = document.querySelector('#minus-cc');
const sugarMinusBtn = document.querySelector('#minus-sugar');

// Event listener for clicks on the "+" button for Gingerbread cookies
gbQuantityUp.addEventListener('click', function() {
    if(gb < 0){
        quantity++;
        overallTotal++;
        updateQuantity('.qty-total'${quantity});
    }
});

gbQuantityDown.addEventListener('click', function() {
    if(gb > 0){
        quantity--;
        overallTotal--;
        updateQuantity('.qty-total'${quantity});
        }
});

// update quantity
function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity 
}

// Start quantity at 1 since product is in cart
let quantity = 1

// Buttons
const quantDown = document.querySelector('#quantity-down')
const quantUp = document.querySelector('#quantity-up')

// add event listener to decrease quantity
quantDown.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})

// add event listener to increase quantity
quantUp.addEventListener('click', function(){
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})

// Code to update name display
credit.textContent = `Created by ${yourName}`

// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons
