class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {
        this.food += 2
    }

    eat() {
        if (this.food > 0) {
            this.food -= 1
        }
        else {
            this.isHealthy = false
        }

    }
}

class Doctor extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)
    }

    heal(traveler) {
        traveler.isHealthy = true
    }

}

class Hunter extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)
        this.food = 2
    }

    hunt() {
        this.food += 5
    }

    eat() {
        if (this.food > 1) {
            this.food -= 2
        } else {
            this.food = 0
            this.isHealthy = false
        }

    }
    giveFood(traveler, numOfFoodUnits) {
        if (numOfFoodUnits <= this.food) {
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits
        }


    }

}
