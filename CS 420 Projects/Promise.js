exports.asyncFunction = function(arg1, arg2) {
    return new Promise((resolve, reject) => {
        if (errorDetected) return reject (dataAboutError);
        resolve(any, results);
    });
};

asyncFunction(arg1, arg2)
.then((any, results) => {

})
.catch(err => {

});