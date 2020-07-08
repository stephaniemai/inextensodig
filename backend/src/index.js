import Fleet    from './app/fleet.js';
import Location from './app/location.js';
import Vehicle  from './app/vehicle.js';

console.log('===========');
console.log(('Feature: Register a vehicle').toUpperCase());
console.log('===========');
// Scenario: I can register a vehicle
console.log(('==== Scenario: I can register a vehicle').toUpperCase());
//         Given my fleet
const myFleet = new Fleet('steph');
console.log('Given my fleet:');
console.log(myFleet);
//         And a vehicle
const myCar = new Vehicle('car');
console.log('And a vehicle:');
console.log(myCar);
//         When I register this vehicle into my fleet
console.log('When I register this vehicle into my fleet:');
myFleet.registerVehicle(myCar);
console.log(myFleet);
//         Then this vehicle should be part of my vehicle fleet
console.log('Then this vehicle should be part of my vehicle fleet');
console.log(myFleet.vehicles.includes(myCar));

//     Scenario: I can't register same vehicle twice
console.log(('==== Scenario: I can\'t register same vehicle twice').toUpperCase());
//         Given my fleet
console.log('Given my fleet:');
console.log(myFleet);
//         And a vehicle
console.log('And a vehicle:');
console.log(myCar);
//         And I have registered this vehicle into my fleet
console.log('And I have registered this vehicle into my fleet:');
console.log(myFleet);
//         When I try to register this vehicle into my fleet
//         Then I should be informed this this vehicle has already been registered into my fleet
console.log('When I try to register this vehicle into my fleet:');
console.log('Then I should be informed this this vehicle has already been registered into my fleet:');
try {
  myFleet.registerVehicle(myCar);
} catch(e) {
  console.error(e);
}
// console.log(myFleet);

//     Scenario: Same vehicle can belong to more than one fleet
console.log(('==== Scenario: Same vehicle can belong to more than one fleet').toUpperCase());

//         Given my fleet
console.log('Given my fleet:');
console.log(myFleet);
//         And the fleet of another user
const theirFleet = new Fleet('someone');
console.log('And the fleet of another user:');
console.log(theirFleet);
//         And a vehicle
const bike = new Vehicle('bicycle');
console.log('And a vehicle:');
console.log(bike);
//         And this vehicle has been registered into the other user's fleet
theirFleet.registerVehicle(bike);
console.log('And this vehicle has been registered into the other user\'s fleet:');
console.log(theirFleet);
//         When I register this vehicle into my fleet
myFleet.registerVehicle(bike);
console.log('When I register this vehicle into my fleet:');
console.log(myFleet);
//         Then this vehicle should be part of my vehicle fleet
console.log('Then this vehicle should be part of my vehicle fleet:');
console.log(myFleet.vehicles.includes(bike));




// Feature: Park a vehicle
console.log('===========');
console.log(('Feature: Park a vehicle:').toUpperCase());
console.log('===========');

//     Background:
console.log('==== Background:');
//         Given my fleet
console.log('Given my fleet:');
console.log(myFleet);
//         And a vehicle
myCar.location = '';
console.log('And a vehicle:');
console.log(myCar);
//         And I have registered this vehicle into my fleet
console.log('And I have registered this vehicle into my fleet:');
console.log(myFleet);

//     @critical
//     Scenario: Successfully park a vehicle
console.log(('==== Scenario: Successfully park a vehicle').toUpperCase());
//         And a location
const mucem = new Location(43.2967287, 5.3610255);
console.log('And a location:');
console.log(mucem);
//         When I park my vehicle at this location
myCar.park(mucem);
console.log('When I park my vehicle at this location:');
console.log(myCar);

//         Then the known location of my vehicle should verify this location
console.log(' Then the known location of my vehicle should verify this location:');
console.log(myCar.location === mucem);

//     Scenario: Can't localize my vehicle to the same location two times in a row
console.log(('==== Scenario: Can\'t localize my vehicle to the same location two times in a row').toUpperCase());
//         And a location
console.log('And a location:');
console.log(mucem);
//         And my vehicle has been parked into this location
console.log('And my vehicle has been parked into this location:');
console.log(myCar);
//         When I try to park my vehicle at this location
//         Then I should be informed that my vehicle is already parked at this location
console.log('When I try to park my vehicle at this location:');
console.log('Then I should be informed that my vehicle is already parked at this location:');
try {
  myCar.park(mucem);
} catch(e) {
  console.error(e);
}
