// function processPayment(method, amount,phoneNumber,PaypalAccount,CreditCardNumber,currency) {
//   if (method == "CreditCard") {
//     return `You Payment is done using CreditCard with amount ${amount}$`;
//   } else if (method == "Paypal") {
//     return `You Payment is done using Paypal account with amount ${amount}$`;
//   } else if (method == "Electronic Wallet") {
//     return `You Payment is done using your wallet with amount ${amount}$`;
//   }else{
//     return 'your method is not detected!'
//   }
// }

// console.log(processPayment("CreditCard"));

class Payment {
  pay() {
    throw new Error("Payment not detected");
  }
}

class CreditCard extends Payment {
  constructor(CreditCardNumber) {
    super();
    this.creditCardNumber = CreditCardNumber;
  }
  pay(amount, currency) {
    return `You Payment is done using CreditCard with amount ${amount}${currency}`;
  }
}
class Paypal extends Payment {
  constructor(PaypalAccount) {
    super();
    this.paypalAccount = PaypalAccount;
  }
  pay(amount, currency) {
    return `You Payment is done using Paypal account with amount ${amount}${currency}`;
  }
}
class ElectronicWallet extends Payment {
  constructor(phoneNumber) {
    super();
    this.phoneNumber = phoneNumber;
  }
  pay(amount, currency) {
    return `You Payment is done using your wallet with amount ${amount}${currency}`;
  }
}
class Crypto extends Payment {
  constructor(key) {
    super();
    this.key = key;
  }
  pay(amount, currency) {
    return `You Payment is done using your crypto currency with amount ${amount}${currency}`;
  }
}

class PaymentStragey {
  constructor(strategy) {
    this.paymentstrategy = strategy;
  }

  changePaymentStrage(newStrategy) {
    this.paymentstrategy = newStrategy;
  }

  processPayment(totalCart, currency) {
    // console.log(this.paymentstrategy);
 return  this.paymentstrategy.pay(totalCart, currency);
  }
}

let myCreditCard = new CreditCard(763645762873853);
let myWallet=new ElectronicWallet('010476476868')
// let paymentGatway = new PaymentStragey(myCreditCard);
// let paymentGatway = new PaymentStragey(myWallet);
let paymentGatway = new PaymentStragey(new Crypto(1,'bitcoin'));
// paymentGatway.processPayment(6542, "$")
console.log(paymentGatway.processPayment(6542, "$"));
