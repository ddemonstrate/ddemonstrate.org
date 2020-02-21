const Demonstrate = artifacts.require("Demonstrate");
const helper = require("./helpers/truffleTestHelper");

const DEC_25_2020 = 1608897600;

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
      const actual = await contractInstance.add(DEC_25_2020, WHAT_3_WORDS[0], WHAT_3_WORDS[1], WHAT_3_WORDS[2]);
      
      
    });
  });
});