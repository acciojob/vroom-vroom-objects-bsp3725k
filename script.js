// Complete the js code
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add a method to the Car prototype to get the make and model
Car.prototype.getMakeModel = function () {
    return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
    // Call the Car constructor to initialize make and model
    Car.call(this, make, model);
    this.topSpeed = topSpeed; // Initialize topSpeed
}

// Inherit the Car prototype in SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Reset the constructor of SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add a method to the SportsCar prototype to get the top speed
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
