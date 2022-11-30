{
    const x = (a, b) => {
        return {
            a: a,
            b: b,
        }
    };
    console.log( x(2, 2) );
}

{
    const x = (a, b) => ({ a: a, b: b });
    console.log( x(2, 2) );
}