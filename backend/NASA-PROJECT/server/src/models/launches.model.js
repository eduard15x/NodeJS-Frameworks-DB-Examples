const launches = new Map()

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    missionName: "Kepler Exploration X",
    rocketName: "Explorer IS1",
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customer: ['Zero To Mastery', 'NASA'],
            flightNumber: latestFlightNumber,
        })
    );
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
}
