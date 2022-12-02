{
    function logger(...params) {
        console.log(params)
    }
    logger(1, 2, 3, 4, 5, 6, 7, 8);
}
{
    function logger(a, b, ...params) {
        console.log(params)
    }
    logger(1, 2, 3, 4, 5, 6, 7, 8);
}