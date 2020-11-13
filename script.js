const membersMax = 8;
let membersCount = 1
const addButton = document.getElementById("add")
const delButton = document.getElementById("delete")
const cardContainer = document.getElementById("container")
const cards = document.getElementsByClassName("card")
let membersInformations = ""
let membersDisableInput = document.getElementById('membresVariables')

//Event listener on add button
addButton.addEventListener("click", function () {
    if (membersCount < membersMax) {
        membersCount++
        cardContainer.insertAdjacentHTML('beforeend', ' <section class="card text-white bg-primary m-3" style="max-width: 20rem">\n' +
            '            <div class="card-header">MEMBRE 1</div>\n' +
            '            <div class="card-body">\n' +
            '                <div class="form-group">\n' +
            '                    <input type="text" class="form-control my-1 nom-input" placeholder="Nom">\n' +
            '                    <input type="text" class="form-control my-1 prenom-input" placeholder="Prénom">\n' +
            '                    <input type="text" class="form-control my-1 instrument-input" placeholder="Instrument">\n' +
            '                </div>\n' +
            '                <button type="button" class="btn btn-info btn-sm">Confirmer membre</button>\n' +
            '            </div>\n' +
            '        </section>')
        updateCardsNumber()
    } else {
        alert("Nombre de membres maximale atteint")
    }
});

//Member confirmation
addButton.addEventListener('click', function (){
    cardContainer.lastElementChild.querySelector('.btn-sm').addEventListener('click', function (){
        membersInformations += "\\" + getCardInformation(cardContainer.lastElementChild)
        membersDisableInput.setAttribute("value", membersInformations)
        let inputs = cardContainer.lastElementChild.querySelectorAll('input')
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].setAttribute('disabled', "")
        }
    })
})

//Event listener on delete button
delButton.addEventListener("click", function () {
    if (membersCount > 1) {
        membersCount--
        cardContainer.removeChild(cardContainer.lastElementChild)
        updateCardsNumber()
    } else {
        alert("Un membre au minimum !")
    }
})

//Event listener for card 0 confirmation
cards[0].querySelector('.btn-sm').addEventListener('click', function () {
    let inputs = cards[0].querySelectorAll('input')
    for (let j = 0; j < inputs.length; j++) {
        inputs[j].setAttribute('disabled', "")
    }
    membersInformations += getCardInformation(cards[0])
    membersDisableInput.setAttribute("value", membersInformations)
})

function getCardInformation(card) {
    let nom = card.querySelector(".nom-input").value
    let prenom = card.querySelector(".prenom-input").value
    let instrument = card.querySelector(".instrument-input").value
    return nom + '/' + prenom + '/' + instrument
}

function updateCardsNumber() {
    for (let index = 0; index < cardContainer.childNodes.length; index++) {
        cards[index].firstElementChild.innerHTML = "MEMBRE " + (index + 1)
    }
}