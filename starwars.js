const displayInfo = document.getElementById("ctn-main");



const planetsPrevious = document.getElementById("planets-previous");
const planetsNext = document.getElementById("planets-next");
const starshipsPrevious = document.getElementById("starships-previous");
const starshipsNext = document.getElementById("starships-next");
const peoplePrevious = document.getElementById("people-previous")
const peopleNext = document.getElementById("people-next")

// Variables Planets
let url_fetch = "https://swapi.dev/api/planets/?page=1";
let nextPlanets;
let previousPlanets;

planetsPrevious.addEventListener("click", () => pageNavigation(previousPlanets, 'planets'));
planetsNext.addEventListener("click", () => pageNavigation(nextPlanets, 'planets'));

// Functions Planets
async function fetchPlanets() {
    document.querySelector('.overlay').classList.add('active');
    let results = await fetch(url_fetch);
    const data = await results.json();
    nextPlanets = data.next;
    previousPlanets = data.previous;
    let planets = data.results;
    let outPut = ' ';
    document.querySelector('.overlay').classList.remove('active');
    planets.forEach(item => {
        outPut += `<div class="card card-planet">
                  <h2>${item.name}</h2>
                  <h5>Climate: ${item.climate}</h5>
                    <h5>Terrain: ${item.terrain}</h5>
                  <h5>Population: ${item.population}</h5>
                </div>`
    })
    displayInfo.innerHTML = outPut;
}

fetchPlanets();


//Function for the click "next" and "previous" button
function pageNavigation(url, searchType) {
    if (url) {
        url_fetch = new URL(url);
    }

    if (searchType === 'planets') {
        fetchPlanets()
            .then(response => {
                console.log(`Success: Planets`);
            })
            .catch(error => {
                console.log(`error!`)
                console.error(error)
            });
    } else if (searchType === 'starships') {
        fetchStarships()
            .then(response => {
                console.log(`Success: Starships`);
            })
            .catch(error => {
                console.log(`error!`)
                console.error(error)
            });
    } else {
        if (searchType === 'people') {
            fetchPeople()
                .then(response => {
                    console.log(`Success: People!`)
                })
                .catch(error => {
                    console.log(`error!`)
                    console.error(error)
                });
        }
    }

}

// Variables Starships
let url_starships = "https://swapi.dev/api/starships";
let nextStarships;
let previousStarships;

starshipsPrevious.addEventListener("click", () => pageNavigation(previousStarships, 'starships'));
starshipsNext.addEventListener("click", () => pageNavigation(nextStarships, 'starships'));

//Function Starships
async function fetchStarships() {
    document.querySelector('.overlay').classList.add('active');
    let results = await fetch(url_starships);
    const data = await results.json();
    console.log(data)
    nextStarships = data.next;
    previousStarships = data.previous;
    let starships = data.results;
    let outPut = ' ';
    document.querySelector('.overlay').classList.remove('active');
    starships.forEach(item => {
        outPut += `<div class="card card-starships">
                  <h2>${item.name}</h2>
                  <h5>Crew: ${item.crew}</h5>
                    <h5>passengers: ${item.passengers}</h5>
                  <h5>hyperdrive_rating: ${item.hyperdrive_rating}</h5>
                </div>`
    })
    displayInfo.innerHTML = outPut;
}
fetchStarships();

// Variables People
let url_people = "https://swapi.dev/api/people/?page=2";
let nextPeople;
let previousPeople;

peoplePrevious.addEventListener("click", () => pageNavigation(previousPeople, 'people'));
peopleNext.addEventListener("click", () => pageNavigation(nextPeople, 'people'));

//Function People
async function fetchPeople() {
    document.querySelector('.overlay').classList.add('active');
    let results = await fetch(url_people);
    const data = await results.json();
    console.log(data)
    nextPeople = data.next;
    previousPeople = data.previous;
    let people = data.results;
    let outPut = ' ';
    document.querySelector('.overlay').classList.remove('active');
    people.forEach(item => {
        outPut += `<div class="card card-people">
                  <h2>${item.name}</h2>
                  <h5>height: ${item.height}</h5>
                    <h5>birth year: ${item.birth_year}</h5>
                  <h5>gender: ${item.gender}</h5>
                </div>`
    })
    displayInfo.innerHTML = outPut;
}
fetchPeople();



