function log(a) {
    console.log(a)
}

const cardArray = []
const cardHolder = document.getElementById('card-holder')
const activeTitle = document.getElementById('title')
const activeText = document.getElementById('text')
const clearButton = document.getElementById('clear-btn')
const addButton = document.getElementById('add-btn')

function makeCards() {
    for(let i = 0; i < 6; i++) {
        let cardDiv = document.createElement('div')
        cardDiv.classList.add('cards')
        cardDiv.id = i+1
        cardHolder.appendChild(cardDiv);
        let cardTitle = document.createElement('h3')
        cardTitle.innerText = 'filler'
        let openButton = document.createElement('input')
        openButton.classList.add('unique-card')
        openButton.id = `open-${i+1}`
        openButton.value = 'open'
        cardDiv.appendChild(cardTitle)
        cardDiv.appendChild(openButton)
        open
       
    }
}
makeCards()

clearButton.addEventListener('click', function() {
    activeTitle.value = ''
    activeText.value = ''
})

addButton.addEventListener('click', function() {
    log('hello from the add button')
})