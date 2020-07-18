const requestURL = 'https://sylviedorsett.github.io/final-project/json/jsonfile.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const rentals = jsonObject['rentals']; 
  
        rentals.forEach(rental => {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let td5 = document.createElement('td');
            let td6 = document.createElement('td');

            td1.innerHTML = rental.name;
            td2.innerHTML = rental.maxpersons;
            td3.innerHTML = `$${rental.resHalf}`;
            td4.innerHTML = `$${rental.resFull}`;
            td5.innerHTML = `$${rental.walkHalf}`;
            td6.innerHTML = `$${rental.walkFull}`;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);

            document.getElementById('jsonTable').appendChild(tr);
        });
    });
