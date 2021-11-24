import { sayHello } from "../src/index";
import * as chai from "chai";
const { expect } = chai;

it('should say "Hello World!', () => {
  expect(sayHello()).to.equal("Hello World!");
});

it('should say "Hello Bartek!', () => {
  expect(sayHello("Bartek")).to.equal("Hello Bartek!");
});
