{
    var array1 = ['Javascript', 'Ruby', 'PHP'];
        
    var array2 = ['ReactJS', 'Dart'];
    
    var array3 = [...array1, ...array2]
    
    console.log(1, array3);    
}
{
    var object1 = {
        name: 'Javascript'
    };

    var object2 = {
        price: 1000
    }

    var object3 = {
        ...object1,
        ...object2
    }

    console.log(2, object3);
}
{
    function logger(a, b, c) {
        console.log(3, a, b, c);
    }

    logger(1, 2, 3);
}
{
    var array = ['Javascript', 'PHP', 'Ruby'];

    function logger(a, b, c) {
        console.log(4, a, b, c);
    }

    logger(...array);
}
{
    var array = ['Javascript', 'PHP', 'Ruby'];

    function logger(...rest) {
        for(let i = 0; i < rest.length; i++){
            console.log(5, rest[i]);
        }
    }

    logger(...array);
}