// const { it } = require("@jest/globals");
// const { expect } = require("@jest/globals");
// const { getMaxListeners } = require("node:process");
const { it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Intitialization", () => {
    it("should have a name", () => {
      // arrange
      const name = "tyler";
      const id = 1;
      const email = "tafimba@gmail.com";
      // act
      const emp = new Employee(name, id, email);
      // assert
      expect(emp.name).toBe(name);
      expect(emp.id).toBe(id);
      expect(emp.email).toBe(email);
    });
  })
  // describe("getName()", () => {
  //     it("should return the name", () => {
  //         // arrange
  //         const name = "Abegg";
  //         const emp = new Employee(name, 1, "tfabegg@gmail.com")
  //         // act
  //         const actual = emp.getName();
  //         // assert
  //         expect(actual).toBe(name);

  //     }
  //     )
