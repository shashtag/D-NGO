var userCase = artifacts.require("./user_case_config_trans.sol");

module.exports = function(deployer) {
  deployer.deploy(userCase);
};