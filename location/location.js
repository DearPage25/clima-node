const axios = require('axios');

const getLocationLatLng = async ( direccion ) => {

    let encodeURL = encodeURI( direccion )
    
    let instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURL}.json`,
        params:    {
            access_token: 'pk.eyJ1Ijoib2RhbG1pIiwiYSI6ImNrN2txYzM4YjAwMjgzZm43czJ4Y2lodDAifQ.t9xGWeWLy3kX_x5QrKG1fA'
        }
      });
    
    
    const resp = await instance.get();

    if ( resp.data.features.length === 0) {
        throw new Error (`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.features[0];

    const location = data.place_name;
    const lng= data.center[0];
    const lat= data.center[1];


    return {
        location,
        lat,
        lng
    }

    
}
 module.exports = {
     getLocationLatLng
 }