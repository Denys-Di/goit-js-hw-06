class Customer {
  username;
  balance;
  discount;
  orders;
  

constructor(params) {
  this.username = params.username;
  this.balance = params.balance;
  this.discount = params.discount;
  this.orders = params.orders;

}
  getBalance() {
    return this.balance;
  }
  
  
  getDiscount() {
    return this.discount;
}
  
  setDiscount(value) {
    this.discount = value;
}
  
  getOrders() {
    return this.orders;
}
  
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  }


};

  const customer = new Customer({
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
});
  

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
