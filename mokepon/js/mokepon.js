function gameStart() {
    let petPlayerButton = document.getElementById('pet-button');
    petPlayerButton.addEventListener('click', petPlayerSelection);
}

function petPlayerSelection() {
    let inputHipodoge = document.getElementById('Hipodoge');
    let inputCapipepo = document.getElementById('Capipepo');
    let inputRatigueya = document.getElementById('Ratigueya');
    let spanPetPlayer = document.getElementById('petPlayer');

    if (inputHipodoge.checked) {
        spanPetPlayer.innerHTML = 'Hipodoge'
    }
    else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = 'Capipepo'
    }
    else if (inputRatigueya.checked) {
        spanPetPlayer.innerHTML = 'Ratigueya'
    }
    else {
    alert("YOU MUST SELECT ONE PET");
    }
}

window.addEventListener('load', gameStart)