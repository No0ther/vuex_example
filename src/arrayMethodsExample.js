// example use destructring and array.map
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

// example array.reduce()
let listCombos = [
    {
        id: 2,
        name: "combo toán tiếng việt1",
        code: "TTV1",
        siteId: 2,
        products: [
            {
                id: 1,
                name: "Toán1",
                code: "Toan1",
                price: 300000
            },
            {
                id: 3,
                name: "Tiếng Việt1",
                code: "TV1",
                price: 350000
            }
        ]
    },
    {
        id: 2,
        name: "combo hoang doanh",
        code: "TTV1",
        siteId: 2,
        products: [
            {
                id: 1,
                name: "hoang doanh 1",
                code: "doanh1",
                price: 459000
            },
            {
                id: 3,
                name: "hoang doanh 2",
                code: "doanh2",
                price: 125000
            }
        ]
    },
    {
        id: 3,
        name: "combo hoang thien",
        code: "TTV1",
        siteId: 2,
        products: [
            {
                id: 1,
                name: "thien 1",
                code: "thien1",
                price: 123456
            },
            {
                id: 3,
                name: "thien 2",
                code: "thien2",
                price: 123000
            }
        ]
    }
]

const handleListCombos = listCombos.map((combo) => {
    const comboTemp = combo;
    comboTemp.price = comboTemp.products.reduce((price, product) => {
        console.log('param 1 is price:', price);
        return price + product.price;
    }, 0)
    return comboTemp
})

console.log('Output: ', handleListCombos);

