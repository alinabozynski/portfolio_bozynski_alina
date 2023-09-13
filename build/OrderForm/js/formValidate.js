/******w***********
    
    Project 2 Javascript
    Name: Alina Bozynski
    Date: April 4 2022
    Description: Javascript file for Project 2: Forma Validation (Module 8).

******************/

const itemDescription = [
  "MacBook",
  "The Razer",
  "WD My Passport",
  "Nexus 7",
  "DD-45 Drums",
];
const itemPrice = [1899.99, 79.99, 179.99, 249.99, 119.99];
const itemImage = [
  "mac.png",
  "mouse.png",
  "wdehd.png",
  "nexus.png",
  "drums.png",
];
let numberOfItemsInCart = 0;
let orderTotal = 0;

/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
  //	Hides all error elements on the page
  hideErrors();

  //	Determine if the form has errors
  if (formHasErrors()) {
    // 	Prevents the form from submitting
    e.preventDefault();
    return false;
  }

  // Says everything is good, go ahead and sumbit
  return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e) {
  // Confirm that the user wants to reset the form.
  if (confirm("Clear order?")) {
    // Ensure all error fields are hidden
    hideErrors();

    // Set focus to the first text field on the page
    document.getElementById("qty1").focus();

    // When using onReset="resetForm()" in markup, returning true will allow
    // the form to reset
    return true;
  }

  // Prevents the form from resetting
  e.preventDefault();

  // When using onReset="resetForm()" in markup, returning false would prevent
  // the form from resetting
  return false;
}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {
  let errorFlag = false;

  if (numberOfItemsInCart == 0 && orderTotal == 0) {
    window.alert("You have no items in your cart.");

    if (!errorFlag) {
      document.getElementById("qty1").focus();
    }

    errorFlag = true;
  }

  let requiredFields = [
    "fullname",
    "address",
    "city",
    "province",
    "postal",
    "email",
    "cardname",
    "cardnumber",
  ];

  for (let i = 0; i < requiredFields.length; i++) {
    let text = document.getElementById(requiredFields[i]);

    if (text.value == null || text.value.trim() == "") {
      document.getElementById(requiredFields[i] + "_error").style.display =
        "block";

      if (!errorFlag) {
        text.focus();
        text.select();
      }

      // Raise the error flag
      errorFlag = true;
    }
  }

  let postalCode = document.getElementById("postal").value;
  let postalValidation = new RegExp(/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/);

  if (!postalValidation.test(postalCode)) {
    document.getElementById("postalformat_error").style.display = "block";

    if (!errorFlag) {
      document.getElementById("postal").focus();
      document.getElementById("postal").select();
    }

    // Raise error flag
    errorFlag = true;
  }

  let email = document.getElementById("email").value;
  let emailValidation = new RegExp(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  );

  if (!emailValidation.test(email)) {
    document.getElementById("emailformat_error").style.display = "block";

    if (!errorFlag) {
      document.getElementById("email").focus();
      document.getElementById("email").select();
    }

    // Raise error flag
    errorFlag = true;
  }

  let cardType = document.getElementsByName("cardtype");
  let cardSelectCount = 0;

  for (let i = 0; i < cardType.length; i++) {
    if (!cardType[i].checked) {
      cardSelectCount++;
    }
  }

  if (cardSelectCount == cardType.length) {
    document.getElementById("cardtype_error").style.display = "block";

    errorFlag = true;
  }

  let month = document.getElementById("month");

  if (month.selectedIndex == 0) {
    document.getElementById("month_error").style.display = "block";

    errorFlag = true;
  }

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;

  let year = document.getElementById("year");

  if (currentYear > year.options[year.selectedIndex].value) {
    document.getElementById("expiry_error").style.display = "block";

    errorFlag = true;
  } else if (currentYear == year.options[year.selectedIndex].value) {
    if (currentMonth >= month.value) {
      document.getElementById("expiry_error").style.display = "block";

      errorFlag = true;
    }
  }

  let cardNum = document.getElementById("cardnumber").value;
  let tenDigits = new RegExp(/^\d{10}$/);

  if (!tenDigits.test(cardNum)) {
    document.getElementById("invalidcard_error").style.display = "block";

    errorFlag = true;
  } else {
    let checkingFactors = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (i = 0; i < checkingFactors.length; i++) {
      let digit = String(cardNum)[i];
      let number = Number(digit);

      sum = sum + number * checkingFactors[i];
    }

    let checkDigit = 11 - (sum % 11);
    let lastDigit = Number(String(cardNum)[cardNum.length - 1]);

    if (checkDigit != lastDigit) {
      document.getElementById("invalidcard_error").style.display = "block";

      errorFlag = true;
    }
  }

  return errorFlag;
}

/*
 * Adds an item to the cart and hides the quantity and add button for the product being ordered.
 *
 * param itemNumber The number used in the id of the quantity, item and remove button elements.
 */
