const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Nanaba", "Caven", "Udo"],       // Names
    ["https://i.ibb.co/B4YrGp0/Nanaba.jpg", // Images
    "https://i.ibb.co/6RCNDjj/caven.jpg", 
    "https://i.ibb.co/DCrW9CK/Udo.jpg"],
    [100, 200, 300],                    // HP values
    [100, 50, 25]                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();


  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);

  returnedTokenUri = await gameContract.tokenURI(2);
  console.log("Token URI:", returnedTokenUri);

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