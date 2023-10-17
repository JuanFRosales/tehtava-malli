import { expect, it } from "vitest";

//Your challenge is to reference the TypeScript docs and work out what could be causing this problem.
//Update cache to be typed properly so the errors go away.
//Hint: You'll need to use generics.
type solution = {
  [id: string]: string;
};

const createCache = () => {
  const cache: solution = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
