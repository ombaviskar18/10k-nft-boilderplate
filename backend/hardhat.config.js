require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();
const { task } = require("hardhat/config");

function privateKey() {
  return process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [];
}

task("check-network", "Check network status", async (args, hre) => {
  const block = await hre.ethers.provider.getBlockNumber();
  console.log(`Connected to network. Latest block: ${block}`);
});

task("balances", "Prints account balances", async (args, hre) => {
  const balance = await hre.ethers.provider.getBalance((await hre.ethers.getSigners())[0].address);
  console.log(`Balance: ${hre.ethers.formatEther(balance)} CORE`);
});

module.exports = {
  networks: {
    core_testnet: {
      url: "https://rpc.test.btcs.network",
      accounts: privateKey(),
      chainId: 1115,
      // REMOVE all gas-related parameters here
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      viaIR: true, // Enable IR compilation for gas optimization
      optimizer: {
        enabled: true,
        runs: 1000,
        details: { yul: true },
      },
    },
  },
  ignition: {
    gasPrice: 100_000_000_000, // Match network gasPrice
    requiredConfirmations: 1, // Faster confirmation
    pollingInterval: 1_000, // Faster polling
  },
};