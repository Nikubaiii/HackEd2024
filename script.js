document.getElementById('toggleDarkLight').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.innerText = (document.body.classList.contains('dark-mode')) ? 'Light Mode' : 'Dark Mode';

    const submitButton = document.getElementById('submitButton');
submitButton.classList.toggle('dark-mode-button');
});

  
document.getElementById('title').addEventListener('click', function() {
  window.location.href = 'home.html';
});

function toggleActive(clickedId) {

const fontButtons = document.querySelectorAll('.font-selector');
fontButtons.forEach(button => {
    button.classList.remove('active');
});


const clickedButton = document.getElementById(clickedId);
clickedButton.classList.add('active');
}

const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(function(btn) {
btn.addEventListener('click', function() {
this.classList.toggle('selected');
});
});


document.getElementById('submitNew').addEventListener('click', function() {
    // Generate and download the text file
    const text = generateText(); // Function to generate text content for the file

    // Redirect to results page after a short delay (adjust time as needed)
    setTimeout(function() {
        window.location.href = 'results.html';
    }, 2000);
});