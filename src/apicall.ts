interface product {
    productid: string
    productname: string
    price:string
    quantity:string
}
function getproperties(): Promise<product[]> {
    return fetch('/product.json')
        .then(res => res.json())
        .then(res => {
        console.log(res);
        return res as product[]
    })
}
getproperties()
    .then(properties=> {
    console.log(properties.map(p => p.productid + ' ' + p.productname + ' '+p.price+' '+p.quantity +'\n').toString())
})

function getFAPI()
{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(responce => responce.json())
    .then(json => console.log(json))
}
getFAPI();