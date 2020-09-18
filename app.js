
const argv = require('./config/yargs-config').argv;

const location = require('./location/location');
const weather = require('./weather/weather');
// location.getLocationLatLng( argv.direccion )
//     .then( console.log );


// weather.getWeather( 40.7648, -73.9808)
//         .then(console.log)
//         .catch(console.log)


const getInfo = async ( direccion ) => {
    try {
        const resLocation = await location.getLocationLatLng( direccion )
        const resWeather = await  weather.getWeather( resLocation.lat, resLocation.lng)
        return `El clima de ${direccion} es de ${resWeather}°` 
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }

}


getInfo( argv.direccion )
    .then(console.log)
    .catch(console.log)