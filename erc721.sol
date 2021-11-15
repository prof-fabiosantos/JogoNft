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
 
  function mint(address _to, string calldata _uri) public {
    nextTokenId++;
    super._mint(_to, nextTokenId);
    super._setTokenUri(nextTokenId, _uri);
  }
 
}