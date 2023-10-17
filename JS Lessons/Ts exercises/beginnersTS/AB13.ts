//Your challenge is to coerce the unknown type into one where we know what it is.
//Hint: You'll need to use instanceof.

import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    //using instanceof to check type at runtime
    //If something isn't an error, it falls down to next block where you could do something else with it.
    if (e instanceof Error) {
      return e.message;
    }
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
