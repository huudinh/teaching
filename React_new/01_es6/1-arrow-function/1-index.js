{
    function logger(log) {
        console.log(log);
    }
    logger('message...');
}

{
    const logger = function(log) {
        console.log(log);
    }
    logger('message...');
}

{
    const logger = (log) => {
        console.log(log);
    }
    logger('message...');
}