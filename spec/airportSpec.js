describe("Airport", function() {
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
  })
  it("have a planes array", function(){

    expect(airport.planes).toEqual(jasmine.any(Array))
  })

});
