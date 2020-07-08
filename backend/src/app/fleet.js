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

export default Fleet;
// export { Fleet };
// module.exports = 'fleet';
