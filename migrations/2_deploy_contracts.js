const GameWeapons = artifacts.require("GameWeapons");

module.exports = function(deployer) {
  deployer.deploy(GameWeapons);
};
