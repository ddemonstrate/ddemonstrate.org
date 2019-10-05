const Demonstrate = artifacts.require("Demonstrate");
const helper = require("./helpers/truffleTestHelper");

contract.only("Demonstrate", function(accounts) {
  const OWNER = accounts[0];
  const ALICE = accounts[1];
  const BOB = accounts[2];

  let contractInstance;

  beforeEach(async function () {
    contractInstance = await Demonstrate.new();
  });

  describe("Stack tests", () => {
    it("Owner should be a hodler", async function () {
      const actual = await contractInstance.isHodler(OWNER);
      assert.isTrue(actual, "Should not be a hodler");
    });

    it("Alice should not be a hodler", async function () {
      const actual = await tokenInstance.isHodler(ALICE);
      assert.isFalse(actual, "Should not be a hodler");
    });

    it.skip("Should add BOB to hodlers", async function () {
      const actual = await tokenInstance.insertHodler(BOB);
      console.log(actual);
      assert.equal(Number(actual), 1, "Should have index of 1");
    });

    it("Should calc 0 interest", async function () {
      const start = await tokenInstance._start();
      console.log(Number(start));

      const actual = await tokenInstance.calc(100, 0);
      console.log(Number(actual));

      assert.equal(actual.valueOf(), 0, "Should be 0");
    });
  });
});