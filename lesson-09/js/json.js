const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns']; //stores the results of converted response into an array
        const preston = towns.filter(town => (town.name == 'Preston'));
        const sodaSprings = towns.filter(town => (town.name == 'Soda Springs'));
        const fishHaven = towns.filter(town => (town.name == 'Fish Haven'));
        console.log(preston, sodaSprings, fishHaven);

        preston.forEach(town => {
            let divs = document.createElement('div');
            let image = document.createElement('img'); 
            let sect = document.createElement('section');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p'); 
            let p4 = document.createElement('p');

            h3.innerHTML = `${town.name}`;
            p1.innerHTML = `${town.motto}`;
            p2.innerHTML = `Year Founded: ${town.yearFounded}`;
            p3.InnerHTML = `Current Population: ${town.currentPopulation}`;
            p4.innerHTML = `Average Rainfall in Inches: ${town.averageRainfall}`;
            image.setAttribute('src', town.photo);
            image.setAttribute('alt', town.photo);

            divs.appendChild(image);
            divs.appendChild(sect);
            sect.appendChild(h3);
            sect.appendChild(p1);
            sect.appendChild(p2);
            sect.appendChild(p3);
            sect.appendChild(p4);
            document.querySelector('div.jsonDivs').appendChild(divs);
        });

        sodaSprings.forEach(town => {
            let divs = document.createElement('div');
            let image = document.createElement('img'); 
            let sect = document.createElement('section');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p'); 
            let p4 = document.createElement('p');

            h3.innerHTML = `${town.name}`;
            p1.innerHTML = `${town.motto}`;
            p2.innerHTML = `Year Founded: ${town.yearFounded}`;
            p3.InnerHTML = `Current Population: ${town.currentPopulation}`;
            p4.innerHTML = `Average Rainfall in Inches: ${town.averageRainfall}`;
            image.setAttribute('src', town.photo);
            image.setAttribute('alt', town.photo);

            divs.appendChild(image);
            divs.appendChild(sect);
            sect.appendChild(h3);
            sect.appendChild(p1);
            sect.appendChild(p2);
            sect.appendChild(p3);
            sect.appendChild(p4);
            document.querySelector('div.jsonDivs').appendChild(divs);
        });

        fishHaven.forEach(town => {
            let divs = document.createElement('div');
            let image = document.createElement('img'); 
            let sect = document.createElement('section');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p'); 
            let p4 = document.createElement('p');

            h3.innerHTML = `${town.name}`;
            p1.innerHTML = `${town.motto}`;
            p2.innerHTML = `Year Founded: ${town.yearFounded}`;
            p3.InnerHTML = `Current Population: ${town.currentPopulation}`;
            p4.innerHTML = `Average Rainfall in Inches: ${town.averageRainfall}`;
            image.setAttribute('src', town.photo);
            image.setAttribute('alt', town.photo);

            divs.appendChild(image);
            divs.appendChild(sect);
            sect.appendChild(h3);
            sect.appendChild(p1);
            sect.appendChild(p2);
            sect.appendChild(p3);
            sect.appendChild(p4);
            document.querySelector('div.jsonDivs').appendChild(divs);
        });
    });


/*
    using backticks newer and easier/cleaner way for concatenation:
    - `${prophet.name} ${prophet.lastname}`;
*/