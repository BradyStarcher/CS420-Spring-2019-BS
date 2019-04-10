router.get('/path/to/something', (req, res, next) => {
    doSomething(arg1, arg2, (err, data1) => {
        if (err) return next (err);
        doAnotherThing(arg3, arg2, data1, (err2, data2) => {
            if (err2) return next (err2);
            somethingCompletelyDifferent(arg1, arg42, (err3, data3) => {
                if (err3) return next (err3);
                doSomethingElse((err4, data4) => {
                    if (err4) return next (err4);
                    res.render('page', {data});
                });
            });
        });
    });
});