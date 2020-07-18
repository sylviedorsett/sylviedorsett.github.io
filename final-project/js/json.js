const requestURL = 'https://sylviedorsett.github.io/final-project/json/jsonfile.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const rentals = jsonObject['rentals']; 
  
        rentals.forEach(rental => {
                
            let div1 = document.createElement('div');
            let image = document.createElement('img'); 
            let sect = document.createElement('section');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p'); 
            let p4 = document.createElement('p');
            let p5 = document.createElement('p');

            h3.innerHTML = rental.name;
            p1.innerHTML = `Max Persons: ${rental.maxpersons}`;
            p2.innerHTML = `Half Day w/ Reservation: $${rental.resHalf}`;
            p3.innerHTML = `Full Day w/ Reservation: $${rental.resFull}`;
            p4.innerHTML = `Half Day Walk-In: $${rental.walkHalf}`;
            p5.innerHTML = `Full Day Walk-In: $${rental.walkFull}`;
            image.setAttribute('src', rental.photo);
            image.setAttribute('alt', rental.name);
            image.setAttribute('class', "rentalPics");
            sect.setAttribute('class', "jsonSection");
            div1.setAttribute('class', "rentalDivs");
            h3.setAttribute('class', "rentalH3");

            div1.appendChild(image);
            div1.appendChild(sect);
            sect.appendChild(h3);
            sect.appendChild(p1);
            sect.appendChild(p2);
            sect.appendChild(p3);
            sect.appendChild(p4);
            sect.appendChild(p5);

            document.querySelector('div.jsonDiv').appendChild(div1);
        });
    });
