import uuid from 'uuid/v1';

export default class SomeSystem {
    processRequest(command, identifier, data) {

        Logger.log(identifier);

        if (!this.validatePerson(identifier)) {
            return "unauthorized";
        }

        const requestId = uuid();

        let response = null;
        switch (command) {
            case "send":
                response = DataBase.sendData(data, requestId);
                break;
            case "get":
                response = DataBase.getData(data, requestId);
                break;
        }

        return response;
    }

    validatePerson(id) {
        return DataBase.validateIdentifier(id);
    }
}

class DataBase {
    static getData(term) {
        return "expected response";
    }

    static sendData(term) {
        return "ok";
    }

    static validateIdentifier(id) {
        return true;
    }
}

class Logger {
    static log(id) {
        // logging
    }
}