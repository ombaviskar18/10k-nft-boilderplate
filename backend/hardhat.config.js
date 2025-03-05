require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

const dotenv = require("dotenv");
dotenv.config();

function privateKey() {
  return process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];
}

module.exports = {
  networks: {
    core_testnet: {
      url: "https://rpc.test.btcs.network", // Core Testnet RPC URL
      accounts: privateKey(), // Load private key from environment variable
      chainId: 1115, // Core Testnet chain ID
      gasPrice: 2000000000, // 2 Gwei (adjust as needed)
      gasLimit: 3000000, // Gas limit for transactions
      type: 0, // Legacy transaction type
    },
  },
  solidity: {
    version: "0.8.24", // Solidity version
    settings: {
      evmVersion: "paris", // EVM version
      optimizer: {
        enabled: true, // Enable optimizer
        runs: 1000, // Optimize for 1000 runs
      },
    },
  },
  etherscan: {
    apiKey: {
      core_testnet: process.env.API_KEY, // API key for Core Testnet block explorer (if applicable)
    },
    customChains: [
      {
        network: "core_testnet",
        chainId: 1115, // Core Testnet chain ID
        urls: {
          apiURL: "https://api.testnet.core.org/api", // Replace with Core Testnet API URL
          browserURL: "https://scan.test.btcs.network", // Replace with Core Testnet block explorer URL
        },
      },
    ],
  },
  ignition: {
    gasPrice: "auto", // Use network's gas price setting
  },
  sourcify: {
    enabled: true, // Enable Sourcify verification
  },
};