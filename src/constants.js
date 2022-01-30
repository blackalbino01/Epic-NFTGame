const CONTRACT_ADDRESS = '0x62F6d4F4Ce8267dB678084fACa6632e0B74121e0';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};


export { CONTRACT_ADDRESS, transformCharacterData };
