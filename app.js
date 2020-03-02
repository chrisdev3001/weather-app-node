const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/* Obtiene la temperatura de algún lugar */
const getInfo = async(direccion) => {
    try{
        const cordenadas = await lugar.getLugarLatLng(direccion);
        const { lat, lng } = cordenadas;
        const cli = await clima.getClima(lat, lng);
        return `La temperatura de ${direccion} es de ${cli}`;
    }catch(err){
        throw new Error(`No se pudo determinar el clima de: ${ direccion }`);
    }
}

getInfo(argv.direccion)
    .then(  console.log() )
    .catch( err => console.log(err) )
