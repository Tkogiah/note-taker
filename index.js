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
        openButton.addEventListener('click', function() {
            let modalDiv = document.createElement('div')
            modalDiv.classList.add('modal')
            document.body.appendChild(modalDiv)
            
            let modalHeader = document.createElement('div')
            modalHeader.classList.add('header--modal')
            let modalBody = document.createElement('div')
            modalBody.classList.add('body--modal')
            modalBody.innerText = element.text
            modalDiv.appendChild(modalHeader)
            modalDiv.appendChild(modalBody)

            let modalHeaderTitle = document.createElement('div')
            modalHeaderTitle.classList.add('title--header--modal')
            modalHeaderTitle.innerText = element.title
            let modalHeaderButton = document.createElement('button')
            modalHeaderButton.classList.add('close-button--header--modal')
            modalHeaderButton.innerHTML = '&times;'
            modalHeader.appendChild(modalHeaderTitle)
            modalHeader.appendChild(modalHeaderButton)
            
            let overlay = document.createElement('div')
            overlay.id = overlay

        })
    });
}

function addOpen(button, array) {
    button
}

function makeModal() {

}