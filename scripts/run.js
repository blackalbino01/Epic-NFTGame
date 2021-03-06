const main = async () => {
  // eslint-disable-next-line no-undef
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Nanaba", "Caven", "Udo"],       // Names
    ["https://i.ibb.co/B4YrGp0/Nanaba.jpg", // Images
    "https://i.ibb.co/6RCNDjj/caven.jpg", 
    "https://i.ibb.co/DCrW9CK/Udo.jpg"],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    'Beast Titan', // boss name
    "https://i.ibb.co/VDMYrty/beast-titan.jpg", // boss image
    10000, // boss hp
    50 // boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.checkIfUserHasNFT();

  console.log(txn);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();