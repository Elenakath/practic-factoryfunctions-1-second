const createVehicle = function (type, numWheels, color) {
    const vehicle = {
        type: type,
        numWheels: numWheels,
        color: color
    }
    return vehicle
};

const car = createVehicle("car", 4, "blue");
const bike = createVehicle("Bike", 2, "red");
const skateboard = createVehicle("skateboard", 4, "multi-color");

const myVehicles = [car, bike, skateboard];

for (let vehicle of myVehicles) {
    for (let key in vehicle) {
        console.log(key, vehicle[key]);
    }
};