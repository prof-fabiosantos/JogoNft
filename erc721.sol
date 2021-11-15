//Autor: Prof. Fabio Santos (fssilva@uea.edu.br)
// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;
 
import "https://github.com/0xcert/ethereum-erc721/src/contracts/tokens/nf-token-metadata.sol";
import "https://github.com/0xcert/ethereum-erc721/src/contracts/ownership/ownable.sol";
 
contract newNFT is NFTokenMetadata, Ownable {
 
  uint public nextTokenId;
  
  constructor() {
    nftName = "STAR Token";
    nftSymbol = "STAR";
    nextTokenId = 0;
  }
 
 
 struct PlayGame {
    address player;
    uint scoreid;
  }
  
  PlayGame[] public ranking;
 
  function mint(address _to, string calldata _uri) public {
    nextTokenId++;
    super._mint(_to, nextTokenId);
    super._setTokenUri(nextTokenId, _uri);
  }
  
  function updateNextTokenId() public {
      nextTokenId--;
  }
  
  function updateRanking(address _from, uint _score) public{
      PlayGame memory newPlayGame = PlayGame(_from, _score);
      ranking.push(newPlayGame);
  }
  
 // Getters
  function getRanking() public view returns (PlayGame[] memory) {
    return ranking;
  }
  
}