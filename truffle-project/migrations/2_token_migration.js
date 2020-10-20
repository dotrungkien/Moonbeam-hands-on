const KevinToken = artifacts.require('KevinToken');

module.exports = function (deployer) {
  deployer.deploy(KevinToken, '1000000000000000000000000');
};
