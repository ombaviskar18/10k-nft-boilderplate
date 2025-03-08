require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

function privateKey() {
  return process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];
}

module.exports = {
  networks: {
    core_testnet: {
      url: "https://rpc.test.btcs.network", // Core Testnet RPC URL
      accounts: privateKey(), // Load private key from environment variable
      chainId: 1115, // Core Testnet chain ID
      gasPrice: 5000000000, // 5 Gwei (increase if needed)
      gasLimit: 3000000, // Gas limit for transactions
      type: 0, // Legacy transaction type (use 2 for EIP-1559)
    },
    // Add other networks if needed (e.g., localhost, mainnet, etc.)
    localhost: {
      url: "http://127.0.0.1:8545", // Local Hardhat network
      chainId: 31337, // Hardhat default chain ID
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
          apiURL: "https://api.testnet.core.org/api", // Replace with correct API URL (if available)
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