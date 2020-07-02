const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns']; //stores the results of converted response into an array

        towns.forEach(town => {
        
            if (town.name == 'Preston') {

                const events = town.events;
    
                let div1 = document.createElement('div');
                let h3 = document.createElement('h3');
                let hr = document.createElement('hr');


                h3.innerHTML = `${town.name} Events:`;
                div1.appendChild(h3);
                div1.appendChild(hr);
                
                for (i in events) {
                    let p = document.createElement('p');
                    p.innerHTML = events[i];
                    div1.appendChild(p);
                }

                document.getElementById('prestonEvents').appendChild(div1);
            }
        });
    });