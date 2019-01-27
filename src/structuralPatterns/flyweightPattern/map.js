export default class Map {
    constructor() {
        this.cache = [];
    }

    getLocation(city) {

        if (this.existInCache(city)) {
            return this.getFromCache(city);
        } else {
            const record = Database.findCoordinateByCity(city);
            this.addToCache(record);
            return record;
        }
    }

    addToCache(record) {
        this.cache.push(record);
    }

    existInCache(city) {
        return this.cache.find(record=> record.name===city);
    }

    getFromCache(city) {
        console.log('accessing cached data for city:',city);
        return this.existInCache(city);
    }

}

class Database {
    static findCoordinateByCity(city) {
        return data.find(record=> record.name===city);
    }
}

const data = [
    {name: "NEWYORK", location: {x: 11, y: 22}},
    {name: "YORKSHIRE", location: {x: 31, y: 26}},
    {name: "EVERSONGWOODS", location: {x: 12, y: 42}},
];