function addItemToCart(itemNumber) {
  // Get the value of the quantity field for the add button that was clicked
  let quantityValue = trim(document.getElementById("qty" + itemNumber).value);

  // Determine if the quantity value is valid
  if (
    !isNaN(quantityValue) &&
    quantityValue != "" &&
    quantityValue != null &&
    quantityValue != 0 &&
    !document.getElementById("cartItem" + itemNumber)
  ) {
    // Hide the parent of the quantity field being evaluated
    document.getElementById("qty" + itemNumber).parentNode.style.visibility =
      "hidden";

    // Determine if there are no items in the car
    if (numberOfItemsInCart == 0) {
      // Hide the no items in cart list item
      document.getElementById("noItems").style.display = "none";
    }

    // Create the image for the cart item
    let cartItemImage = document.createElement("img");
    cartItemImage.src = "images/" + itemImage[itemNumber - 1];
    cartItemImage.alt = itemDescription[itemNumber - 1];

    // Create the span element containing the item description
    let cartItemDescription = document.createElement("span");
    cartItemDescription.innerHTML = itemDescription[itemNumber - 1];

    // Create the span element containing the quanitity to order
    let cartItemQuanity = document.createElement("span");
    cartItemQuanity.innerHTML = quantityValue;

    // Calculate the subtotal of the item ordered
    let itemTotal = quantityValue * itemPrice[itemNumber - 1];

    // Create the span element containing the subtotal of the item ordered
    let cartItemTotal = document.createElement("span");
    cartItemTotal.innerHTML = formatCurrency(itemTotal);

    // Create the remove button for the cart item
    let cartItemRemoveButton = document.createElement("button");
    cartItemRemoveButton.setAttribute("id", "removeItem" + itemNumber);
    cartItemRemoveButton.setAttribute("type", "button");
    cartItemRemoveButton.innerHTML = "Remove";
    cartItemRemoveButton.addEventListener(
      "click",
      // Annonymous function for the click event of a cart item remove button
      function () {
        // Removes the buttons grandparent (li) from the cart list
        this.parentNode.parentNode.removeChild(this.parentNode);

        // Deteremine the quantity field id for the item being removed from the cart by
        // getting the number at the end of the remove button's id
        let itemQuantityFieldId = "qty" + this.id.charAt(this.id.length - 1);

        // Get a reference to quanitity field of the item being removed form the cart
        let itemQuantityField = document.getElementById(itemQuantityFieldId);

        // Set the visibility of the quantity field's parent (div) to visible
        itemQuantityField.parentNode.style.visibility = "visible";

        // Initialize the quantity field value
        itemQuantityField.value = "";

        // Decrement the number of items in the cart
        numberOfItemsInCart--;

        // Decrement the order total
        orderTotal -= itemTotal;

        // Update the total purchase in the cart
        document.getElementById("cartTotal").innerHTML =
          formatCurrency(orderTotal);

        // Determine if there are no items in the car
        if (numberOfItemsInCart == 0) {
          // Show the no items in cart list item
          document.getElementById("noItems").style.display = "block";
        }
      },
      false
    );

    // Create a div used to clear the floats
    let cartClearDiv = document.createElement("div");
    cartClearDiv.setAttribute("class", "clear");

    // Create the paragraph which contains the cart item summary elements
    let cartItemParagraph = document.createElement("p");
    cartItemParagraph.appendChild(cartItemImage);
    cartItemParagraph.appendChild(cartItemDescription);
    cartItemParagraph.appendChild(document.createElement("br"));
    cartItemParagraph.appendChild(document.createTextNode("Quantity: "));
    cartItemParagraph.appendChild(cartItemQuanity);
    cartItemParagraph.appendChild(document.createElement("br"));
    cartItemParagraph.appendChild(document.createTextNode("Total: "));
    cartItemParagraph.appendChild(cartItemTotal);

    // Create the cart list item and add the elements within it
    let cartItem = document.createElement("li");
    cartItem.setAttribute("id", "cartItem" + itemNumber);
    cartItem.appendChild(cartItemParagraph);
    cartItem.appendChild(cartItemRemoveButton);
    cartItem.appendChild(cartClearDiv);

    // Add the cart list item to the top of the list
    let cart = document.getElementById("cart");
    cart.insertBefore(cartItem, cart.childNodes[0]);

    // Increment the number of items in the cart
    numberOfItemsInCart++;

    // Increment the total purchase amount
    orderTotal += itemTotal;

    // Update the total puchase amount in the cart
    document.getElementById("cartTotal").innerHTML = formatCurrency(orderTotal);
  }
}

/*
 * Hides all of the error elements.
 */
function hideErrors() {
  // Get an array of error elements
  let error = document.getElementsByClassName("error");

  // Loop through each element in the error array
  for (let i = 0; i < error.length; i++) {
    // Hide the error element by setting it's display style to "none"
    error[i].style.display = "none";
  }
}

/*
 * Handles the load event of the document.
 */
function load() {
  hideErrors();

  //	Populate the year select with up to date values
  let year = document.getElementById("year");
  let currentDate = new Date();
  for (let i = 0; i < 7; i++) {
    let newYearOption = document.createElement("option");
    newYearOption.value = currentDate.getFullYear() + i;
    newYearOption.innerHTML = currentDate.getFullYear() + i;
    year.appendChild(newYearOption);
  }

  document.getElementById("submit").addEventListener("click", validate);

  document.getElementById("clear").addEventListener("click", resetForm);

  document.getElementById("addMac").addEventListener("click", function () {
    addItemToCart(1);
  });

  document.getElementById("addMouse").addEventListener("click", function () {
    addItemToCart(2);
  });

  document.getElementById("addWD").addEventListener("click", function () {
    addItemToCart(3);
  });

  document.getElementById("addNexus").addEventListener("click", function () {
    addItemToCart(4);
  });

  document.getElementById("addDrums").addEventListener("click", function () {
    addItemToCart(5);
  });
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);
