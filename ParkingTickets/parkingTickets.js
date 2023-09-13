// Retrieve the HTML form element
let form = document.getElementById("form");

// Add a submit event listener and a function to perform when the form is submitted
form.addEventListener("submit", organizeData);

// Create a variable for the user-specified street to use in functions
var street;

/*
    getData function
    Prevents the form from submitting 
*/
function organizeData(e) {
  // Prevent the form from submitting while retrieving the entered street name
  e.preventDefault();

  // Store user input in an apprpriate variable
  street = new FormData(form).values().next().value;

  // Create and encode the URL request to the Open Data API
  let apiUrl =
    "https://data.winnipeg.ca/resource/bhrt-29rb.json?" +
    `$where=lower(street) LIKE lower('${street}')` +
    "&$order=issue_date DESC" +
    "&$limit=100";
  let encodedURL = encodeURI(apiUrl);

  // Clear the results if there are any currently displayed
  if (document.getElementById("noMatches")) {
    document.getElementById("noMatches").remove();
  }

  if (document.getElementById("resultsTitle")) {
    document.getElementById("resultsTitle").remove();
  }

  if (document.getElementsByClassName("info")) {
    var information = document.querySelectorAll(".info");

    information.forEach((info) => {
      info.remove();
    });
  }

  if (document.getElementById("refresh")) {
    document.getElementById("refresh").remove();
  }

  // Fetch the data with the user input in the API URL
  fetch(encodedURL)
    .then(function (response) {
      return response.json();
    })

    // Specify the function to perform after retrieving data
    .then(function (data) {
      createTickets(data);
    });

  // Reset the text box for the user to easily search another street name
  form.reset();
}

/*
    createTickets function
    This function will retrieve the parking ticket data for the user-specified street name
*/
function createTickets(data) {
  // Grab the body tag from the HTML
  let body = document.getElementsByTagName("body")[0];

  // If there are no results for the requested street name, display an appropriate message
  if (data.length == 0 || data == null) {
    var h3 = document.createElement("h3");
    h3.innerHTML = "No results match your request.";
    h3.setAttribute("id", "noMatches");
    body.appendChild(h3);
    // If there are results for the requested street name
  } else {
    // Create a title with an ID and add it to the HTML body
    var h3 = document.createElement("h3");
    h3.innerHTML =
      "100 Parking Tickets on '" + street + "' Organized by Latest Issue Date:";
    h3.setAttribute("id", "resultsTitle");
    body.appendChild(h3);

    // Loop through each parking ticket data set
    for (var i = 0; i < data.length; i++) {
      // Create a list and add it to the HTML body
      var ul = document.createElement("ul");
      body.appendChild(ul);

      // Retrieve JSON values for the list elements
      var li1 = document.createElement("li");
      li1.innerHTML = `Street: ${data[i].street}`;
      li1.setAttribute("class", "info");

      var li2 = document.createElement("li");
      li2.innerHTML = `Issue Date: ${data[i].issue_date}`;
      li2.setAttribute("class", "info");

      var li3 = document.createElement("li");
      li3.innerHTML = `Violation: ${data[i].violation}`;
      li3.setAttribute("class", "info");

      var li4 = document.createElement("li");
      li4.innerHTML = `Discounted Fine: ${data[i].discounted_fine}`;
      li4.setAttribute("class", "info");

      var li5 = document.createElement("li");
      li5.innerHTML = `Full Fine: ${data[i].full_fine}`;
      li5.setAttribute("class", "info");

      // Append the list elements to the list
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      ul.appendChild(li4);
      ul.appendChild(li5);
    }

    // Create a refresh button for the user to click to search
    //      another street if they have reached the bottom of the page
    let a = document.createElement("a");
    let link = document.createTextNode("Refresh Page");
    a.appendChild(link);
    a.href = "parkingTickets.html";
    a.setAttribute("id", "refresh");
    body.appendChild(a);
  }
}
