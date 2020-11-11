const membersMax = 8;
let membersCount = 1
const addButtons = document.getElementsByClassName("add")
const delButtons = document.getElementsByClassName("delete")
const cardContainer = document.getElementById("container")
const cards = document.getElementsByClassName("card")
let membersInformations = ""

//Event listener on add button
for(let index = 0; index < addButtons.length; index++){
    addButtons[index].addEventListener("click", function () {
        if(membersCount < membersMax){
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
        }else{
            alert("Nombre de membres maximale atteint")
        }
    });
}

//Event listener on delete button
for(let index = 0; index < delButtons.length; index++){
    delButtons[index].addEventListener("click", function (){
        if(membersCount > 1){
            membersCount--
            cardContainer.removeChild(cardContainer.lastElementChild)
            updateCardsNumber()
        }else{
            alert("Un membre au minimum !")
        }
    })
}

//Event listener for card confirmation
for(let index = 0; index < cards.length; index++){
    cards[index].querySelector('.btn-sm').addEventListener('click', function (){
        let inputs = cards[index].querySelectorAll('input')
        for(let j =0; j < inputs.length; j++){
            inputs[j].setAttribute('disabled', "")
        }
    })
}

function getCardInformation(card){
    let nom = card.querySelector(".nom-input").value
    let prenom = card.querySelector(".prenom-input").value
    let instrument = card.querySelector(".instrument-input").value
}

function updateCardsNumber(){
    for(let index = 0; index < cardContainer.childNodes.length; index++){
        cards[index].firstElementChild.innerHTML = "MEMBRE " + (index + 1)
    }
}