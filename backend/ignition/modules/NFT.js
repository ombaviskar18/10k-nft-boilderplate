const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTModule", (m) => {
  const nft = m.contract("CoreNFT", 
    // Constructor arguments
    ["https://ombaviskar18.github.io/Nft-Game/generated_metadata/"],
    // Deployment options
    {
      // Manually set higher gas fees
      maxPriorityFeePerGas: 5000000000n, // 5 Gwei (tip)
      maxFeePerGas: 10000000000n, // 10 Gwei (max fee)
      gasLimit: 3000000n,
      type: 2, // EIP-1559 transaction type
    }
  );

  return { nft };
});