var array = ['Javascript', 'PHP', 'Ruby'];
{
    var a = array[0];
    var b = array[1];
    var c = array[2];
    console.log(1, a, b, c);
}

{
    var [a, b, c] = array;
    console.log(2, a, b, c);
}

{
    var [a, , c] = array;
    console.log(3, a, c);
}

{
    var [a, ...rest] = array;
    console.log(4, a);
    console.log(rest);
}

{
    var [a, b, ...rest] = array;

    console.log(5, a);
    console.log(rest);
}