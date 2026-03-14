 const coupons = {
'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists
const coupon = coupons[couponCode];
if (!coupon) {
return { valid: false, message: "Invalid coupon code" };
}
// 2. Check minimum amount requirement
if (coupon.minAmount && cartTotal < coupon.minAmount) {
return { valid: false, message: `Minimum cart amount of ${coupon.minAmount} required for this coupon` };
}
// 3. Check category requirement (if any)
if (coupon.category) {
const hasCategoryItem = cartItems.some(item => item.category === coupon.category);

// Return { valid: true/false, message: '...' }
if (!hasCategoryItem) {
return { valid: false, message: `This coupon is only valid for ${coupon.category} items` };
}
return { valid: true, message: "Coupon is valid" };
}
}

export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
// Return discount amount
const coupon = coupons[couponCode]
if (!coupon) {
return false
}
if (coupon.type === 'percentage') {
return (cartTotal * coupon.value) / 100
}
if (coupon.type === 'flat') {
return coupon.value
}
return false
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon
const validation = validateCoupon(couponCode, cartTotal, cartItems)
if (!validation.valid) {
return { originalTotal: cartTotal, discount: 0, finalTotal: cartTotal, message: validation.message }
}
// 2. If valid, calculate discount
const discount = calculateDiscount(couponCode, cartTotal)
// 3. Return final amount and discount details
const finalTotal = cartTotal - discount
// Return { 
//   originalTotal: ..., 
//   discount: ..., 
//   finalTotal: ...,
//   message: '...'
// }
return { originalTotal: cartTotal, discount, finalTotal, message: "Discount applied successfully" }
}