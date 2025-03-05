module.exports = {
  // Global transaction options
  txOptions: {
    // Use legacy gas pricing for all networks
    gasPrice: 1500000000, // 1.5 Gwei
    // Disable EIP-1559 fee settings
    useEIP1559Fees: false,
  },
  // Network-specific overrides
  networks: {
    core_testnet: {
      txOptions: {
        gasPrice: 1500000000, // 1.5 Gwei
        gasLimit: 2100000,
      },
    },
  },
}; 