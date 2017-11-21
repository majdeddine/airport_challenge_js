function Airport(){
  this.planes = [];
}

Airport.prototype.land = function(plane){
  this.planes.push(plane)
  plane.status = true
}

Airport.prototype.takeOff = function(plane){
  this.planes.pop()
  plane.status = false
}
