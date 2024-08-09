require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x7dbba743b2343a863afb1ee9f3217eec3b2a4b8a84300d27ded8da7f582ceff4"],
    },
  },
};
