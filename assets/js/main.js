// Counter
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter'); 
    const start = 1; 
    const end = 370; 
    const duration = 5000; 

    const stepTime = duration / end; 
    let current = start; 

    function incrementCounter() {
        counterElement.textContent = current; 
        current++; 
        if (current <= end) {
            setTimeout(incrementCounter, stepTime); 
        }
    }
    incrementCounter();
});

document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter2'); 
    const start = 1; 
    const end = 30; 
    const duration = 5000; 

    const stepTime = duration / end;
    let current = start; 

    function incrementCounter() {
        counterElement.textContent = current; 
        current++; 
        if (current <= end) {
            setTimeout(incrementCounter, stepTime); 
        }
    }
    incrementCounter();
});

document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter3'); 
    const start = 1; 
    const end = 800; 
    const duration = 1000; 

    const stepTime = duration / end; 
    let current = start; 

    function incrementCounter() {
        counterElement.textContent = current; 
        current++; 
        if (current <= end) {
            setTimeout(incrementCounter, stepTime); 
        }
    }
    incrementCounter(); 
});


// Dark/Light Display
let white = true;

let dark_light = document.getElementById('button');

dark_light.addEventListener('click', function () {
    if (white) {
        document.body.style.backgroundColor = 'black';
        document.body.style.setProperty('color', 'white', 'important');

        let elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');
        elements.forEach(element => {
            element.style.color = 'white';
        });

        // Header
        let header = document.querySelector('.header-area');
        header.style.backgroundColor = '#111'; 
        header.style.color = '#fff'; 
 
        let headerTexts = header.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a');
        headerTexts.forEach(function(element) {
             element.style.color = '#fff'; 
        });

        let buttons = header.querySelectorAll('button');
        buttons.forEach(function(button) {
        let icon = button.querySelector('i');
        if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun'); 

        icon.style.color = '#fff'; 
        }
        });

 
        // Logo 
        let logo = document.querySelector('.logo img');
        logo.src = 'images/footer_logo.png';

        // Popular Places 
        let popularPlaces = document.querySelector('.popular-places');
        if (popularPlaces) {
            popularPlaces.style.backgroundColor = '#000';
            popularPlaces.style.color = 'white';

            let placeTexts = document.querySelectorAll('.popular-places h1, .popular-places h3, .popular-places p, .popular-places a');
            placeTexts.forEach(element => {
                element.style.color = 'white';
            });
        }
        let singlePlace = document.querySelectorAll('.single-place');
        singlePlace.forEach(element => {
            element.style.backgroundColor = '#111';
            element.style.borderColor = 'white';
        });

        // Form 
        let formElements = document.querySelectorAll('input, textarea, select');
        formElements.forEach(element => {
            element.style.color = 'white';
            element.style.backgroundColor = '#1e1e1e';
            element.style.borderColor = 'white'; 
        });

    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.setProperty('color', 'black', 'important');

        let elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');
        elements.forEach(element => {
            element.style.color = 'white'; 
        });

        // Header
        let header = document.querySelector('.header-area');
        header.style.backgroundColor = 'white'; 
        header.style.color = 'white'; 

        let headerTexts = header.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a');
        headerTexts.forEach(function(element) {
            element.style.color = 'black'; 
        });
        let buttons = header.querySelectorAll('button');
        buttons.forEach(function(button) {
        let icon = button.querySelector('i');
        if (icon) {
        icon.classList.remove('fa-sun'); 
        icon.classList.add('fa-moon');

        icon.style.color = '#000'; 
        }
        });

        // Logo 
        let logo = document.querySelector('.logo img');
        logo.src = 'images/logo.png'; 

        // Popular Destination
        let popularDestination = document.querySelector('.popular-destination');
        if (popularDestination) {
            popularDestination.style.backgroundColor = 'white';
            popularDestination.style.color = 'black';

        let placeTexts = document.querySelectorAll('.popular-destination h1, .popular-destination h3 .popular-destination a');
        placeTexts.forEach(element => {
        element.style.color = 'black';
        });
        let paragraphs = document.querySelectorAll('.popular-destination p');
        paragraphs.forEach(element => {
        element.style.color = 'white';
        });
        }

        // Popular Places 
        let popularPlaces = document.querySelector('.popular-places');
        if (popularPlaces) {
            popularPlaces.style.backgroundColor = 'white';
            popularPlaces.style.color = 'black';

        let placeTexts = document.querySelectorAll('.popular-places h1, .popular-places h3, .popular-places p, .popular-places a');
        placeTexts.forEach(element => {
        element.style.color = 'black'; 
        });
        let links = document.querySelectorAll('.popular-places a');
        links.forEach(link => {
        link.style.color = 'white';
        });
        }
         let singlePlace = document.querySelectorAll('.single-place');
         singlePlace.forEach(element => {
             element.style.backgroundColor = 'white';
             element.style.borderColor = 'black';
         });


         // Travel variation
        let travelVariation = document.querySelector('.travel-variation');
        if (travelVariation) {
            travelVariation.style.backgroundColor = 'white';
            travelVariation.style.color = 'black';

        let placeTexts = document.querySelectorAll('.travel-variation h1, .travel-variation h3, .travel-variation p, .travel-variation a');
        placeTexts.forEach(element => {
        element.style.color = 'black';
            });
        }

        // Recent trip 
        let recentTrip = document.querySelector('.recent-trip');
        if (recentTrip) {
            recentTrip.style.backgroundColor = 'white';
            recentTrip.style.color = 'black';
 
        let placeTexts = document.querySelectorAll('.recent-trip h1, .recent-trip h3, .recent-trip p, .recent-trip a');
        placeTexts.forEach(element => {
        element.style.color = 'black'; 
             });
        }

        // Form
        let formElements = document.querySelectorAll('input, textarea, select');
        formElements.forEach(element => {
            element.style.color = 'black';
            element.style.backgroundColor = 'white'; 
            element.style.borderColor = 'black'; 
        });
    }
    white = !white; 
});




// Popup
function openPopup() {
    document.getElementById('registerPopup').style.display = 'flex';
}
function closePopup() {
    document.getElementById('registerPopup').style.display = 'none';
}
