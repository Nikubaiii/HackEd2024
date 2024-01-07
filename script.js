document.getElementById('toggleDarkLight').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.innerText = (document.body.classList.contains('dark-mode')) ? 'Light Mode' : 'Dark Mode';

    const submitButton = document.getElementById('submitButton');
submitButton.classList.toggle('dark-mode-button');
});

document.getElementById('smallFont').addEventListener('click', function() {
changeFontSize('12px', this.id);
});

document.getElementById('normalFont').addEventListener('click', function() {
changeFontSize('14px', this.id);
});

document.getElementById('largeFont').addEventListener('click', function() {
changeFontSize('16px', this.id);
});

function changeFontSize(fontSize, clickedId) {

document.body.style.fontSize = fontSize;

// Set the font size for each font-selector button individually
const buttonSizes = {
    'smallFont': '12px',
    'normalFont': '14px',
    'largeFont': '16px'
};


const fontButtons = document.querySelectorAll('.font-selector');
fontButtons.forEach(button => {
    button.style.fontSize = buttonSizes[button.id];
});


const dropdownButtons = document.querySelectorAll('.dropdown-button');
dropdownButtons.forEach(button => {
    button.style.fontSize = fontSize;
    button.classList.remove('small-font', 'normal-font', 'large-font');
    button.classList.add(fontSize === '12px' ? 'small-font' : (fontSize === '14px' ? 'normal-font' : 'large-font'));
});


toggleActive(clickedId);
}

function changeButtonFontSize(fontSize) {
const submitButton = document.getElementById('submitButton');
submitButton.style.fontSize = fontSize;
}


document.getElementById('smallFont').addEventListener('click', function() {
    changeFontSize('12px', this.id);
    changeButtonFontSize('12px');
  });
  
  document.getElementById('normalFont').addEventListener('click', function() {
    changeFontSize('14px', this.id);
    changeButtonFontSize('14px');
  });
  
  document.getElementById('largeFont').addEventListener('click', function() {
    changeFontSize('16px', this.id);
    changeButtonFontSize('16px');
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
    const text = generateText(); // Function to generate text content for the file

    setTimeout(function() {
        window.location.href = 'results.html';
    }, 250);
});

function generateText() {
    // Generate text content for the file based on user inputs
    // Concatenate 'Needs' and 'Allergens' data into a string
    return `Needs: [list of needs]\nAllergens: [list of allergens]`;
}
