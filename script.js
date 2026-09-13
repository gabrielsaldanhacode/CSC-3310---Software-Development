// 1. First, we create a little "dictionary" of our date spots.
const dateSpots = {
    livonia: {
        title: "AMC Livonia 20 & Bar Louie",
        description: "Catch a movie at the AMC 20 and walk right over to Bar Louie for late-night apps and drinks."
    },
    dearborn: {
        title: "Ford Drive-In",
        description: "A classic! Pack some blankets and snacks for a retro double-feature from the comfort of your car."
    },
    downtown: {
        title: "Campus Martius & Cliff Bell's",
        description: "Ice skating in the winter or lounging at the beach bar in summer, followed by live jazz at Cliff Bell's."
    }
};

// 2. Here is our required "encapsulated function". 
// It takes the area we clicked and updates the HTML text on the screen.
function displaySpotInfo(areaClicked) {
    // Select the HTML elements we want to change
    let titleBox = document.getElementById("spot-title");
    let descriptionBox = document.getElementById("spot-description");

    // Look up the info in our dictionary and change the text on the page
    titleBox.textContent = dateSpots[areaClicked].title;
    descriptionBox.textContent = dateSpots[areaClicked].description;
}

// 3. EVENT LISTENER 1: Clicking the map pins
// Grab all the buttons that have the class "map-pin"
const mapPins = document.querySelectorAll(".map-pin");

// Loop through each pin and attach a "click" listener
mapPins.forEach(function(pin) {
    pin.addEventListener("click", function() {
        // Figure out exactly which pin was clicked using our data-attribute
        let area = pin.getAttribute("data-spot");
        
        // Pass that area into our function above
        displaySpotInfo(area);
    });
});

// 4. EVENT LISTENER 2: Submitting the suggestion form
const suggestionForm = document.getElementById("suggest-form");

suggestionForm.addEventListener("submit", function(event) {
    // This stops the page from doing its default behavior (refreshing) when we hit submit
    event.preventDefault();
    
    // DOM Manipulation: Hide the form completely
    suggestionForm.style.display = "none";
    
    // DOM Manipulation: Show the hidden "Thank you" message
    document.getElementById("thank-you-message").style.display = "block";
});