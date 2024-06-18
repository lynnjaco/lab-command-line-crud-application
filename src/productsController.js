const { nanoid } = require("nanoid");

function purchase(cart, productName){
    let productReference = products.find( obj => obj.name.toLowerCase() === productName.toLowerCase() )
    let product = { 
        cartItemId: nanoid(4), 
        name: productReference.name, 
        SKU: productReference.SKU,
        price: (productReference.priceInCents/100).toFixed(2)
        };
    cart.push(product);
    return cart;
}