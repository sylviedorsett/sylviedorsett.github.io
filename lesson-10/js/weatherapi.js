const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4491eb92629e7b5e0ac20b732e39129e";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`; 
        const desc = jsObject.weather[0].description; 
        document.getElementById('imagesrc').textContent = imagesrc; 
        document.getElementById('icon').setAttribute('src', imagesrc); 
        document.getElementById('icon').setAttribute('alt', desc);
    });


/*const cityList = "http://bulk.openweathermap.org/sample/";

fetch(cityList)
    .then((response) => response.json())
    .then((jsObject) => {
        const city = jsObject['city'];

        city.forEach(cities => {
            if (cities.name == 'Preston' || cities.name == 'Soda Springs' || town.name == 'Fish Haven') {
                console.log(cities.id);
            }
        })
    })



const currentTemp = document.querySelector('#current-temp');

currentTemp.textContent = jsObject.main.temp;

const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;

icon.setAttribute('src', imagesrc);
icon.setAttribute("alt", desc);

});

cons apiURL = 

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);

const fivedayforecast = jsObject.list filter(x => x.dt_txt.includes('12:00:00'));

console.log(fivedayforecast);

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Th'z];

let day = 0;
fivedayforecast.forEach(forecast => {
    let d = new Date(forecast.dt_txt);
    document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp;
    document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
    day++;
    });
});*/
