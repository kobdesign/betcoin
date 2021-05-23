const DaapToken = artifacts.require("DappToken");

contract('DappToken',function(accounts){
    it('set the total supply upon deployment', function(){
        return DaapToken.deployed().then(function(instance){
            tokenInstance=instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply){
            assert.equal(totalSupply.toNumber(), 1000000, "sets of supply is 1,000,000 coin");
        });
    });
})