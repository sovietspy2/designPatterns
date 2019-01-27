import Map from './map.js';

export default () => {
    // I use this pattern to cache the data from the database
    // actually this makes sense because coorditanes are not subject to change
    const map = new Map();

    const record1 = map.getLocation("EVERSONGWOODS");
    console.log(record1);
    const record2 = map.getLocation("EVERSONGWOODS");
    console.log(record2);

};