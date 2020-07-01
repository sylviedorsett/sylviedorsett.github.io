const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns']; //stores the results of converted response into an array

        towns.forEach(town => {
            if (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven') {

                let div1 = document.createElement('div');
                let div2 = document.createElement('div');
                let image = document.createElement('img'); 
                let sect = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p'); 
                let p4 = document.createElement('p');

                h2.innerHTML = town.name;
                p1.innerHTML = `"<em>${town.motto}</em>"`;
                p2.innerHTML = `Year Founded: ${town.yearFounded}`;
                p3.innerHTML = `Current Population: ${town.currentPopulation}`;
                p4.innerHTML = `Average Annual Rainfall: ${town.averageRainfall}`;
                image.innerHTML = town.photo;
                image.setAttribute('src', `images/${town.photo}`);
                image.setAttribute('alt', `images/${town.photo}`);
                sect.setAttribute('class', "jsonSection" )


                div1.appendChild(div2);
                div2.appendChild(image);
                div1.appendChild(sect);
                sect.appendChild(h2);
                sect.appendChild(p1);
                sect.appendChild(p2);
                sect.appendChild(p3);
                sect.appendChild(p4);

                document.querySelector('div.jsonDiv').appendChild(div1);
            }
        });

        towns.forEach( town => {
            if (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven') {
                let div3 = document.createElement('div');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');

                h2.innerHTML = `Upcoming Events in ${town.name}`;
                p1.innerHTML = town.events;

                div3.appendChild(h2);
                div3.appendChild(p1);

                document.querySelector('eventsPreston').appendChild(Div3);
                document.querySelector('eventsFishhaven').appendChild()
            }
        });
    });

/*   using backticks newer and easier/cleaner way for concatenation - `${prophet.name} ${prophet.lastname}`; */