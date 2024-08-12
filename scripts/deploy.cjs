const hre = require("hardhat");

async function main() {
  // Get the contract factory
  console.log("Getting contract factory...");
  const Tracking = await hre.ethers.getContractFactory("Tracking");

  // Deploy the contract
  console.log("Deploying Tracking contract...");
  const tracking = await Tracking.deploy();

  // Wait for the contract to be deployed
  console.log("Waiting for deployment...");
  await tracking.deployed(); // Waits for the contract to be deployed

  // Print the contract address
  console.log(`Tracking contract deployed to ${tracking.address}`);
}

// Execute the main function and handle any errors
main().catch((error) => {
  console.log("done");
});
