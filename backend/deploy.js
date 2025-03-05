const hre = require("hardhat");

async function main() {
  const CoreNFT = await hre.ethers.getContractFactory("CoreNFT");
  const nft = await CoreNFT.deploy("https://ombaviskar18.github.io/Nft-Game/generated_metadata/", {
    gasPrice: ethers.utils.parseUnits("1", "gwei"),
    gasLimit: 2100000,
  });
  
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 