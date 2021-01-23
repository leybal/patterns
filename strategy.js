class Vehicle {
    travelTime() {
        return this.timeTaken;
    }
}

class Bus extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 30;
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 15;
    }
}

class Commute {
    travel(transport) {
        return transport.travelTime();
    }
}

const commute = new Commute();

console.log('by Bus', commute.travel(new Bus()));
console.log('by Car', commute.travel(new Car()));