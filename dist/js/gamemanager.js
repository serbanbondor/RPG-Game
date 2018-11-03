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
                player = new Player(classType, 150, 100, 0, 0, 0, 100, 0, 50);
                getHeroes.innerHTML = '<img src="img/heroes/' + 
                classType.toLowerCase() + '.jpg" class="img-avatar"><div style="width: 140px;"><h3>' + 'Stats:' +
                '</h3><p>Health: ' + player.health + '</p><p>Energy: ' + player.energy + 
                '</p><p>Agility: ' + player.agility + 
                '</p><p>Armor: ' + player.armor + '</p>' ;
                break;
            case 'mage':
                player = new Player(classType, 120, 0, 100, 0, 0, 0, 100,20);
                getHeroes.innerHTML = '<img src="img/heroes/' +
                classType.toLowerCase() + '.jpg" class="img-avatar"><div style="width: 140px;"><h3>' + 'Stats:' +
                '</h3><p>Health: ' + player.health + '</p><p>Mana: ' + player.mana + 
                '</p><p>Intellect: ' + player.intellect + 
                '</p></p><p>Armor: ' + player.armor + '</p>' ;
                break;
            case 'hunter':
                player = new Player(classType,160, 0, 0, 100, 0, 100, 0,40);
                getHeroes.innerHTML = '<img src="img/heroes/' + 
                classType.toLowerCase() + '.jpg" class="img-avatar"><div style="width: 140px;"><h3>' + 'Stats:' +
                '</h3><p>Health: ' + player.health + '</p><p>Focus: ' + player.focus + 
                '</p><p>Agility: ' + player.agility + 
                '</p></p><p>Armor: ' + player.armor + '</p>' ;
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
    let enemy00 = new Enemy("Goblin", 90, 100, 50, 100, 100, 0);
    let enemy01 = new Enemy("Troll", 110, 80, 150, 80, 100, 10);
    let enemy02 = new Enemy("Gnome", 115, 120, 100, 150, 100, 30);
    let enemy03 = new Enemy("Dwarf", 120, 150, 100, 100, 80, 20);
    // Choose a random enemy
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));
    switch (chooseRandomEnemy) {
        case 0:
            enemy = enemy00;
            getEnemy.innerHTML = '<img src="img/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + 
            enemy.enemyType + '" class="img-avatar"><div style="width: 140px;"><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + 
            enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Armor: ' + 
            enemy.armor + '</p>';
            break;
        case 1:
            enemy = enemy01;
            getEnemy.innerHTML = '<img src="img/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + 
            enemy.enemyType + '" class="img-avatar"><div style="width: 140px;"><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + 
            enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Agility: ' + enemy.agility + '</p><p>Armor: ' + 
            enemy.armor + '</p>';
            break;
        case 2:
            enemy = enemy02;
            getEnemy.innerHTML = '<img src="img/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + 
            enemy.enemyType + '" class="img-avatar"><div style="width: 140px;"><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + 
            enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Armor: ' + 
            enemy.armor + '</p>';
            break;
        case 3:
            enemy = enemy03;
            getEnemy.innerHTML = '<img src="img/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + 
            enemy.enemyType + '" class="img-avatar"><div style="width: 140px;"><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + 
            enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>intellect: ' + enemy.intellect + '</p><p>Armor: ' + 
            enemy.armor + '</p>';
            break;
        }
        getHeader.innerHTML = '<p>Task: Attack your enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
}


/*let gameManager = {
    startGame(classType) {
        this.setHero(classType);
        this.setFight();
    },
    setHero(classType) {  
        }
    },
    setFight() {
    }
}*/