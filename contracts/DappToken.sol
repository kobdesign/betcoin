pragma solidity >=0.5.16<0.8.4;

contract  DappToken {
    // Contructor 
    // Set the total number of tokens
    // Read the total number of tokens
    uint256 public totalSupply;

    constructor () public {
        totalSupply = 1000000;
    }
}