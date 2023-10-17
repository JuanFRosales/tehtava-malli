//Your challenge is to write the function so that the tests pass.
//Hint: You'll need to use generics.//



import { expect, it } from "vitest";
const coerceAmount = (amount: number | { amount: number }) => {
    //using typeof to narrow down typescript to understand 2 branches
    if (typeof amount === 'number'){
        return amount;
        //returns number
    } else {
        return amount.amount;
        //returns object as number
    }
  };

  it("Should return the amount when passed an object", () => {
    expect(coerceAmount({ amount: 20 })).toEqual(20);
  });

  it("Should return the amount when passed a number", () => {
    expect(coerceAmount(20)).toEqual(20);
  });
