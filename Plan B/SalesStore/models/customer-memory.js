'use strict';

const util = require('util');
const Note = require('./Customer');

var customers = [];

exports.update = exports.create = function( key, fName, lName, address, city, state, zip, phone) {
    return new Promise((resolve, reject) => {
        customers[key] = new Customer(key, fName, lName, address, city, state, zip, phone);
        resolve(customers[key]);
    });
};

exports.read = function(key) {
    return new Promise((resolve, reject) => {
        if (customers[key]) resolve(customers[key]);
        else reject(`Customer ${key} does not exist`);
    });
};

exports.destroy = function(key) {
    return new Promise((resolve, reject) => {
        if (customers[key]) {
            delete customers[key];
            resolve();
        } else reject(`Customer ${key} does not exist`);
    });
};

exports.keylist = function() {
    return new Promise((resolve, reject) => {
        resolve(Object.keys(customers));
    });
};

exports.count   = function()    {
    return new Promise((resolve, reject) => {
        resolve(customers.length);
    });
};