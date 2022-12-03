{
    function logger(obj) {
        console.log(1, obj.name);
        console.log(obj.price);
    }
    logger({
        name: 'Javascript',
        price: 1000,
        description: 'Description content'
    });
}
{
    function logger({ name, price, ...rest }) {
        console.log(2, name);
        console.log(price);
        console.log(rest);
    }
    logger({
        name: 'Javascript',
        price: 1000,
        description: 'Description content'
    });    
}
{
    function logger([a, b, ...rest]) {
        console.log(3, a);
        console.log(b);
        console.log(rest);
    }
    logger([2, 6, 12, 3, 4, 4]);
}