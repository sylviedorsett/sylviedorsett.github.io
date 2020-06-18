const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing, comment out after finished
        const prophets = jsonObject['prophets']; //stores the results of converted response into an array
        for (let i = 0; i < prophets.length; i++ ) { //this loops through each index in the prophets array
        
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            p1.textContent = "Date of Birth: " + prophets[i].birthdate;
            p2.textContent = "Place of Birth: " + prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);

            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });

/* can also be written using arrow function syntax like this:
    fetch(requestURL)
        .then(response => response.json())
        .then(data => console.log(data));   

    can use a forEach using arrow function syntax like this instead of the for loop:
    const utah = prophets.filter(prophet => (prophet.birthplace == 'Utah));
    utah.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
    })  

    using backticks newer and easier/cleaner way for concatenation:
    - `${prophet.name} ${prophet.lastname}`;
*/






