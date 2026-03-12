// variables from gameStart function
const sectionAttackSelection = document.getElementById("attack-selection");
const sectionreboot = document.getElementById("reboot");
const petPlayerButton = document.getElementById("pet-button");
const FireButton = document.getElementById("fire-button");
const WaterButton = document.getElementById("water-button");
const LandButton = document.getElementById("land-button");
const rebootButton = document.getElementById("reboot-button");

// variables from petPlayerSelection function
const sectionPetSelection = document.getElementById("pet-selection");
const inputHipodoge = document.getElementById("Hipodoge");
const inputCapipepo = document.getElementById("Capipepo");
const inputRatigueya = document.getElementById("Ratigueya");
const spanPetPlayer = document.getElementById("pet-player");

// variables from petEnemySelection function
const spanPetEnemy = document.getElementById("pet-enemy");

// variables from combat function
const spanEnemyLives = document.getElementById("enemy-lives");
const spanPlayerLives = document.getElementById("player-lives");

// variables from createMessage function
const messageSection = document.getElementById("result");
const enemyAttacks = document.getElementById("enemy-attacks");
const playerAttacks = document.getElementById("player-attacks");

// variables from createFinalMessage function
const rebootsection = document.getElementById("reboot");

let playerAttack;
let enemyAttack;
let battleResult;
let playerLives = 3;
let enemyLives = 3;

class Mokepon {
  constructor (name, photo, life, ) {
    this.name = name;
    this.photo = photo;
    this.life = life;
  }
}

let hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.webp", 5);
let capipepo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.webp", 5);
let ratigueya = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.webp", 5);

function gameStart() {
  sectionAttackSelection.style.display = "none";
  sectionreboot.style.display = "none";
  petPlayerButton.addEventListener("click", petPlayerSelection);
  // attacks buttons
  FireButton.addEventListener("click", fireAttack);
  WaterButton.addEventListener("click", waterAttack);
  LandButton.addEventListener("click", landAttack);

  // reboot button
  rebootButton.addEventListener("click", rebootGame);
}

function petPlayerSelection() {
  sectionPetSelection.style.display = "none";

  sectionAttackSelection.style.display = "flex";

  if (inputHipodoge.checked) {
    spanPetPlayer.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanPetPlayer.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanPetPlayer.innerHTML = "Ratigueya";
  } else {
    alert("YOU MUST SELECT ONE PET");
  }

  petEnemySelection();
}

function petEnemySelection() {
  let randomPet = random(1, 3);
  if (randomPet == 1) {
    spanPetEnemy.innerHTML = "Hipodoge";
  } else if (randomPet == 2) {
    spanPetEnemy.innerHTML = "Capipepo";
  } else {
    spanPetEnemy.innerHTML = "Ratigueya";
  }
}

// attack's messages

function fireAttack() {
  playerAttack = "FIRE";
  randomEnemyAttack();
}

function waterAttack() {
  playerAttack = "WATER";
  randomEnemyAttack();
}

function landAttack() {
  playerAttack = "LAND";
  randomEnemyAttack();
}

function randomEnemyAttack() {
  let randomAttack = random(1, 3);
  if (randomAttack == 1) {
    enemyAttack = "FIRE";
  } else if (randomAttack == 2) {
    enemyAttack = "WATER";
  } else {
    enemyAttack = "LAND";
  }

  combat();
}

function combat() {

  if (playerAttack == enemyAttack) {
    createMessage("!TIE¡");
  } else if (playerAttack == "FIRE" && enemyAttack == "LAND") {
    createMessage("!YOU HAVE WON¡");
    enemyLives--;
    spanEnemyLives.innerHTML = enemyLives;
  } else if (playerAttack == "LAND" && enemyAttack == "WATER") {
    createMessage("!YOU HAVE WON¡");
    enemyLives--;
    spanEnemyLives.innerHTML = enemyLives;
  } else if (playerAttack == "WATER" && enemyAttack == "FIRE") {
    createMessage("!YOU HAVE WON¡");
    enemyLives--;
    spanEnemyLives.innerHTML = enemyLives;
  } else {
    createMessage("!YOU HAVE LOST¡");
    playerLives--;
    spanPlayerLives.innerHTML = playerLives;
  }

  checkLives();
}

function checkLives() {
  if (enemyLives == 0) {
    createFinalMessage("You've won the match");
  } else if (playerLives == 0) {
    createFinalMessage("The enemy has won the match");
  }
}

function createMessage(battleResult) {

  let newPlayerAttack = document.createElement("p");
  let newEnemyAttack = document.createElement("p");

  messageSection.innerHTML = battleResult;
  newPlayerAttack.innerHTML = playerAttack;
  newEnemyAttack.innerHTML = enemyAttack;

  playerAttacks.appendChild(newPlayerAttack);
  enemyAttacks.appendChild(newEnemyAttack);
}

function createFinalMessage(finalResult) {
  messageSection.innerHTML = finalResult;
  // disable attack buttons
  FireButton.disabled = true;
  WaterButton.disabled = true;
  LandButton.disabled = true;

  rebootsection.style.display = "block";
}

function rebootGame() {
  location.reload();
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", gameStart);
