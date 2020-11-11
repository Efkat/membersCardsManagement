const membersMax = 8;
let membersCount = 1
const addButtons = document.getElementsByClassName("add")
const delButtons = document.getElementsByClassName("delete")
const cardContainer = document.getElementById("container")
const cards = document.getElementsByClassName("card")

//Event listener on add button
for(let index = 0; index < addButtons.length; index++){
    addButtons[index].addEventListener("click", function () {
        if(membersCount < membersMax){
            membersCount++
            cardContainer.insertAdjacentHTML('beforeend', '<section class="card text-white bg-primary m-3" style="max-width: 20rem">\n' +
                '            <div class="card-header">MEMBRE 1</div>\n' +
                '            <div class="card-body">\n' +
                '                <div class="form-group">\n' +
                '                    <input type="text" class="form-control my-1" placeholder="Nom">\n' +
                '                    <input type="text" class="form-control my-1" placeholder="Prénom">\n' +
                '                    <input type="text" class="form-control my-1" placeholder="Instrument">\n' +
                '                </div>\n' +
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

//Fonction to update the cards number
function updateCardsNumber(){
    for(let index = 0; index < cardContainer.childNodes.length; index++){
        cards[index].firstElementChild.innerHTML = "MEMBRE " + (index + 1)
    }
}