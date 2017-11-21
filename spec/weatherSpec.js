'use strict';
describe("Weather", function(){

it("have a #weather", function(){
  var weather = new Weather();
  expect(weather.weather).toEqual(jasmine.any(Array))
})

})
