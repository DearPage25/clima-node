const axios = require('axios');


const getWeather = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=34ad85c2f603d991e2d94f77e2e4de03&units=metric`)
    
    return resp.data.main.temp;
}

module.exports = {
    getWeather
}