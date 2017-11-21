describe("Plane",function(){
  it("have a #status",function(){
    var plane = new Plane()
    expect(plane.staus).toBeFalsy()
  })

  it("change #status when landing", function(){
  var plane = new Plane()
  var airport = new Airport()
  airport.land(plane)
  expect(plane.status).toBeTruthy()
})

it("change #status after takeOff",function(){
  var plane = new Plane()
  var airport = new Airport()
  airport.land(plane)
  airport.takeOff(plane)
  expect(plane.status).toBeFalsy()
})

});
