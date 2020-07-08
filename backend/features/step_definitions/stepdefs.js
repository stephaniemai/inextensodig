// const { Fleet } = require('./src/app/fleet');
// import Fleet from './src/app/fleet.js';
// import * as Fleet from './src/app/fleet.js';
// import { Fleet } from './src/app/fleet.js';

const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// I COULDN'T IMPORT MY CLASSES AND SO I FINALLY COPIED THEM IN THE FILE

class Fleet {
  constructor(userid) {
    this.userid = userid;
    this.vehicles = [];
  }
  registerVehicle(vehicle) {
    if (this.vehicles.includes(vehicle)) {
      throw 'The vehicle is already in the fleet!';
    }
    this.vehicles.push(vehicle);
  }
}

class Vehicle {
  constructor(type) {
    this.type = type;
  }
  park(location) {
    if (this.location === location) {
      throw 'The vehicle is already parked here!';
    }
    this.location = location;
  }
}

class Location {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

/////// TESTS ///////

Given('my fleet', function () {
  this.myFleet = new Fleet('steph');
});

Given('a vehicle', function () {
  this.myCar = new Vehicle('car');
});

Given('the fleet of another user', function () {
  this.theirFleet = new Fleet('otheruserid');
});

Given('I have registered this vehicle into my fleet', function () {
  this.myFleet.registerVehicle(this.myCar);
});

Given('this vehicle has been registered into the other user\'s fleet', function () {
  this.theirFleet.registerVehicle(this.myCar);
 });

Given('a location', function () {
  this.mucem = new Location(43.2967287, 5.3610255);
});

Given('my vehicle has been parked into this location', function () {
  this.myCar.park(this.mucem);
});

When('I register this vehicle into my fleet', function () {
  this.myFleet.registerVehicle(this.myCar);
});

When('I try to register this vehicle into my fleet', function () {
  try {
    this.myFleet.registerVehicle(this.myCar);
  } catch(e) {
    console.error(e);
  }
});

When('I park my vehicle at this location', function () {
  this.myCar.park(this.mucem);
});


When('I try to park my vehicle at this location', function () {
  try {
    this.myCar.park(this.mucem);
  } catch(e) {
    console.error(e);
  }
});

Then('this vehicle should be part of my vehicle fleet', function () {
  assert.equal(this.myFleet.vehicles.includes(this.myCar), true);
});

Then('the known location of my vehicle should verify this location', function () {
  assert.equal(this.myCar.location, this.mucem);
});


// DOESN'T WORK -- I DON'T KNOW HOW TO TEST THE ERROR MESSAGE
Then('I should be informed this this vehicle has already been registered into my fleet', function () {
  assert.throws(this.myFleet.registerVehicle(this.myCar),  /The vehicle is already in the fleet!$/ );
});

// DOESN'T WORK -- I DON'T KNOW HOW TO TEST THE ERROR MESSAGE
Then('I should be informed that my vehicle is already parked at this location', function () {
  assert.throws(this.myCar.park(this.mucem),  /The vehicle is already parked here!$/ );
});

