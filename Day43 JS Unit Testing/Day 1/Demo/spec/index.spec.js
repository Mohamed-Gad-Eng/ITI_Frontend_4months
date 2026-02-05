// spec=testcase
const { sum, removeDuplicate } = require("../index");

// suite

describe("Test Sum Function", () => {
  // code
  it("Test that if sum take numbers then it returns sumition of them", () => {
    expect(sum(1, 2)).not.toBeGreaterThanOrEqual(4);
  });
  it("test throw error with string inputs", () => {
    expect(() => sum("ahmed", "ramy")).toThrowError(
      TypeError,
      "parameters should be numbers"
    );
  });
});


describe('Test removeDuplicate Function',()=>{
    it('Test works correctly',()=>{
        expect(removeDuplicate([1,1,2,3,4,4])).toEqual([1,2,3,4])
    })
    it('test if return type is Array',()=>{
        expect(removeDuplicate([1,1,2,3,4,4])).toEqual(jasmine.any(Array))
    })

    it('test it only removes duplicates,keep the item itself',()=>{
        expect(removeDuplicate([1,1,2,3,4,4])).toContain(1)
    })
    it('Test Array Size',()=>{
        expect(removeDuplicate([1,1,2,3,4,4])).toHaveSize(4)
    })
})
