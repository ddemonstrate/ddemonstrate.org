const Demonstrate = artifacts.require("Demonstrate");
const helper = require("./helpers/truffleTestHelper");

const DEC_25 = 1577275200;

//cover rails metro
const WHAT_3_WORDS = ["0x636f766572", "0x7261696c73", "0x6d6574726f"];

contract.only("Demonstrate", function(accounts) {
  const OWNER = accounts[0];
  const ALICE = accounts[1];
  const BOB = accounts[2];

  let contractInstance;

  beforeEach(async function () {
    contractInstance = await Demonstrate.new();
  });

  describe("Campaign tests", () => {
    it("should add new campaign", async function () {
      const actual = await contractInstance.add(DEC_25, WHAT_3_WORDS[0], WHAT_3_WORDS[1], WHAT_3_WORDS[2]);
      
      console.log(actual);
      //assert.equal(Number(actual), 0, "Should be index 0");
    });

    // it("Alice should not be a hodler", async function () {
    //   const actual = await tokenInstance.isHodler(ALICE);
    //   assert.isFalse(actual, "Should not be a hodler");
    // });

    // it.skip("Should add BOB to hodlers", async function () {
    //   const actual = await tokenInstance.insertHodler(BOB);
    //   console.log(actual);
    //   assert.equal(Number(actual), 1, "Should have index of 1");
    // });

    // it("Should calc 0 interest", async function () {
    //   const start = await tokenInstance._start();
    //   console.log(Number(start));

    //   const actual = await tokenInstance.calc(100, 0);
    //   console.log(Number(actual));

    //   assert.equal(actual.valueOf(), 0, "Should be 0");
    // });
  });
});