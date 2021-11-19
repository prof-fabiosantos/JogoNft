//Autor: Prof. Fabio Santos (fssilva@uea.edu.br)
// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;
 
import "https://github.com/0xcert/ethereum-erc721/src/contracts/tokens/nf-token-metadata.sol";
import "https://github.com/0xcert/ethereum-erc721/src/contracts/ownership/ownable.sol";
 
contract newNFT is NFTokenMetadata, Ownable {
 
  
  constructor() {
    nftName = "STAR Token";
    nftSymbol = "STAR";
    nextTokenId = 0;
  }
 
 //Scores dos jogadores
 struct PlayGame {
    address player;
    uint score;
  }
  
  //Tokens dos jogadores
  struct tokensIdOfOwner {
      address owner;
      uint tokenId;
  }
  
  
  uint public nextTokenId;
  
  //arraysdos scores
  PlayGame[] public ranking;
  //array de Tokens Id
  tokensIdOfOwner[] public tokensIdsList;
  
  //função para cunhar NFT
  function mint(address _to, string calldata _uri) public {
    nextTokenId++;
    super._mint(_to, nextTokenId);
    super._setTokenUri(nextTokenId, _uri);
    updateTokensIdList(_to, nextTokenId);
  }
  
  
  function deleteTokenId(address _owner, address _to, uint _tokenId) public {
     
    for (uint256 i = 0; i < tokensIdsList.length; i++) {
      if (tokensIdsList[i].owner == _owner) 
          if (tokensIdsList[i].tokenId == _tokenId){
            tokensIdsList[i] = tokensIdsList[tokensIdsList.length-1];
            tokensIdsList.pop();
          }
    }
    updateTokensIdList(_to, _tokenId);
  }
  
  
  function updateRanking(address _from, uint _score) public {
      PlayGame memory newPlayGame = PlayGame(_from, _score);
      ranking.push(newPlayGame);
  }
  
  // Getters
  function getRanking() public view returns (PlayGame[] memory) {
      
    return ranking;
  }
  
  
   function updateTokensIdList(address _from, uint _tokenId) public {
      tokensIdOfOwner memory newTokenId = tokensIdOfOwner(_from, _tokenId);
      tokensIdsList.push(newTokenId);
  }
  
 
  function getTokensIdsList() public view returns (tokensIdOfOwner[] memory) {
    return tokensIdsList;
  }
  
}