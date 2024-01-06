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




// document.getElementById('submitNew').addEventListener('click', function() {
//     const selectedHelp = Array.from(document.querySelectorAll('#Section1 .dropdown-button.selected')).map(btn => btn.textContent).join(', ');
//     const selectedAllergens = Array.from(document.querySelectorAll('#Section2 .dropdown-button.selected')).map(btn => btn.textContent).join(', ');

//     const currentTime = new Date().toISOString().replace(/[-T:]/g, '').split('.')[0];
//     const fileName = `userinputs_${currentTime}.txt`;

//     const fileContent = `Needs: ${selectedHelp}\nAllergens: ${selectedAllergens}`;

//     download(fileName, fileContent);
// });

// function download(filename, content) {
//     const element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
//     element.setAttribute('download', filename);

//     element.style.display = 'none';
//     document.body.appendChild(element);

//     element.click();

//     document.body.removeChild(element);
// }




document.getElementById('submitNew').addEventListener('click', function() {
    // Generate and download the text file
    const currentTime = new Date().toLocaleString().replace(/,/g, '').replace(/\//g, '_').replace(/ /g, '_').replace(/:/g, ''); // Timestamp for filename
    const filename = `userinputs_${currentTime}.txt`;
    const text = generateText(); // Function to generate text content for the file
    download(filename, text); // Function to download the file

    // Redirect to results page after a short delay (adjust time as needed)
    setTimeout(function() {
        window.location.href = 'results.html';
    }, 2000);
});

function generateText() {
    // Generate text content for the file based on user inputs
    // Concatenate 'Needs' and 'Allergens' data into a string
    return `Needs: [list of needs]\nAllergens: [list of allergens]`;
}

function download(filename, text) {
    // Create an invisible link element to trigger the download
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

