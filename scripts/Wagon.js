class Wagon {

    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []

    }

    getAvailableSeatCount () {
        return this.capacity - this.passengers.length
     
    }

    join (traveler) {
        if (this.getAvailableSeatCount() > 0) {
        this.passengers.push(traveler)
        } 
    }

    shouldQuarantine () {
        let sickPeople = this.passengers.filter ((Traveler) => Traveler.isHealthy === false) 
        if (sickPeople.length > 0) {
        return true
        } else {
        return false
        }
       
        }

    

    totalFood () {
        let allFood = 0
        for (let index = 0; index < this.passengers.length; index += 1){
            let currentTraveler = this.passengers[index] 
            allFood += currentTraveler.food 
        }

        return allFood

    }
}