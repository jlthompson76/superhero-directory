// PART 1
// Select submit button and call it submitButton

let submitButton = document.querySelector('#addHero');

// Select reset button and call it resetButton

let resetButton = document.querySelector('#resetForm');

// Select main content area and call it main

let main = document.querySelector('.main');

// Select how to use element and call it howToUse

let howToUse = document.querySelector('#howTo');

// Create an empty array for all heroes and call it heroes

let heroes = [];

// Create an empty string for all cards of heroes and call it cards

let cards = ""; // I'm not sure why this is needed?

// PART 3
// Create a function called createHeroesArray that takes in an event object

function createHeroesArray(e) {
    console.log('createHeroesArray function executed');

    // Prevent the button from doing what it naturally does (redirect to a new page)
    
    e.preventDefault();

    // Create a Hero constructor that takes in - name, quote, imgURL
    
    function Hero(name, quote, imgURL) {
        this.name = name;
        this.quote = quote;
        this.imgURL = imgURL;
    }

    // Create a new Hero object that stores the values of each input field (name, quote, imgURL)
    
    let hero = new Hero(
        document.getElementById('name').value,
        document.getElementById('quote').value,
        document.getElementById('imgURL').value
        )
        console.log(hero);

    // Push the new object into the heroes array
    
    heroes.push(hero);
    console.log(heroes);

    // call the createCard function (you will make this shortly)
    
    createCard();

    // call the addHero function (you will make this shortly)
    
    addHero();
}

// PART 4
// Create a function called createCard

function createCard() {
    console.log('createCard function executed');

    // create a loop to go through the heroes array

    for (let i = 0; i < heroes.length; i++) {
   
        // CREATE A CARD
        //create elements for div.card, h3, img, p
        
        let card = document.createElement('div');
        let header = document.createElement('h3');
        let img = document.createElement('img');
        let p = document.createElement('p');

        // add a class called hero-card to div.card element
        
        card.className = 'hero-card';

        // add a class called heroImg to the img element
        
        img.className = 'heroImg';

        // set attribute src to the img element with the imgURL from the heroes array

        img.src = heroes[i].imgURL;

        // create textnode with the hero's name and append it into the h3 element
        
        let heroName = document.createTextNode(heroes[i].name);
        header.appendChild(heroName);

        // create textnode with the hero's quote and append into the p element
       
        let heroQuote = document.createTextNode(`Quote: "${heroes[i].quote}"`);
        p.appendChild(heroQuote);

        // append h3 to card
        
        card.appendChild(header);

        // apend img to card
        
        card.appendChild(img);

        // apend p to card
        
        card.appendChild(p);

        // append card to main
 
        main.appendChild(card);
    }
}

// PART 5
// create a function called addHero

function addHero() {
    console.log('addHero function executed');

    // clear the main div of any content
    
    main.innerHTML = "";

    // call the createCard function
 
    createCard();
}

// There is no PART 6, looks like it was skipped by mistake?

// PART 7
// create a function called resetForm 

function resetForm() {
    console.log('resetForm function executed');

    // select the form tag and use the reset method to clear the content

    document.querySelector('form').reset();
}

// PART 8
// create a function called howToUsePopup that takes in an event object

function howToUsePopup(e) {
    console.log('howToUsePopup function executed');

    // Prevent the button from doing what it naturally does (redirect to a new page)

    e.preventDefault();

    // make an alert that will provide the following instructions "Fill out the form below to add a new hero onto the main section"

    let instructions = 'Fill out the form below to add a new hero onto the main section.';
    alert(instructions);
}

// PART 2
//create an event listener to the following:
    //submitButton = click, createHeroesArray
    // resetButton = click, resetForm
    // howToUse = click, howToUsePopup

submitButton.addEventListener('click', createHeroesArray);
resetButton.addEventListener('click', resetForm);
howToUse.addEventListener('click', howToUsePopup);
