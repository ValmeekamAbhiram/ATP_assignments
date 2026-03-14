import { getProductById, checkStock } from './product.js';
let cartItems = [];

export function addToCart(productId, quantity) {
// 1. Get product details
getProductById(productId)
// 2. Check stock availability
checkStock(productId,quantity)
// 3. Check if product already in cart
//    - If yes, update quantity
//    - If no, add new item
const existingItem = cartItems.find(product => product.id === productId);
if(existingItem){
existingItem.quantity+=quantity
}else{
const product = getProductById(productId);
if(product){
cartItems.push({ ...product, quantity });
}
}
// 4. Return success/error message
return "Product added to cart successfully"
}

export function removeFromCart(productId) {
// Remove product from cart
cartItems = cartItems.filter(item => item.id !== productId);
return "Product removed from cart successfully"
}

export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
// Check stock before updating
const product = getProductById(productId);
if(product && checkStock(productId, newQuantity)){
const item = cartItems.find(item => item.id === productId);
if(item){
item.quantity = newQuantity
return "Quantity updated successfully"
}
}
}

export function getCartItems() {
// Return all cart items with product details
return cartItems
}

export function getCartTotal() {
// Calculate total price of items in cart
return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
}

export function clearCart() {
// Empty the cart
cartItems = [];
return "Cart cleared successfully"
}