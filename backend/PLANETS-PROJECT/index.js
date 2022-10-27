const { parse } = require('csv-parse');
//file system functionality
const fs = require('fs');

const results = [];
const habitablePlanets = []

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' 
    && planet['koi_insol'] > 0.36 
    && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

// parse.()

fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        //we want to treat lines that start with that character #-
        comment: '#',
        //this will return each row as a javascript object key-value
        columns: true,
    }))
    .on('data', (data) => {
        // results.push(data);
        if (isHabitablePlanet(data)) {
            habitablePlanets.push(data);
        }
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        // console.log(results);
        console.log(habitablePlanets.length)
        //mapping through array to find planets name
        console.log(habitablePlanets.map((planet) => {
            return planet['kepler_name'];
        }))
        console.log('done');
    })
