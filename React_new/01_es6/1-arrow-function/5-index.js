{
    const course = {
        name: 'Javascript basic!',
        getName: function() {
            return this.name;
        }
    }
    
    console.log(course.getName());
}

{
    const course = {
        name: 'Javascript basic!',
        getName: function() {
            return this; //context
        }
    }

    console.log(course.getName());
}

{
    const course = {
        name: 'Javascript basic!',
        getName: () => {
            return this; // context
        }
    }

    console.log(course.getName());
}

{
    const Course = function(name, price) {
        this.name = name;
        this.price = price;
    }

    const jsCourse = new Course('Javascript', 1000);
    console.log(jsCourse);
}

{
    // Course is not a constructor
    const Course = (name, price) => {
        this.name = name;
        this.price = price;
    }

    const jsCourse = new Course('Javascript', 1000);
    console.log(jsCourse);
}