"use strict";
function getproduct() {
    return fetch('.\product.json')
        .then(res => res.json())
        .then(res => {
        console.log(res);
        return res;
    });
}
getproduct();
fetch('https://fakestoreapi.com/products?sort=desc')
    .then(res => res.json())
    .then(json => console.log(json));
