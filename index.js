// YOUR CODE HERE
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk () {
        console.log('Beep Beep!');
    }

    performMaintenance() {
        const carMaintenance = setTimeout(function() {
        console.log('Maintenance Complete')
        }, 3000)
    }
}

const mySweetRide = new Car('Pontiac', 'Fiero', 1988)

mySweetRide.honk()
mySweetRide.performMaintenance()