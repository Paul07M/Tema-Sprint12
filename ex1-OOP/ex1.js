class Car {
    constructor(brand, model, color, numberOfKilometer) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.numberOfKilometer = numberOfKilometer;
    }

    getProperties() {
        return `Car[brand = ${this.brand}, model = ${this.model}, color = ${this.color}, numberOfKilometer = ${this.numberOfKilometer}]`;
    }
}

function main() {

    const Car1 = new Car("Volvo", "XC - 60", "Black", 234_000);
    const Car2 = new Car("Mazda", "CX - 5", "Green", 111_000);
    const Car3 = new Car("Dacia", "BIGGSTER", "Blue", 20_000);

    console.log(Car1);
    console.log(Car2);
    console.log(Car3);
}

main();