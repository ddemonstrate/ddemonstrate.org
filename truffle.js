//var HDWalletProvider = require("truffle-hdwallet-provider");

//var mnemonic = "tragic near rocket across biology shop push dragon jazz detail differ say";

module.exports = {

  plugins: ["truffle-security"],

  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 4600000
    }
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.0"
    }
  }
};