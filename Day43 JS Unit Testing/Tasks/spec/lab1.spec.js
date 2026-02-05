const { capitalizeTextFirstChar, createArray } = require("../lab1"); 

describe("capitalizeTextFirstChar", function () {

  it("should return a string when input is a string", function () {
    const result = capitalizeTextFirstChar("hello world");
    expect(typeof result).toBe("string");
  });

  it("should capitalize the first letter of each word", function () {
    const result = capitalizeTextFirstChar("hello world");
    expect(result).toBe("Hello World");
  });

  it("should throw type error if input is a number", function () {
    expect(function () {
      capitalizeTextFirstChar(123);
    }).toThrowError(TypeError, "parameters should be string");
  });

});


describe("createArray", function () {

  it("should return an array", function () {
    const result = createArray(3);
    expect(Array.isArray(result)).toBeTrue();
  });

  it("if length is 2, it should return array of length 2 and include 1", function () {
    const result = createArray(2);
    expect(result.length).toBe(2);
    expect(result).toContain(1);
  });

  it("if length is 3, it should return array of length 3 and not include 3", function () {
    const result = createArray(3);
    expect(result.length).toBe(3);
    expect(result).not.toContain(3);
  });

});
