document.getElementById('toggleDarkLight').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.innerText = (document.body.classList.contains('dark-mode')) ? 'Light Mode' : 'Dark Mode';

    const submitButton = document.getElementById('submitButton');
    submitButton.classList.toggle('dark-mode-button');

    // Toggle dark mode for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.toggle('dark-mode-card');
    });

    // Toggle dark mode for results text
    const resultsText = document.querySelector('.results-text');
    resultsText.classList.toggle('dark-mode-text');
});

document.getElementById('title').addEventListener('click', function() {
    window.location.href = 'home.html';
  }
);


//Nik's Stuff

let cardCounter = 1; // Initialize a counter for the card numbers

// Function to create a card for each product with a dynamically generated number and name
function createCard(name) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("column");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");

  const numberElement = document.createElement("span");
  numberElement.classList.add("card-number");
  numberElement.textContent = cardCounter; // Use the cardCounter as the number
  numberElement.style.fontSize = "24px"; // Set font size
  numberElement.style.fontWeight = "bold"; // Set font weight
  cardHeader.appendChild(numberElement);

  const nameElement = document.createElement("p");
  nameElement.textContent = name;

  card.appendChild(cardHeader);
  card.appendChild(nameElement);
  cardDiv.appendChild(card);

  cardCounter++; // Increment the counter for the next card




//extra stuff






   // Add event listeners for mouse movement
   card.addEventListener("mousemove", handleMouseMove);
   card.addEventListener("mouseleave", resetTilt);
 
   return cardDiv;
 }
 
 // Function to handle mouse movement and update the card's tilt
 function handleMouseMove(event) {
   const card = event.currentTarget;
   const rect = card.getBoundingClientRect();
   const mouseX = (event.clientX - rect.left) / card.offsetWidth - 3;
   const mouseY = (event.clientY - rect.top) / card.offsetHeight - 3;
 
   card.style.setProperty("--mouse-x", mouseX);
   card.style.setProperty("--mouse-y", mouseY);
 }
 
 // Function to reset the card's tilt when the mouse leaves
 function resetTilt(event) {
   const card = event.currentTarget;
   card.style.setProperty("--mouse-x", 0);
   card.style.setProperty("--mouse-y", 0);
 }

//end

// Get the card container element
const cardContainer = document.getElementById("cardContainer");

const storedProducts = localStorage.getItem('finalProducts');
// Loop through the partialProducts array and create cards for each product
window.finalProducts = storedProducts ? JSON.parse(storedProducts) : [];

window.finalProducts.forEach(function(productName) {
  const cardElement = createCard(productName);
  cardContainer.appendChild(cardElement);
});

backButton.addEventListener('click', function() {
    window.location.href = 'home.html';
  }
);

// Get all card elements
const cards = document.querySelectorAll('.card');

// Calculate the maximum height among all cards
let maxHeight = 0;
cards.forEach(card => {
  const cardHeight = card.offsetHeight;
  if (cardHeight > maxHeight) {
    maxHeight = cardHeight;
  }
});

// Set the maximum height to all cards
cards.forEach(card => {
  card.style.height = `${maxHeight}px`;
});