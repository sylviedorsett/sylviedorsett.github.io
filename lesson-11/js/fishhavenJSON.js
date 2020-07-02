//for Fish Haven
const fhapiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0381059&lon=-111.4005351&units=imperial&APPID=4491eb92629e7b5e0ac20b732e39129e";
fetch(fhapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('currentTemp').textContent = Math.floor(jsObject.main.temp);
        document.getElementById('temp').textContent = Math.floor(jsObject.main.temp_max);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windSpeed').textContent = Math.ceil(jsObject.wind.speed);

        var t = parseFloat(document.getElementById("temp").innerHTML);
        var s = parseFloat(document.getElementById("windSpeed").innerHTML);
        var chill = 35.74 + .6215 * t - 35.75 * Math.pow(s, .16) +  .4275 * t * Math.pow(s, .16);
        if (t < 51 && s > 3) {
            document.getElementById("windChill").innerHTML = Math.round(chill);
        }
        else {
            document.getElementById("windChill").innerHTML = "N/A";
        }
    });

const fhforecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0381059&lon=-111.4005351&units=imperial&APPID=4491eb92629e7b5e0ac20b732e39129e";
fetch(fhforecastURL)
    .then((response) => response.json())
    .then((jsonObject) => {

        const fiveDay = jsonObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 1;

        fiveDay.forEach(forecast => {
            let date = forecast.dt_txt;
            let d = new Date(date).getDay();
            let f = forecast.main.temp;
            const icon = `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;

            document.getElementById(`day${day}`).textContent = weekdays[d];
            document.getElementById(`forecast${day}`).textContent = Math.floor(f);
            document.getElementById(`imagesrc${day}`).setAttribute('alt', forecast.weather[0].description);
            document.getElementById(`imagesrc${day}`).setAttribute('src', icon);
            day++;
            d++;
        })
    });

//Fish Haven Events

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns']; //stores the results of converted response into an array

        towns.forEach(town => {
        
            if (town.name == 'Fish Haven') {

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

                document.getElementById('fishhavenEvents').appendChild(div1);
            }
        });
    });