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

export default Vehicle;
