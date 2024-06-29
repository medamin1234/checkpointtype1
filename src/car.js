//IMPLEM CLASS
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.start = function () {
            console.log("Car engine started");
        };
        this.make = make;
        this.model = model;
        this.year = year;
    }
    return Car;
}());
//Create instance 
var mycar = new Car("Audi", "e-tron gt", 2021);
console.log(mycar);
