 import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {
// 1. Get cart items and total
    const items = getCartItems();
    const subtotal = getCartTotal();

// 2. Apply discount if coupon provided
    let discount = 0;
    if (couponCode) {
        discount = applyDiscount(couponCode, subtotal)
    }
// 3. Validate payment method (card/upi/cod)
        const validPaymentMethods = ['card', 'upi', 'cod'];
    if (!validPaymentMethods.includes(paymentMethod)) {
        return {orderId: null,items,subtotal,discount,total: subtotal - discount,paymentMethod,status: 'failed',message: 'Invalid payment method'
        }
    }
// 4. Process payment (simulate)
    const paymentSuccess = true;
// 5. Reduce stock for all items
    if (paymentSuccess) {
        items.forEach(item => reduceStock(item.productId, item.quantity))
    }
// 6. Clear cart
    if (paymentSuccess) {
        clearCart()
    }
// 7. Generate order summary
    const orderSummary = {
        orderId: 'ORD' + Date.now(),
        items,
        subtotal,
        discount,
        total: subtotal - discount,
        paymentMethod,
        status: paymentSuccess ? 'success' : 'failed',
        message: paymentSuccess ? 'Payment processed successfully' : 'Payment failed. Please try again.'
    }
// Return order summary
    return orderSummary;
}