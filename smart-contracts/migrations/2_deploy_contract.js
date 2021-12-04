const Danft = artifacts.require("Danft");

module.exports = function (deployer) {
  deployer.deploy(Danft, 'DanFT', 'DNFT', 'https://ipfs.io/ipfs/bafybeiexsjjvztdg7gaduahxafwubhnvkllbhjotnlyeisfc2whelhy6su/testjson/');
};
