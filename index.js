function log(a) {
    console.log(a)
}
function primaryObject(title, text, id) {
    return {
        'id' : id,
        'title' : title,
        'text' : text,   
    }
}
const cardArray = []
const cardHolder = document.getElementById('card-holder')
const activeTitle = document.getElementById('title')
const activeText = document.getElementById('text')
const clearButton = document.getElementById('clear-btn')
const addButton = document.getElementById('add-btn')

clearButton.addEventListener('click', function() {
    activeTitle.value = ''
    activeText.value = ''
})

addButton.addEventListener('click', function() {
    if(!activeText.value || !activeTitle.value) return;
    cardArray.push(primaryObject(activeTitle.value, activeText.value))
    makeCards(cardArray)
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function makeCards(array) {
    removeAllChildNodes(cardHolder)
    array.forEach((element, i) => {
        element.id = i + 1
        let cardDiv = document.createElement('div')
        cardDiv.classList.add('cards')
        cardDiv.id = i+1
        cardHolder.appendChild(cardDiv);
        let cardTitle = document.createElement('h3')
        cardTitle.innerText = element.title
        let openButton = document.createElement('input')
        openButton.classList.add('unique-card')
        openButton.id = `open-${i+1}`
        openButton.value = 'open'
        cardDiv.appendChild(cardTitle)
        cardDiv.appendChild(openButton)
        addOpen(openButton)
    });
}

function addOpen(button) {
    button.addEventListener('click', function() {

    })
}

function makeModal() {
    
}