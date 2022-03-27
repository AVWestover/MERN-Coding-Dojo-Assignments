// NINJA CLASS

class Ninja {
    constructor (name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("Ninja name is: " + this.name);
    }

    showStats(){
        console.log(this.name + "-");
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }

    drinkSake(){
        this.health += 10;
        console.log(this.name + " drank sake, health is now: " + this.health);
    }
}

