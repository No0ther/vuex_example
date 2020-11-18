let a = [
    {
        address: {
            street: 'ba la',
            numberOfhourse: 12
        },
        age: 25,
        first: 'hoang',
        last: 'thien'
    },
    {
        address: {
            street: 'ba la',
            numberOfhourse: 12
        },
        age: 25,
        first: 'hoang',
        last: 'hieu'
    }
]

let b = a.map(item => {
    return {
        ...item,
        fullName: item.first + item.last
    }
});


console.log('ket qua la:',b);
