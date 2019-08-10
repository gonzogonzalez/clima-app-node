const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=1c8b77ef8f8b34435174db73c0057208&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}