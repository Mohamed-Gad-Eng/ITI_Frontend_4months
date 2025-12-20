// oldApp

// var result = db.query('select x from table_Y');
// doSomethingWith(result); //wait for result!

// doSomethingWithOutResult(); //execution is blocked!



// new
// event
// // callback,event handeler
// db.query("select x from table_Y",function (result){
//     doSomethingWith(result); //wait for result!
//     });

// doSomethingWithOutResult(); //executes without any delay!