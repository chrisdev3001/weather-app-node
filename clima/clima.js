const axios = require('axios');

const getClima = async(lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1375407c9dd0b127bfb08a40102f536c&units=metric`;
    const res = await axios.get(url);
    return res.data.main.temp;
}

module.exports = {
    getClima
}