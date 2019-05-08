'use strict';

module.exports = class Transaction {
    constructor(price, quanity, totalPrice) {
        this.price = price;
        this.price = quanity;
        this.totalPrice = totalPrice;
    }
};

function TotalPrice(price, quanity, totalPrice) {
    totalPrice = (price * quanity);
    return totalPrice;
}