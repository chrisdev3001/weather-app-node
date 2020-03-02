const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,        
        headers: {'x-rapidapi-key': '7e9376e55bmsh454513b9813c2a0p108495jsn0b859418661f'},        
    });
    
    const res = await instance.get();

    if( res.data.Results.length === 0 ){
        throw new Error(`No hay resultados para ${ dir }`);        
    }

    const data      = res.data.Results[0];
    const direccion = data.name;
    const lat       = data.lat;
    const lng       = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}


