const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['rentals']; //stores the results of converted response into an array

        towns.forEach(rental => {

                let div1 = document.createElement('div');
                let div2 = document.createElement('div');
                let image = document.createElement('img'); 
                let sect = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p'); 
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');

                h2.innerHTML = rental.name;
                p1.innerHTML = `"Max Persons: ${rental.maxpersons}"`;
                p2.innerHTML = `Half Day w/ Reservation: ${rental.resHalf}`;
                p3.innerHTML = `Full Day w/ Reservation: ${rental.resFull}`;
                p4.innerHTML = `Half Day Walk-In: ${rental.walkHalf}`;
                p5.innerHTML = `Full Day Walk-In: ${rental.walkFull}`;
                image.innerHTML = rental.photo;
                image.setAttribute('src', `images/${rental.photo}`);
                image.setAttribute('alt', `images/${town.photo}`);
                sect.setAttribute('class', "jsonSection")

                div1.appendChild(div2);
                div2.appendChild(sect);
                div2.appendChild(img);
                sect.appendChild(h2);
                sect.appendChild(p1);
                sect.appendChild(p2);
                sect.appendChild(p3);
                sect.appendChild(p4);
                sect.appendChild(p5);

                document.querySelector('div.jsonDiv').appendChild(div1);
        });
    });