abstract class Human{
  dynamic name;
  int? age;

  Human(this.name, [this.age])
  {
    this.age = age;
  }
  void myHumanName();
}

class Employee extends Human{
  dynamic _id;
  double salary;
  Employee(super.name, super.age, double sal): this.salary = sal{
  }

  String get secretId => "$_id$name";

  set secretId(int id){
    this._id = id;
  }

  @override
  void myHumanName() {
    print("My name is $name");
  }

  void iamEmployee(){
    print("I am employee my name is $name and my Id is: $_id");
  }
}

/* -------------------------- Mixins ----------------------*/

mixin Animal{
  void eat(String name){
    print("I eat as a/an $name");
  }
}

mixin Bird{
  void fly(){
    print("I have Wings i can fly");
  }
}

class Crow with Animal, Bird{
 void Quack(){
   print("Quack!!");
 }
}


void main(){

  Employee emp = Employee("Mohamed", 23, 34);
  emp.iamEmployee();
  emp.myHumanName();
  print("****************************");

  void printme(String name, {int? salary, required int id}){
    print("my name is $name");
    print("my salary is $salary");
    print("my id is $id");
  }


  num sum(num number1, num number2, [num? number3]){
    return (number3 != null)? number1 + number2 + number3 : number1 + number2;
  }

  printme("Mohamed", id: 674, salary: 25000);
  print("****************************");

  print(sum(5, 5, 5));
}
