const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attckMonster(mode) {
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(maxDamage);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Win!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You loss!");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw!");
  }
}

function attackHandler() {
  attckMonster("ATTACK")
}

function strongAttackHandler() {
  attckMonster("STRONG_ATTACK")
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
