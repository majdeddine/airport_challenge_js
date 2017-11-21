describe("Airport", function() {
  var airport;

  beforeEach(function(){
    airport = new Airport();
  })

  it("have a planes array", function(){
    var plane = jasmine.createSpyObj('plane',['status'])
    expect(airport.planes).toEqual(jasmine.any(Array))
  })

  it("#land a plane",function(){
    var plane = jasmine.createSpyObj('plane',['status'])
      airport.land(plane)
      expect(airport.planes).toContain(plane)
    })

    it ("#takeOff a landed plane", function(){
    var plane = jasmine.createSpyObj('plane',['status'])
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.planes.length).toEqual(0)
  })
});
