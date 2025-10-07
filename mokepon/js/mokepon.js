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
        spanPetPlayer.innerHTML = 'Hipodoge';
    }
    else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = 'Capipepo';
    }
    else if (inputRatigueya.checked) {
        spanPetPlayer.innerHTML = 'Ratigueya';
    }
    else {
    alert("YOU MUST SELECT ONE PET");
    }

    petEnemySelection()
}

function petEnemySelection () {
    let randomAttack = random(1,3);
    let spanPetEnemyName = document.getElementById('petEnemyName')
    if (randomAttack == 1) {
        spanPetEnemyName.innerHTML = 'Hipodoge';
    }
    else if (randomAttack == 2) {
        spanPetEnemyName.innerHTML = 'Capipepo';
    }
    else {
        spanPetEnemyName.innerHTML = 'Ratigueya';
    }
}

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

window.addEventListener('load', gameStart)