//file system functionality
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const planets = require('./planets.mongo');

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' 
    && planet['koi_insol'] > 0.36 
    && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
        .pipe(parse({
            //we want to treat lines that start with that character #-
            comment: '#',
            //this will return each row as a javascript object key-value
            columns: true,
        }))
        .on('data', async (data) => {
            // results.push(data);
            if (isHabitablePlanet(data)) {
                //now we gonna send data to mongoDB
                savePlanet(data)
            }
        })
        .on('error', (err) => {
            console.log(err);
            reject(err);
        })
        .on('end', async () => {
            const countPlanetsFound = (await getAllPlanets()).length;
            console.log(`${countPlanetsFound} habitable planets found!`);
            resolve();
        });
    });
}

async function getAllPlanets() {
    return await planets.find({}, {
        '_id': 0,
        '__v': 0
    });
}

async function savePlanet(planet) {
    try {
        await planets.updateOne({
            //kepler_name is coming from kepler_data column
            keplerName: planet.kepler_name
        }, {
            keplerName: planet.kepler_name
        }, {
            upsert: true
        });
    } catch(err) {
        console.error(`Could not ssave a planet ${err}`);
    }
}

module.exports = {
    loadPlanetsData,
    getAllPlanets,
};
