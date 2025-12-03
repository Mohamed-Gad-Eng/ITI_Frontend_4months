// class User {
//   constructor(userName) {
//     this.userName = userName;
//   }
//   saveToDb(connectionString) {
//     if (connectionString == "") {
//       console.log("unable to connect to DB");
//     } else {
//       console.log("Connected to DB");
//     }
//   }

//   sendEmail(sender, reciver) {
//     console.log(`send email from ${sender} to ${reciver}`);
//   }
// }
// after srp
class User {
  constructor(userName) {
    this.userName = userName;
  }
  login() {}
  signUp() {}
}

class DB {
  saveToDb(connectionString) {
    if (connectionString == "") {
      console.log("unable to connect to DB");
    } else {
      console.log("Connected to DB");
    }
  }
}

class EmailServices {
  sendEmail(sender, reciver) {
    console.log(`send email from ${sender} to ${reciver}`);
  }
}
