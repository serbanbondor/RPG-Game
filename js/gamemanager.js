const startGame = (classType) => {
    // Call setHero function
    setHero(classType);
    // Call setFight function
    setFight();

};

const setHero = (classType) => {
        let getHeroes = document.querySelector(".heroes");
        switch(classType) {
            case 'rogue':
                player = new Player(classType, 150, 75, 0, 0, 0, 100, 0, 50);
                getHeroes.innerHTML = '<img src="img/heroes/' + 
                classType.toLowerCase() + '.jpg" class="img-avatar"><div style="width: 140px;"><h3>' + 'Stats:' +
                '</h3><p class="player-health">Health: ' + player.health + '</p><p class="player-energy">Energy: ' + player.energy + 
                '</p><p>Agility: ' + player.agility + 
                '</p><p>Defence: ' + player.defence + '</p>' ;
                break;
            case 'mage':
                player = new Player(classType, 120, 0, 100, 0, 0, 0, 100, 20);
                getHeroes.innerHTML = '<img src="img/heroes/' +
                classType.toLowerCase() + '.jpg" class="img-avatar"><div style="width: 140px;"><h3>' + 'Stats:' +
                '</h3><p class="player-health">Health: ' + player.health + '</p><p class="player-mana">Mana: ' + player.mana + 
                '</p><p>Intellect: ' + player.intellect + 
                '</p></p><p>Defence: ' + player.defence + '</p>' ;
                break;
            case 'hunter':
                player = new Player(classType, 160, 0, 0, 50, 0, 100, 0, 40);
                getHeroes.innerHTML = '<img src="img/heroes/' + 
                classType.toLowerCase() + '.jpg" class="img-avatar"><div style="width: 140px;"><h3>' + 'Stats:' +
                '</h3><p class="player-health">Health: ' + player.health + '</p><p class="player-focus">Focus: ' + player.focus + 
                '</p><p>Agility: ' + player.agility + 
                '</p></p><p>Defence: ' + player.defence + '</p>' ;
                break;    
        }
};

const setFight = () => {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    getHeader.innerHTML = '<p>Get ready for battle!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="searchEnemy()">Search for an enemy!</a>';
};

const searchEnemy = () => {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemies");
    // Create enemy
    let enemy00 = new Enemy("Goblin", 90, 100,  0, 80, 0,  0);
    let enemy01 = new Enemy("Troll", 110,  80, 0,  100, 0, 10);
    let enemy02 = new Enemy("Gnome", 115, 120, 110, 0, 0, 30);
    let enemy03 = new Enemy("Dwarf", 120, 150, 0, 0,  120, 20);
    // Choose a random enemy
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));
    switch (chooseRandomEnemy) {
        case 0:
            enemy = enemy00;
            getEnemy.innerHTML = '<img src="img/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + 
            enemy.enemyType + '" class="img-avatar"><div style="width: 140px;"><h3>' + enemy.enemyType + '</h3><p class="enemy-health">Health: ' + 
            enemy.health + '</p><p class="enemy-mana">Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Defence: ' + 
            enemy.defence + '</p>';
            break;
        case 1:
            enemy = enemy01;
            getEnemy.innerHTML = '<img src="img/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + 
            enemy.enemyType + '" class="img-avatar"><div style="width: 140px;"><h3>' + enemy.enemyType + '</h3><p class="enemy-health">Health: ' + 
            enemy.health + '</p><p class="enemy-mana">Mana: ' + enemy.mana + '</p><p>Agility: ' + enemy.agility + '</p><p>Defence: ' + 
            enemy.defence + '</p>';
            break;
        case 2:
            enemy = enemy02;
            getEnemy.innerHTML = '<img src="img/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + 
            enemy.enemyType + '" class="img-avatar"><div style="width: 140px;"><h3>' + enemy.enemyType + '</h3><p class="enemy-health">Health: ' + 
            enemy.health + '</p><p class="enemy-mana">Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Defence: ' + 
            enemy.defence + '</p>';
            break;
        case 3:
            enemy = enemy03;
            getEnemy.innerHTML = '<img src="img/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + 
            enemy.enemyType + '" class="img-avatar"><div style="width: 140px;"><h3>' + enemy.enemyType + '</h3><p class="enemy-health">Health: ' + 
            enemy.health + '</p><p class="enemy-mana">Mana: ' + enemy.mana + '</p><p>intellect: ' + enemy.intellect + '</p><p>Defence: ' + 
            enemy.defence + '</p>';
            break;
        }
        getHeader.innerHTML = '<p>Task: Attack your enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="calcAttack()">Attack!</a>';
}

