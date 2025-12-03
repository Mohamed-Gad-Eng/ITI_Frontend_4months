class Store {
    constructor() {
        this.customers = [];
    }

    addCustomer(...customer) {
        this.customers.push(...customer);
    }

    removeCustomer(customer) {
        this.customers = this.customers.filter(c => c !== customer);
    }

    notifyCustomers(product) {
        this.customers.forEach(c => c.notifyMe(product));
    }

    addNewProduct(...products) {
        products.forEach(p => {
            console.log("%cStore: New product arrived => " + p.name,
                "color: red; font-weight: bold;");
            this.notifyCustomers(p);
        })
    }

}

class Customer {
    constructor(name) {
        this.name = name;
    }

    notifyMe(product) {
        console.log(`Watch out ${this.name}
            Store Added ${product.name} check it out !!`)
    }
}

class Product {
    constructor(name) {
        this.name = name;
    }
}

let store = new Store();

let customer1 = new Customer("Samir");
let customer2 = new Customer("Medhat");

store.addCustomer(customer1, customer2);

let prod1 = new Product("iPhone 30 pro max");
let prod2 = new Product("Samsung 30s Ultra");

store.addNewProduct(prod1, prod2);