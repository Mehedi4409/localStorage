// console.log("js added");

const addProduct = () => {
    // console.log('function added');
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');

    const product = productName.value;
    const quantity = productQuantity.value;

    productName.value = '';
    productQuantity.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToStorage(product, quantity);
}

// display dwtails

const displayProduct = (product, quantity) => {
    const porductConstainer = document.getElementById('product-container');

    const tBody = document.createElement('tbody');
    tBody.innerHTML = `
    <tr>

    <td>${product}</td>
    <td>${quantity}</td>

    </tr>
    `;
    porductConstainer.appendChild(tBody);

}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');

    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    return cart;

}

const saveProductToStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    // console.log(cart);
    const cartStringyfied = JSON.stringify(cart);
    // console.log(cartStringyfied);
    localStorage.setItem('cart', cartStringyfied);
}

const displaySavedProduct = () => {

    const savedCart =getStoredShoppingCart();
    // console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        // console.log(product, quantity);
        displayProduct(product, quantity)
    }

}
displaySavedProduct();