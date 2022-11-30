var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
}
{
    var {
        name,
        price
    } = course;

    console.log(1, name, price);
}
{
    var {
        name,
        price,
        price2,
    } = course;

    console.log(2, name, price, price2);
}
{
    var {
        name,
        ...rest
    } = course;

    console.log(3, name);
    console.log(rest);
}
{
    var {
        name,
        ...newObject
    } = course;

    console.log(4, newObject);
}
{
    var {
        name: parentName,
        children: {
            name: childrenName
        }
    } = course;

    console.log(5, parentName);
    console.log(childrenName);
}
{
    var {
        name,
        description = 'defalut description'
    } = course;

    console.log(6, name);
    console.log(description);
}