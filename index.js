// Source code to interact with smart contract
//<-- Autor: Prof. Fabio santos (fssilva@uea.edu.br) -->

//connection with node
if (window.ethereum) {
  window.web3 = new Web3(window.ethereum)
  window.ethereum.enable()
}
else if (window.web3) {
  window.web3 = new Web3(window.web3.currentProvider)
}
else {
  window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
}
console.log (window.web3.currentProvider)


// contractAddress and abi are setted after contract deploy
var contractAddress = '0x227325F8d74b4e7Dcfc861B6934Ca69E0a26708E';

var abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "_approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "CANNOT_TRANSFER_TO_ZERO_ADDRESS",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "NOT_CURRENT_OWNER",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_approved",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "deleteTokenId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRanking",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "player",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "score",
						"type": "uint256"
					}
				],
				"internalType": "struct newNFT.PlayGame[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTokensIdsList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"internalType": "struct newNFT.tokensIdOfOwner[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_uri",
				"type": "string"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextTokenId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ranking",
		"outputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "score",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "_interfaceID",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokensIdsList",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_score",
				"type": "uint256"
			}
		],
		"name": "updateRanking",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "updateTokensIdList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

//contract instance
contract = new web3.eth.Contract(abi, contractAddress);

// Accounts
var account;

web3.eth.getAccounts(function(err, accounts) {
  if (err != null) {
    alert("Ocorreu um erro ao buscar suas contas.");
    return;
  }
  if (accounts.length == 0) {
    alert("Nenhuma conta encontrada! Verifique se o Ethereum client está configurado corretamente.");
    return;
  }
  account = accounts[0];
  console.log('Account: ' + account);
  web3.eth.defaultAccount = account;
});


//Smart contract functions

async function tokenURI(id) {
	
    const uri = await contract.methods.tokenURI(id).call();	
	return uri;
			
}

async function mintNFT(score) {
  var uri_nft = 0;
  if (score == 150) {
	var uri_nft = "https://ipfs.io/ipfs/QmaV71twWLrJfLrZ9MjVgwuMJzNQ3e6pYgACY8Kn3K4xXV?filename=estrela_azul.png"; 
  }
  else if (score == 300) {
	var uri_nft = "https://ipfs.io/ipfs/QmQFT25ramLQXs3YNQzmhUsHwbWpknLm8sRsnpHFwM3CgD?filename=estrela_verde.jpg"; 
  }
  else if (score == 500) {
	var uri_nft = "https://ipfs.io/ipfs/QmQTnud4W6DLRtAhG1CZxBnXKSY4TyQYT7mmiPHTyU5F7S?filename=estrela_vermelha.jpg"; 
  }
  else if (score == 800) {
	var uri_nft = "https://ipfs.io/ipfs/QmY3uQbRAHmsDosqbPy5Rj4xNrAY22vNwJgz18Ew4HCYtN?filename=estrela_dourada.jpg"; 
  }
	  
  await contract.methods.mint(web3.eth.defaultAccount,uri_nft).send({from: web3.eth.defaultAccount}).then( function(tx) { 
  console.log("Transaction: ", tx); 
  return tx;
  });	 
}


async function transferStarToken(toaddr, tokenId){
	await contract.methods
            .transferFrom(web3.eth.defaultAccount, toaddr, tokenId)
            .send({
              from: web3.eth.defaultAccount
            })
            .then( function(r){
              console.log(r);
              return r;
            });
}

async function updateListTokensIds(tokenId){
	
	await contract.methods
            .updateTokensIdList(web3.eth.defaultAccount, tokenId)
            .send({
              from: web3.eth.defaultAccount
            })
            .then( function(r){
              console.log(r);
              return r;
            });	
}

async function tokenId(){
	
	const token_id = await contract.methods.nextTokenId().call();	
	console.log("Token Id: ", token_id);
	return token_id;
	
} 

async function deleteTokenId(_to, _tokenId){

	await contract.methods
            .deleteTokenId(web3.eth.defaultAccount, _to, _tokenId)
            .send({
              from: web3.eth.defaultAccount
            })
            .then( function(r){
              console.log(r);
              return r;
            });	
}

async function updateListRanking(score){
	
	await contract.methods
            .updateRanking(web3.eth.defaultAccount, score)
            .send({
              from: web3.eth.defaultAccount
            })
            .then( function(r){
              console.log(r);
              return r;
            });	
}

async function getRanking(){
	
	const ranking = await contract.methods.getRanking().call();	
	console.log("ranking: ", ranking);
	return ranking;
	
}

async function getTotalTokenIds(){
	var tokenIdsList = [];
	var count = 0;
	const tokenIds = await contract.methods.getTokensIdsList().call();
    for (var i=0; i<tokenIds.length; i++){
	 count++;		
	}		
	console.log("Total Tokens id: ", count);
	return count;

}


async function getTokenIds(){
	var tokenIdsList = [];
	const tokenIds = await contract.methods.getTokensIdsList().call();
    for (var i=0; i<tokenIds.length; i++){
		if (tokenIds[i].owner == web3.eth.defaultAccount)
			tokenIdsList[i] = tokenIds[i].tokenId;			
	}		
	console.log("TokenIds list: ", tokenIdsList);
	return tokenIdsList;
	
}

async function getsaldoToken(){
	
	const saldo = await contract.methods.balanceOf(web3.eth.defaultAccount).call();	
	console.log("Saldo: ", saldo);
	return saldo;
	
}
