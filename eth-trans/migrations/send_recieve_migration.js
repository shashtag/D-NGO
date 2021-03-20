var sendrec = artifacts.require("./send_receive_trans.sol");

module.exports = function(deployer) {
  deployer.deploy(sendrec);
};