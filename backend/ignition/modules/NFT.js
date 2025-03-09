const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTModule", (m) => {
  const nft = m.contract("CoreNFT", 
    ["https://ombaviskar18.github.io/nft-data/generated_metadata/"], 
    {
      gasPrice: 100_000_000_000, // Explicit gasPrice override
      gasLimit: 10_000_000 // Double gas limit
    }
  );

  return { nft };
});