const hre = require("hardhat");

async function main() {
  const gasPrice = 30_000_000_000; // 30 Gwei
  const gasLimit = 5_000_000;

  const CoreNFT = await hre.ethers.getContractFactory("CoreNFT");
  const nft = await CoreNFT.deploy(
    "https://ombaviskar18.github.io/nft-data/generated_metadata/",
    {
      gasPrice: gasPrice,
      gasLimit: gasLimit
    }
  );

  console.log(`Deploying with hash: ${nft.deploymentTransaction().hash}`);
  await nft.waitForDeployment();
  console.log("Deployed to:", await nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});