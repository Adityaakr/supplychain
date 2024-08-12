// hardhat.config.cjs
require("@nomicfoundation/hardhat-toolbox");

/** @type {import('hardhat/config').HardhatUserConfig} */
const config = {
  solidity: "0.8.24",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
};

module.exports = config;
