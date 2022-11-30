var name = 'javascript';
var price = 1000;

{
    var course = {
        name: name,
        price: price
    }
    console.log(course);
}

{
    var course = {
        name,
        price
    }
    console.log(course);
}

{
    var course = {
        name,
        price,
        getName: function() {
            return name;
        }
    }
    console.log(course.getName());
}

{
    var course = {
        name,
        price,
        getName() {
            return name;
        }
    }
    console.log(course.getName());
}

{
    var fieldName = 'Name';
    var fieldPrice = 'Price';

    const course = {
        [fieldName]: 'Javascript',
        [fieldPrice]: 1000
    }

    console.log(course);
}