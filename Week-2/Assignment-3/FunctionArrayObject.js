// Assignment 3: Function, Array, and Object
// Complete the function below to calculate the average price of all the products

function avg(data) {
    let denominator = data.size;
    let numerator = 0;
    for (let i = 0; i<data.products.length;i++){
        numerator += data.products[i].price;
    }
    return numerator/denominator;
    
    }
    console.log(
    avg({
    size:3,
    products:[
    {
    name:"Product 1",
    price:100
    },
    {
    name:"Product 2",
    price:700
    },
    {
    name:"Product 3",
    price:250
    }
    ]
    })
    ) // should print the average price of all products