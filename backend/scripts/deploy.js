const hre = require("hardhat");

async function main() {
  const CoreNFT = await hre.ethers.getContractFactory("CoreNFT");

  // Deploy the contract with higher gas fees
  const nft = await CoreNFT.deploy("https://ombaviskar18.github.io/Nft-Game/generated_metadata/", {
    gasPrice: hre.ethers.parseUnits("5", "gwei"), // 5 Gwei (increase if needed)
    gasLimit: 3000000, // Increase gas limit
  });

  await nft.waitForDeployment(); // Use waitForDeployment() instead of deployed()
  console.log("NFT deployed to:", await nft.getAddress()); // Use getAddress() instead of address
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });