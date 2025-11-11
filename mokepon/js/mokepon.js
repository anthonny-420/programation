let playerAttack 
let enemyAttack
let battleResult
let playerLives = 3;
let enemyLives = 3;

function gameStart() {
    let petPlayerButton = document.getElementById('pet-button');
    petPlayerButton.addEventListener('click', petPlayerSelection);

    // attacks buttons 
    let FireButton = document.getElementById('fire-button');
    FireButton.addEventListener('click', fireAttack)
    let WaterButton = document.getElementById('water-button');
    WaterButton.addEventListener('click', waterAttack)
    let LandButton = document.getElementById('land-button');
    LandButton.addEventListener('click', landAttack)
    let rebootButton = document.getElementById('reboot-button')

    // reboot button
    rebootButton.addEventListener('click', rebootGame)

}

function petPlayerSelection() {
    let inputHipodoge = document.getElementById('Hipodoge');
    let inputCapipepo = document.getElementById('Capipepo');
    let inputRatigueya = document.getElementById('Ratigueya');
    let spanPetPlayer = document.getElementById('pet-player');

    if (inputHipodoge.checked) {
        spanPetPlayer.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked) {
        spanPetPlayer.innerHTML = 'Ratigueya';
    } else {
    alert("YOU MUST SELECT ONE PET");
    }

    petEnemySelection()
}

function petEnemySelection () {
    let randomPet = random(1,3);
    let spanPetEnemy = document.getElementById('pet-enemy')
    if (randomPet == 1) {
        spanPetEnemy.innerHTML = 'Hipodoge';
    } else if (randomPet == 2) {
        spanPetEnemy.innerHTML = 'Capipepo';
    } else {
        spanPetEnemy.innerHTML = 'Ratigueya';
    }
}

// attack's messages

function fireAttack () {
    playerAttack = 'FIRE';
    randomEnemyAttack()
}

function waterAttack () {
    playerAttack = 'WATER';
    randomEnemyAttack()
}

function landAttack () {
    playerAttack = 'LAND';
    randomEnemyAttack()
}

function randomEnemyAttack() {
    let randomAttack = random(1,3);
    if (randomAttack == 1) {
        enemyAttack = 'FIRE';
    } else if (randomAttack == 2) {
        enemyAttack = 'WATER';
    } else {
        enemyAttack = 'LAND';
    }

    combat()
}

function combat () {
    let spanPlayerLives = document.getElementById('player-lives');
    let spanEnemyLives = document.getElementById('enemy-lives');

    if (playerAttack == enemyAttack) {
        createMessage("!TIE¡")
    } else if (playerAttack == 'FIRE' && enemyAttack  == 'LAND' ) {
        createMessage("!YOU HAVE WON¡")
        enemyLives--
        spanEnemyLives.innerHTML = enemyLives
    } else if (playerAttack == 'LAND' && enemyAttack == 'WATER') {
        createMessage("!YOU HAVE WON¡")
        enemyLives--
        spanEnemyLives.innerHTML = enemyLives
    } else if (playerAttack == 'WATER' && enemyAttack == 'FIRE') {
        createMessage("!YOU HAVE WON¡")
        enemyLives--
        spanEnemyLives.innerHTML = enemyLives
    } else {
        createMessage("!YOU HAVE LOST¡")
        playerLives--
        spanPlayerLives.innerHTML = playerLives;
    }

    checkLives()
}

function checkLives() {
    if (enemyLives == 0) {
       createFinalMessage("I've won the match")
    } else if (playerLives == 0) {
        createFinalMessage("The enemy has won the match")
    }
}

function createMessage (battleResult) {

    let messageSection = document.getElementById('messages');
    
    paragraph = document.createElement('p');
    paragraph.innerHTML = "your pet has attacked with " + playerAttack + ", the enemy's pet has attacked with " + enemyAttack + " " + battleResult;
     
    messageSection.appendChild(paragraph)
}

function createFinalMessage (finalResult) {

    let messageSection = document.getElementById('messages');
    
    paragraph = document.createElement('p');
    paragraph.innerHTML = finalResult
     
    messageSection.appendChild(paragraph)

    // disable attack buttons

    let FireButton = document.getElementById('fire-button');
    FireButton.disabled = true
    let WaterButton = document.getElementById('water-button');
    WaterButton.disabled = true
    let LandButton = document.getElementById('land-button');
    LandButton.disabled = true
}

function rebootGame() {
    location.reload();
}

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

window.addEventListener('load', gameStart)