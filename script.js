const desires = []
const despise = []

const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

var dict = {"Product Type":0,"Product Name":1,"Price ($)":2,"Oily Skin":3,"Skin Tone":4,"Hydration":5,"Brightening":6,"Acne":7,"Blackheads":8,"Wrinkles":9,"Blemishes":10,"Scarring":11,"N/A":12,"Budget":13,"Fragrances":14,"Silicones":15,"Alcohols":16,"Cruelty":17,"Aluminium":18}

var products = CSVToArray(
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
"Serum,Bigger Than Beauty Liquid Brilliance™ Super Serum,79,8,6,9,7,8,6,5,5,9,7,5,1,1,0,1,1\n",",",false);


document.getElementById('toggleDarkLight').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.innerText = (document.body.classList.contains('dark-mode')) ? 'Light Mode' : 'Dark Mode';

    const submitButton = document.getElementById('submitButton');
    submitButton.classList.toggle('dark-mode-button');
    }
);

document.getElementById('title').addEventListener('click', function() {
    window.location.href = 'home.html';
  }
);

const dropdownButtons = document.querySelectorAll('.middle-buttons button');

dropdownButtons.forEach(function(btn) {
    
    btn.addEventListener('click', function() {

        this.classList.toggle('selected');
        this.classList[1] === 'selected' ? desires.push(this.id) : desires.splice(desires.indexOf(this.id),1);
        console.log(desires);
    
    });

});

const dropdownButtons2 = document.querySelectorAll('.middle-buttons2 button');

dropdownButtons2.forEach(function(btn) {
    
    btn.addEventListener('click', function() {

        this.classList.toggle('selected');
        this.classList[1] === 'selected' ? despise.push(this.id) : despise.splice(despise.indexOf(this.id),1);
        console.log(despise);
    
    });

});

function findTopIndices(arr) {

    const indices = Array.from(arr.keys()); // Generate initial indices
    indices.sort((a, b) => arr[b] - arr[a]); // Sort indices based on array values
    return indices;

}

document.getElementById('submitNew').addEventListener('click', function() {
    var filteredProducts = []

    for (let i = 0; i < products.length - 1; i++){
        callPass = 0
        for (let j = 0; j < despise.length; j++){
            if (Number(products[i][dict[despise[j]]]) === 1){
                callPass = 1
            };
        };

        if (callPass === 0){
            filteredProducts.push(products[i])
        };

    };

    var vals = []

    for (let i = 0; i < filteredProducts.length-1; i++){
        var val = 0

        for (let j = 0; j < desires.length; j++){
            val += Number(filteredProducts[i][dict[desires[j]]])
        };
        
        vals.push(val)
    };

    console.log(vals)

    indexes = findTopIndices(vals)
    
    var presetMax = 0

    if (indexes.length >= 5){
        presetMax = 5
    }

    else{
        presetMax = indexes.length
    }

    for (let i = 0; i < presetMax; i++){
        console.log(filteredProducts[indexes[i]][1])
    };

    setTimeout(function() {
        window.location.href = 'results.html';
    }, 250);
});