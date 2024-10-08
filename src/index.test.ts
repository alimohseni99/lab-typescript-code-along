import { deepEqual } from "node:assert/strict";
import test from "node:test";

const data = [
  { id: "1", name: "daniel" },
  { id: "2", name: "ali" },
];

type Person = {
  id: string;
  name: string;
};

function uppercaseName(names: Person[]) {
  return [];
}

test("upperCaseNames works with empty arr", () => {
  const result = uppercaseName([]);
  deepEqual(result, []);
});
