/* Current Weather */
const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.5012452&lon=-86.9688341&units=imperial&APPID=4491eb92629e7b5e0ac20b732e39129e";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('currentTemp').textContent = Math.floor(jsObject.main.temp);
        document.getElementById('description').textContent = jsObject.weather[0].description;
        document.getElementById('tempHigh').textContent = Math.floor(jsObject.main.temp_max);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
    });

/* 5 Day Forecast */
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.5012452&lon=-86.9688341&units=imperial&APPID=4491eb92629e7b5e0ac20b732e39129e";
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsonObject) => {
    
        const fiveDay = jsonObject.list.filter(x => x.dt_txt.includes('12:00:00'));
    
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 1;
    
        fiveDay.forEach(forecast => {
            let date = forecast.dt_txt;
            let d = new Date(date).getDay();
            let f = forecast.main.temp;
            const icon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    
            document.getElementById(`day${day}`).textContent = weekdays[d];
            document.getElementById(`forecast${day}`).textContent = Math.floor(f);
            document.getElementById(`imagesrc${day}`).setAttribute('alt', forecast.weather[0].description);
            document.getElementById(`imagesrc${day}`).setAttribute('src', icon);
            day++;
            d++;
        })
    });
    