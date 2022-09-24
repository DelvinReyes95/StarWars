const stars = 500 //Here is where the size of stars can be modified

// This will generate random stars on the page
for (let i =0; i < stars; i++) {
    let star = document.createElement("div")
    star.className = 'stars'
    const xy = randomPosition();
    star.style.top = xy[0] + 'px'
    star.style.left = xy[1] + 'px'
    document.body.append(star)
}

//Allow stars to appear randomly on screen
function randomPosition() {
    const y = window.innerWidth
    const x = window.innerHeight
    const randomX = Math.floor(Math.random() * x)
    const randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
}


setTimeout(()=> {
    const button = document.getElementById("btn-container")
    let a = document.createElement("a")
    a.href ="/StarWars/starwars.html"
    button.appendChild(a)
    a.innerText = "Click to begin"
    

},15000)
