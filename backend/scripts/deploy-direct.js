const hre = require("hardhat");

async function main() {
  console.log("Starting deployment...");

  // Get the network's current gas data
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  // Deploy with explicit gas settings
  const CoreNFT = await hre.ethers.getContractFactory("CoreNFT");
  
  const deploymentTx = {
    from: deployer.address,
    nonce: await deployer.getNonce(),
    type: 2, // EIP-1559
    maxPriorityFeePerGas: hre.ethers.parseUnits("1", "gwei"), // 1 GWEI priority fee
    maxFeePerGas: hre.ethers.parseUnits("3", "gwei"), // 3 GWEI max fee
    gasLimit: 3000000,
  };

  console.log("Deploying with parameters:", deploymentTx);

  const nft = await CoreNFT.deploy(
    "https://ombaviskar18.github.io/Nft-Game/generated_metadata/",
    deploymentTx
  );

  await nft.waitForDeployment();
  
  const address = await nft.getAddress();
  console.log("CoreNFT deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 