const calcAttack = () => {
    playerAttack();
    enemyAttack();
    changePlayerInfo();
    changeEnemyInfo();
}

// Player attacks
let baseDamage;
const playerAttack = () => {
    // Calculate crit chance
    let critChance = Math.floor((Math.random() * 100) + 1);
    if (critChance > 50) {
        critChance = 2;
    }
    else {
        critChance = 1;
    }
    // Calculate Damage with resources
    if (player.energy > 0) {
        baseDamage = (player.agility / 10)* 1.2 * critChance + Math.floor((Math.random() * 10) + 1);
    }
    else if (player.mana > 0) {
        baseDamage = (player.intellect / 10) * 1.8 + Math.floor((Math.random() * 10) + 1);
    }
    else if (player.focus > 0) {
        baseDamage = (player.agility / 10) * 1.2 * critChance + Math.floor((Math.random() * 10) + 1);    
    }
    // Damage without resources(basic damage)
    else {
        baseDamage = (player.agility / 10 ) + (+ player.intellect / 10) + (player.strength / 10) + Math.floor((Math.random() * 10) + 1);
    }
    alert('Your hero hit for ' + Math.floor(baseDamage) + ' damage.');
}

// Change player stats
const changePlayerInfo = () => {
    player.energy = player.energy - 15;
    player.mana = player.mana - 20;
    player.focus = player.focus - 10;
    enemy.health = enemy.health - baseDamage;
    let getEnemyHealth = document.querySelector(".enemy-health");
    let getPlayerEnergy = document.querySelector(".player-energy");
    let getPlayerMana = document.querySelector(".player-mana");
    let getPlayerFocus = document.querySelector(".player-focus");
    if (player.energy > 0) {
        getPlayerEnergy.innerHTML = "Energy: " + player.energy;
    }
    if (player.mana > 0) {
        getPlayerMana.innerHTML = "Mana: " + player.mana;
    }
    if (player.focus > 0) {
        getPlayerFocus.innerHTML = "Focus: " + player.focus;
    }
    if (enemy.health > 0) {
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
    } else {
        getEnemyHealth.innerHTML = "Health: 0";
        alert(`You won the battle! Refresh the page to start again`);
    }     
}

// Enemy attacks
let baseDamageEnemy;
const enemyAttack = () => {
    // Calculate crit chance
    let critChance = Math.floor((Math.random() * 100) + 1);
    if (critChance > 50) {
        critChance = 2;
    }
    else {
        critChance = 1;
    }
    // Calculate Damage with resources
    if (enemy.mana > 0) {
        baseDamageEnemy = Math.floor((enemy.intellect / 10 + enemy.strength / 10 + enemy.agility / 10) * 1.8 + Math.floor((Math.random() * 10) + 1));
    }
    // Damage without resources(basic damage)
    else {
        baseDamageEnemy = Math.floor((enemy.agility / 10 ) + (enemy.intellect / 10) + (enemy.strength / 10) + Math.floor((Math.random() * 10) + 1));
    }
    alert('Your enemy hit for ' + Math.floor(baseDamageEnemy) + ' damage.');
}

// Change player stats
const changeEnemyInfo = () => {
    enemy.mana = enemy.mana - 20;
    player.health = player.health - baseDamageEnemy;
    let getPlayerHealth = document.querySelector(".player-health");
    let getEnemyMana = document.querySelector(".enemy-mana");
    if (enemy.mana > 0) {
        getEnemyMana.innerHTML = "Mana: " + enemy.mana;
    }
    if (player.health > 0) {
        getPlayerHealth.innerHTML = "Health: " + player.health;
    } else {
        getPlayerHealth.innerHTML = "Health: 0";
        alert(`You lost the battle! Refresh the page to start again`);
    }     
}
