import {addToCart, cart, resetCart} from '../data/carts.js'



describe("Cart test cases", () => {
    it('add existing products to the cart', () => {

        resetCart();
        spyOn(localStorage, 'setItem').and.callFake(() => true);
        spyOn(localStorage, 'getItem').and.callFake(() => (JSON.stringify([])));
        console.log(localStorage.getItem())

        expect(cart.length).toBe(0);
        addToCart('901eb2ca-386d-432e-82f0-6fb1ee7bf969');
        expect(cart.length).toBe(1);
    });

    it('add new products to the cart', () => {

    });
});