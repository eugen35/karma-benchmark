suite('Array iteration', function() {
    benchmark('native indexOf', function() {
        nativeIndexOf([1,2,3],2);
    });

    benchmark('find with for (var i = 0 ...)', function() {
        find([1,2,3],2);
    });
});