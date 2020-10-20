pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract KevinToken is ERC20, ERC20Detailed {
    constructor(uint256 initialSupply)
        public
        ERC20Detailed("Kevin Token", "KVD", 18)
    {
        _mint(msg.sender, initialSupply);
    }
}
