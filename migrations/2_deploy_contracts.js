const DaapToken = artifacts.require("DappToken");

module.exports = function (deployer) {
  deployer.deploy(DaapToken);
};
