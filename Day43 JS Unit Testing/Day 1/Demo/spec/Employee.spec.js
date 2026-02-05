const Emloyee = require("../Employee");

describe("Test calculateSalary", () => {
  let emp1;
  beforeEach(() => {
    emp1 = new Emloyee("ali", 25, 3);
  });
  it("Test salary will be 5000 if yearsOfExp <= 5", () => {
    emp1.calculateSalary();
    expect(emp1.salary).toBe(5000);
  });
  it("Test salary will be 9000 if yearsOfExp > 5", () => {
    emp1.yearsOfExp = 7;
    emp1.calculateSalary();
    expect(emp1.salary).toBe(9000);
  });
});

describe("Test setAddress", () => {
  let emp1;
  beforeEach(() => {
    emp1 = new Emloyee("ali", 25, 3);
  });
  it("Test setAddress works correctly", () => {
    emp1.setAddress("Egypt", "Qena");
    expect(emp1.address).toEqual({ country: "Egypt", city: "Qena" });
  });
  it("Test setAddress contain spacific key with passd value", () => {
    emp1.setAddress("Egypt", "Qena");
    expect(emp1.address).toEqual(jasmine.objectContaining({ city: "Qena" }));
  });
});
describe("Test getPromoted", () => {
  let emp1;
  beforeEach(() => {
    emp1 = new Emloyee("ali", 25, 3);
  });
  it("Test If 0 < yearsOfExp <= 6 then salary will be increased by 20%", () => {
    emp1.calculateSalary();
    emp1.getPromoted();
    expect(emp1.salary).toBe(5000 * 1.2);
  });
  it("If 6 < yearsOfExp <= 7 then salary will be increased by 40%", () => {
    emp1.yearsOfExp = 7;
    emp1.calculateSalary();
    emp1.getPromoted();
    expect(emp1.salary).toBe(9000 * 1.4);
  });
  it('Test call sendEmployeeMessage("you got promoted to be senior")If 0 < yearsOfExp <= 6 ', () => {
    spyOn(emp1, "sendEmployeeMessage");
    emp1.calculateSalary();
    emp1.getPromoted();
    expect(emp1.sendEmployeeMessage).toHaveBeenCalled();
    expect(emp1.sendEmployeeMessage).toHaveBeenCalledTimes(1);
    expect(emp1.sendEmployeeMessage).toHaveBeenCalledWith(
      "you got promoted to be senior"
    );
  });
});

describe("Test deptInfo", () => {
  let emp1;
  beforeEach(() => {
    emp1 = new Emloyee("ali", 25, 3);
  });
  it("Test deptInfo works correctly", () => {
    // fake/mocking
    let obj = jasmine.createSpyObj(["getId", "getLocation"]);
    obj.getId.and.returnValue("123");
    obj.getLocation.and.returnValue("Qena");
    expect(emp1.deptInfo(obj)).toBe('123: Qena')
    expect(obj.getId).toHaveBeenCalled()
  });
});
