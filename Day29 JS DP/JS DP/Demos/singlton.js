class DBConnection {
  constructor() {
    if (DBConnection.instance) {
      return DBConnection.instance;
    }
    DBConnection.instance = this;
  }
  connect() {
    console.log("connect to DB");
  }
}

let obj1 = new DBConnection();

let obj2 = new DBConnection();

console.log(obj1 == obj2);
