const desires = []
const despise = []

const CSVToArray = (data, delimiter = ',', omitFirstRow = true) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

CSVToArray('a,b\nc,d'); // [['a', 'b'], ['c', 'd']];
CSVToArray('a;b\nc;d', ';'); // [['a', 'b'], ['c', 'd']];
CSVToArray('col1,col2\na,b\nc,d', ',', true); // [['a', 'b'], ['c', 'd']];
console.log(CSVToArray(
"Product Type,Product Name,Price ($),Oily Skin score,Skin tone score,Hydration score,Brightening score,Acne score,Dark spots score,Wrinkles score,Eye circles score,Scarring score,Blackhead score,Budget score,Fragrance-free,Silicone-free,Alcohol-free,Cruelty-free,Aluminum-free\n"+
"Cleanser,First Aid Beauty Pure Skin Face Cleanser,32.5,7,6,8,6,7,8,5,5,7,6,5,1,1,0,1,1\n"+
"Cleanser,SkinCeuticals GENTLE CLEANSER,56,5,7,9,8,9,5,7,6,6,8,5,1,0,1,0,1\n"+
"Cleanser,CeraVe HYDRATING Daily Face Wash,20,8,5,7,6,5,7,5,6,8,8,9,1,1,0,0,1\n"+
"Cleanser,Neutrogena Ultra Gentle Daily Cleanser,10.5,8,8,6,7,6,5,5,6,8,7,8,1,1,0,1,0\n"+
"Cleanser,CeraVe FOAMING Face Cleanser,21.28,6,7,7,6,8,7,7,7,6,8,8,1,0,0,0,0\n"+
"Cleanser,Paulas Choice Resist Optimal Results Hydrating Cleanser,52,9,8,6,5,5,8,5,8,5,5,5,1,1,1,1,0\n"+
"Cleanser,Dr. Loretta Gentle Hydrating Cleanser,40,5,6,8,9,9,6,8,5,7,6,6,1,1,0,0,0\n"+
"Cleanser,Youth to the People Superfood Gentle Antioxidant Refillable Cleanser,53,8,5,5,7,6,5,6,9,8,7,6,0,1,0,0,1\n"+
"Cleanser,omy Nutri-B5 Milk Cleanser,30,7,9,9,8,7,9,9,6,9,9,7,0,1,0,0,1\n"+
"Moisturizer,CeraVe Moisturizing Cream,28,5,5,5,5,8,5,7,7,5,8,9,1,1,0,0,1\n"+
"Moisturizer,Neutrogena Hydro Boost Face Moisturizer,22.49,9,7,7,6,5,9,5,5,8,5,5,1,0,0,0,1\n"+
"Moisturizer,Cetaphil Daily Hydrating Lotion with Hyaluronic Acid,16,6,6,8,9,9,8,8,8,7,9,6,1,1,0,0,1\n"+
"Moisturizer,Paulas Choice RESIST Skin Restoring Moisturizer with SPF 50,13,8,8,6,7,5,7,6,9,6,7,7,1,1,1,1,1\n"+
"Moisturizer,La Mer THE NEW MOISTURIZING SOFT CREAM,1810,7,9,9,8,8,6,5,5,9,6,1,1,1,0,1,1\n"+
"Moisturizer,La Roche-Posay Toleriane Sensitive Face Cream,26.5,9,5,5,9,6,5,9,6,5,9,7,1,1,1,1,1\n"+
"Moisturizer,Tatcha Dewy Skin Cream Plumping & Hydrating Moisturizer,31,5,8,8,5,9,9,7,7,8,5,4,0,1,0,0,1\n"+
"Moisturizer,Proactiv Green Tea Moisturizer,34,6,6,7,8,7,8,8,9,7,8,6,0,0,0,0,1\n"+
"Moisturizer,BYOMA Moisturizing Gel-Cream,19.5,8,9,6,6,5,7,6,8,6,7,6,0,1,1,1,1\n"+
"Moisturizer,GOOD MOLECULES Lightweight Daily Moisturizer,16,5,7,9,7,8,5,5,5,9,6,7,1,1,1,1,1\n"+
"Serum,The Ordinary Hyaluronic Acid 2% + B5 Hydrating Serum,10.4,7,5,5,5,6,6,9,6,8,5,9,1,1,1,0,1\n"+
"Serum,The Ordinary Niacinamide 10% + Zinc 1%,6.6,9,9,8,9,9,8,8,8,5,9,9,1,1,1,0,1\n"+
"Serum,The Ordinary Retinol 1% in Squalane,12.1,6,8,7,8,5,5,7,7,7,8,9,1,1,1,0,1\n"+
"Serum,Paulas Choice C15 Vitamin C Super Booster,76,8,7,6,6,7,7,6,9,6,6,4,1,1,0,0,0\n"+
"Serum,Neutrogena Hydro Boost Hydrating Serum,40,5,6,9,7,8,9,5,5,9,7,7,0,1,0,0,1\n"+
"Serum,CeraVe Hyaluronic Acid Face Serum,19.2,7,5,5,5,6,6,9,6,8,5,6,1,1,0,0,1\n"+
"Serum,Olay Regenerist Micro-Sculpting Serum,31.6,9,8,7,9,5,7,6,8,5,9,6,1,1,0,0,1\n"+
"Serum,Olay Vitamin C + Peptide 24 Serum,46,6,9,8,8,9,9,8,9,7,8,6,0,1,0,0,1\n"+
"Serum,Perricone MD COLD PLASMA PLUS+ ADVANCED SERUM CONCENTRATE,195.3,5,7,6,6,7,8,7,7,6,6,2,1,1,1,0,1\n"+
"Serum,Bigger Than Beauty Liquid Brilliance™ Super Serum,79,8,6,9,7,8,6,5,5,9,7,5,1,1,0,1,1\n",",",true));

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
desires.push(this.id)
console.log(desires)
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
