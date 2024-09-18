const btn = document.querySelector('.btn-country');
document.addEventListener('DOMContentLoaded', function () {
    const countriesContainer = document.querySelector('.countries');

    const getCountryData = function(country){

        let request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        let [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
        <article class="country">
            <img class="country__img" src="${data.flags.svg}" alt="Flag of ${data.name.common}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>🌍</span>${(+data.population / 1000000).toFixed(1)} million people</p>
                <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(', ')}</p>
                <p class="country__row"><span>💰</span>${Object.values(data.currencies).map(cur => cur.name).join(', ')}</p>
            </div>
        </article>
        `;

        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });

    }
    
    getCountryData('egypt');
    getCountryData('palestine');
    getCountryData('saudi arabia');


});

 