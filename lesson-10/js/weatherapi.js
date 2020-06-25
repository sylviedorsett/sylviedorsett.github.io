const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4491eb92629e7b5e0ac20b732e39129e";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('currentTemp').textContent = Math.floor(jsObject.main.temp);
        document.getElementById('temp').textContent = Math.floor(jsObject.main.temp_max);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windSpeed').textContent = Math.ceil(jsObject.wind.speed);
    });

const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4491eb92629e7b5e0ac20b732e39129e";
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        const fiveDay = jsonObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(fiveDay);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;
        let i = 0;

        fiveDay.forEach(forecast => {
            let date = forecast.dt_txt;
            let d = new Date(date).getDay();
            let f = forecast.main.temp;
            const icon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;

            console.log(icon);

            document.getElementById(`day${day+1}`).textContent = weekdays[d];
            document.getElementById(`forecast${day+1}`).textContent = Math.floor(f);
            document.getElementById(`imagesrc${day+1}`).setAttribute('alt', forecast.weather[0].description);
            document.getElementById(`imagesrc${day+1}`).setAttribute('src', icon);
            day++;
            d++;
            i++;
        })
    });
