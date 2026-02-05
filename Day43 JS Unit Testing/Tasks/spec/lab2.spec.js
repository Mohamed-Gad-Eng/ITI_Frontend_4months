const User = require("../lab2");

describe("user class lab 2", function () {
    let user;

    beforeEach(function () {
        user = new User("Mohamed", "1234");
    });

    // addToCart tests
    describe("addToCart", function () {
        it("should add product to cart", function () {
            const product = { name: "Phone", price: 5000 };

            user.addToCart(product);

            expect(user.cart.length).toBe(1);
            expect(user.cart).toContain(product);
        });
    });

    // calculateTotalCartPrice tests
    describe("calculateTotalCartPrice", function () {
        it("should return total price of products in cart", function () {
            user.addToCart({ name: "Laptop", price: 10000 });
            user.addToCart({ name: "Mouse", price: 500 });

            const total = user.calculateTotalCartPrice();

            expect(total).toBe(10500);
        });

        it("should return 0 if cart is empty", function () {
            const total = user.calculateTotalCartPrice();

            expect(total).toBe(0);
        });
    });

    // checkout tests
    describe("checkout", function () {
        let paymentModel;

        beforeEach(function () {
            paymentModel = {
                goToVerifyPage: jasmine.createSpy("goToVerifyPage"),
                returnBack: jasmine.createSpy("returnBack"),
                isVerify: jasmine.createSpy("isVerify"),
            };
        });

        it("should call paymentModel methods", function () {
            paymentModel.isVerify.and.returnValue(true);

            user.checkout(paymentModel);

            expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
            expect(paymentModel.returnBack).toHaveBeenCalled();
            expect(paymentModel.isVerify).toHaveBeenCalled();
        });

        it("should return true if payment is verified", function () {
            paymentModel.isVerify.and.returnValue(true);

            const result = user.checkout(paymentModel);

            expect(result).toBeTrue();
        });

        it("should return false if payment is not verified", function () {
            paymentModel.isVerify.and.returnValue(false);

            const result = user.checkout(paymentModel);

            expect(result).toBeFalse();
        });
    });
});
