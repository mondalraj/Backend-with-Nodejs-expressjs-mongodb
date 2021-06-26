const cities = require('cities');

var myCity = cities.zip_lookup('90011');
console.log(myCity);
/* output ->
{
  zipcode: '90011',
  state_abbr: 'CA',
  latitude: '34.007063',
  longitude: '-118.25868',
  city: 'Los Angeles',
  state: 'California'
}
*/