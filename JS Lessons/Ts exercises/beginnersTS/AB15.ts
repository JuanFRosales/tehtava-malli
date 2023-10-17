import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType =Pick <User,'firstName'|'lastName' >;
//either use 'omit' to exclude nonwanted or 'pick' to pick wanted
type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
