'use strict';

module.exports = class Customer {
    constructor(key, fName, lName, address, city, state, zip, phone) {
        this.key = key;
        this.fName = fName;
        this.lName = lName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
    }
};