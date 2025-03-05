const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTModule", (m) => {
  const nft = m.contract("CoreNFT", 
    // Constructor arguments
    ["https://ombaviskar18.github.io/Nft-Game/generated_metadata/"],
    // Deployment options
    {
      // Force EIP-1559 transaction
      maxPriorityFeePerGas: 1000000000n, // 1 Gwei
      maxFeePerGas: 3000000000n, // 3 Gwei
      gasLimit: 3000000n,
      type: 2,
    }
  );

  return { nft };
});
