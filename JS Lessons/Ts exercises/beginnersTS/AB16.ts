import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */

/*
You can declare a function type using this syntax:
(isFocused: boolean) => void
The isFocused argument is a boolean, and we're returning void.
Void is an alternative to undefined. But unlike undefined void doesn't have to return anything


also it can be extracted to its own type like this:

type FocusListener = (isFocused: boolean) => void;
Then implement it in the function like this
const addListener = (onFocusChange: FocusListener) => {


 */
const addListener =(onFocusChange:(isFocused: boolean)=> void) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});


/*
 type FUNCTION  = ("ARGUMENTS") => RETURN;
*/
