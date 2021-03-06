// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        // this.health -= damage;

        // (this.health > 0) ? `${this.name} has received ${damage} points of damage`
        // : `${this.name} has died in act of combat`;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
        
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        // this.health -= damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    
    vikingAttack() {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        
        let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());

        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice([randomSaxon], 1);
        }
        
        return result;
    }

    saxonAttack() {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);        

        let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack());

        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice([randomViking], 1);
        }

        return result;

    }

    showStatus() {
        let result = "";

        if (!this.saxonArmy.length) {
            result = "Vikings have won the war of the century!";
        } else if (!this.vikingsArmy.length) {
            result = "Saxons have fought for their lives and survived another day...";
        } else {
            result = "Vikings and Saxons are still in the thick of battle.";
        }

        return result;
    }

}