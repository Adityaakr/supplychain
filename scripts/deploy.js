import * as hre from "hardhat";

async function main() {
  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();
  console.log(`Tracking deployed to ${lock.address}`);
}
main().catch((error) => {

})
