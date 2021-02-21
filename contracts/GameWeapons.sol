// SPDX-License-Identifier: MIT
pragma solidity 0.7.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract GameWeapons is ERC1155{
	
	uint256 public constant SWORD = 0;
	uint256 public constant AXE = 1;
	uint256 public constant MJOLNIR = 2;

    constructor() ERC1155("https://raneet10.github.io/GameWeapons/api/token/{id}.json") {
        _mint(msg.sender, SWORD, 10**26, "");
        _mint(msg.sender, AXE, 10**18, "");
        _mint(msg.sender, MJOLNIR, 1, "");
		
    }
}
