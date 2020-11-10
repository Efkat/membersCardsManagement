let membersCount = 1
const addButtons = document.getElementsByClassName("add")
const delButtons = document.getElementsByClassName("delete")
const cardContainer = document.getElementById("container")
//Event listener on add button
for(let index = 0; index < addButtons.length; index++){
    addButtons[index].addEventListener("click", function () {
        if(membersCount<8){
            membersCount++
            cardContainer.insertAdjacentHTML('beforeend', '<section class="card">\n' +
                '            <h1>MEMBRE X</h1>\n' +
                '            <input type="text" placeholder="Nom">\n' +
                '            <input type="text" placeholder="Prénom">\n' +
                '            <input type="text" placeholder="Instrument">\n' +
                '        </section>')
            console.log(membersCount)
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
            console.log(membersCount)
            cardContainer.removeChild(cardContainer.lastElementChild)
        }else{
            alert("Un membre au minimum !")
        }
    })
}