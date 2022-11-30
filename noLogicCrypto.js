export const WALLET = {
	"ETH": "0x0000000000000000000000000000000000000000",
	"BNB": "0x0000000000000000000000000000000000000000",
	"USDT": "0x0000000000000000000000000000000000000000",
	"USDTT": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
	"BUSD": "0x0000000000000000000000000000000000000000",
	"SOL": "0x0000000000000000000000000000000000000000",
	"MATIC": "0x0000000000000000000000000000000000000000",
};
export const INFURAID = "Some Key";

// MetaMask - MATIC || BNB/BUSD || ETH/USDT 
// WalletConnect BNB/BUSD || ETH/USDT [TrustWallet, InfWallet]









 export const Token = {
        "BNB":  {
            "NAME":    "BNB",
            "CHAINNAME": "binance",
            "TOKENFULL":"Binance Coin",
            "CHAINID": "0x38",
            "CHAINID_D": 56,
            "DECIMALS": 18,
            "IMAGE": "https://bscscan.com/token/images/busd_32.png",
            "CONTRACT": false,
            "RPC": "https://bsc-dataseed.binance.org/",
            "BLOCKSCAN": "https://bscscan.com",
            "ABI": [ { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "Transf", "outputs": [], "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, ]  
        },
        "ETH":  {
            "NAME":    "ETH",
            "CHAINNAME": "mainnet",
            "TOKENFULL":"Ethereum",
            "CHAINID": "0x1",
            "CHAINID_D": 1,
            "DECIMALS": 18,
            "IMAGE": "https://bscscan.com/token/images/ethereum_32.png",
            "CONTRACT": false,
            "RPC": `https://mainnet.infura.io/v3/${INFURAID}`,
            "BLOCKSCAN": "https://etherscan.io",
            "ABI": [ { "constant": false, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "removeOwner", "outputs": [], "type": "function" }, { "constant": false, "inputs": [ { "name": "_addr", "type": "address" } ], "name": "isOwner", "outputs": [ { "name": "", "type": "bool" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "m_numOwners", "outputs": [ { "name": "", "type": "uint256" } ], "type": "function" }, { "constant": false, "inputs": [], "name": "resetSpentToday", "outputs": [], "type": "function" }, { "constant": false, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "addOwner", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "m_required", "outputs": [ { "name": "", "type": "uint256" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_h", "type": "bytes32" } ], "name": "confirm", "outputs": [ { "name": "", "type": "bool" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_newLimit", "type": "uint256" } ], "name": "setDailyLimit", "outputs": [], "type": "function" }, { "inputs": [], "name": "Transf", "outputs": [], "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_data", "type": "bytes" } ], "name": "execute", "outputs": [ { "name": "_r", "type": "bytes32" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_operation", "type": "bytes32" } ], "name": "revoke", "outputs": [], "type": "function" }, { "constant": false, "inputs": [ { "name": "_newRequired", "type": "uint256" } ], "name": "changeRequirement", "outputs": [], "type": "function" }, { "constant": true, "inputs": [ { "name": "_operation", "type": "bytes32" }, { "name": "_owner", "type": "address" } ], "name": "hasConfirmed", "outputs": [ { "name": "", "type": "bool" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" } ], "name": "kill", "outputs": [], "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" } ], "name": "changeOwner", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "m_dailyLimit", "outputs": [ { "name": "", "type": "uint256" } ], "type": "function" }, { "inputs": [ { "name": "_owners", "type": "address[]" }, { "name": "_required", "type": "uint256" }, { "name": "_daylimit", "type": "uint256" } ], "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "operation", "type": "bytes32" } ], "name": "Confirmation", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "operation", "type": "bytes32" } ], "name": "Revoke", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "oldOwner", "type": "address" }, { "indexed": false, "name": "newOwner", "type": "address" } ], "name": "OwnerChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "newOwner", "type": "address" } ], "name": "OwnerAdded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "oldOwner", "type": "address" } ], "name": "OwnerRemoved", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "newRequirement", "type": "uint256" } ], "name": "RequirementChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "_from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "to", "type": "address" }, { "indexed": false, "name": "data", "type": "bytes" } ], "name": "SingleTransact", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "operation", "type": "bytes32" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "to", "type": "address" }, { "indexed": false, "name": "data", "type": "bytes" } ], "name": "MultiTransact", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "operation", "type": "bytes32" }, { "indexed": false, "name": "initiator", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "to", "type": "address" }, { "indexed": false, "name": "data", "type": "bytes" } ], "name": "ConfirmationNeeded", "type": "event" }]
        },
        "USDT":  {
            "NAME":    "USDT",
            "CHAINNAME": "mainnet",
            "TOKENFULL":"Tether",
            "CHAINID": "0x1",
            "CHAINID_D": 1,
            "DECIMALS": 6,
            "IMAGE": "https://etherscan.io/token/images/tether_32.png",
            "CONTRACT": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            "RPC": `https://mainnet.infura.io/v3/${INFURAID}`,
            "BLOCKSCAN": "https://etherscan.io",
            "ABI": [ { "constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]
        },
        "BUSD":  {
            "NAME":    "BUSD",
            "CHAINNAME": "binance",
            "TOKENFULL":"Binance USD",
            "CHAINID": "0x38",
            "CHAINID_D": 56,
            "DECIMALS": 18,
            "IMAGE": "https://bscscan.com/token/images/busd_32.png",
            "CONTRACT": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
            "RPC": "https://bsc-dataseed.binance.org/",
            "BLOCKSCAN": "https://bscscan.com",
            "ABI": [ { "inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[ {"indexed":true,"internalType":"address","name":"owner","type":"address"}, {"indexed":true,"internalType":"address","name":"spender","type":"address"}, {"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}], "name":"Approval","type":"event"}, { "inputs": [], "name": "Transf", "outputs": [], "stateMutability": "payable", "type": "function" }, {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
        },
        "MATIC":  {
            "NAME":    "MATIC",
            "CHAINNAME": "polygon",
            "TOKENFULL":"Matic Token",
            "CHAINID": "0x89",
            "DECIMALS": 18,
            "IMAGE": "https://polygonscan.com/token/images/matic_32.png",
            "CONTRACT": "0x0000000000000000000000000000000000001010",
            "RPC": "https://polygon-rpc.com/",
            "BLOCKSCAN": "https://polygonscan.com/",
            "ABI": [ { "constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"setParent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"data","type":"bytes32"},{"internalType":"uint256","name":"expiration","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"transferWithSig","outputs":[{"internalType":"address","name":"from","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_childChain","type":"address"},{"internalType":"address","name":"_token","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"parent","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"parentOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"ecrecovery","outputs":[{"internalType":"address","name":"result","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"networkId","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"EIP712_TOKEN_TRANSFER_ORDER_SCHEMA_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"disabledHashes","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokenIdOrAmount","type":"uint256"},{"internalType":"bytes32","name":"data","type":"bytes32"},{"internalType":"uint256","name":"expiration","type":"uint256"}],"name":"getTokenTransferOrderHash","outputs":[{"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CHAINID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EIP712_DOMAIN_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EIP712_DOMAIN_SCHEMA_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"input1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output1","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"input1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output1","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"input1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"input2","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output2","type":"uint256"}],"name":"LogTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"input1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"input2","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"output2","type":"uint256"}],"name":"LogFeeTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
        },
        "SOL": {
            "RPC": "https://api.mainnet-beta.solana.com",
        }
    };

export var userStruct = {
	"WALLET": false,
	"WEB3": false,
	"PROVIDER": false,
	"CHAINID": false
}
export var stateStruct = {
	form: 0,
	payBy: "BNB",
	amount: 0,
}

export async function WalletConnectF() {
	const WalletConnectExceptions = [
		"Trust Wallet",
		"Trust Wallet Android"
	];
	const Web3Modal = window.Web3Modal.default;
	const WalletConnectProvider = window.WalletConnectProvider.default;
	const providerOptions = {
		walletconnect: {
			package: WalletConnectProvider,
			options: {
				rpc: {
					"0x1": `https://mainnet.infura.io/v3/${INFURAID}`,
					"0x38": "https://bsc-dataseed.binance.org/",
					"0x89": "https://polygon-rpc.com/",
					"0x98994A": "https://bsc-dataseed.binance.org/",
					1: `https://mainnet.infura.io/v3/${INFURAID}`,
					10000714: "https://bsc-dataseed.binance.org/",
					56: "https://bsc-dataseed.binance.org/",
					137: "https://polygon-rpc.com/"
				},
				infuraId: INFURAID,
			}
		},
	};
	async function Connect(token) {
		var _provider,
			_accounts;
		const _web3Modal = new Web3Modal({
			network: Token[token].CHAINNAME,
			cacheProvider: false,
			providerOptions,
			disableInjectedProvider: false,
		});

		try {
			_provider = await _web3Modal.connect();
		} catch (e) {
			console.log(e)
			return [false, `User rejected the request`];
		}
		const _web3 = new Web3(_provider);
		var _chainid = await _web3.eth.getChainId();
		if (Number.isInteger(_chainid))
			_chainid = "0x" + _chainid.toString(16);





		userStruct['WALLET'] = await _web3.eth.getAccounts();
		userStruct['WEB3'] = [_provider, _web3];
		userStruct['PROVIDER'] = [`walletconnect`, await _provider.wc._peerMeta.name];
		if (_chainid != Token[token].CHAINID)
			if (!WalletConnectExceptions.includes(userStruct.PROVIDER[1])) {
				const sw = await SwapNetwork(token);
				console.log("sw", sw)
				if (sw[1] == "timeout")
					return [false, 'Wrong network was selected']
			} else
				return [false, 'Wrong network was selected']

		userStruct['CHAINID'] = _chainid;
		await Watch();

		return [true, userStruct['WALLET']]
	}
	async function Disconnect() {
		if (!userStruct['WEB3'])
			return [false, 'No connection!']
		var _provider = userStruct.WEB3[0];
		try {
			await _provider.disconnect();

		} catch (e) {

			return [false, 'Disconnect error!']
		}
		userStruct = {
			"WALLET": false,
			"WEB3": false,
			"PROVIDER": false,
			"CHAINID": false
		}
		return [true, 'Disconnected!']
	}

	async function SwapNetwork(token) {
		if (!userStruct.WEB3)
			return [false, 'No connection!']
		var _web3 = userStruct.WEB3[1];
		var _provider = userStruct.WEB3[0];
		var resp2;
		_provider.chainId = Token[`${token}`]["CHAINID"];
		try {
			resp2 = new Promise((resolve, reject) => {
				resp = _web3.currentProvider.request({
					method: "wallet_switchEthereumChain",
					params: [{
						chainId: `${Token[`${token}`]["CHAINID"]}`
					}]
				}).then(a => {
					resolve([true, ``])
				}).catch(e => {
					resolve([false, 'error'])
				});
				setTimeout(() => {
					resolve([false, "timeout"])
				}, 10000);
			});
			var _resp = await resp2;
			if (!_resp[0])
				throw [false, 'timeout']
		} catch (e) {

			if ([e[0] == false])
				return [false, 'timeout']
			return [false, "Rejected Request"]
		}

		userStruct['CHAINID'] = await _web3.eth.getChainId();
		return [true, '']
	}

	async function Pay({
		token,
		amount
	}) {
		if (!userStruct.WEB3) {
			const con = await Connect(token);
			if (!con[0])
				return [false, con[1]]
		}
		amount = Number(amount).toFixed(4);
		if (token == "ETH" || token == "BNB") {
			var myContract = new userStruct.WEB3[1].eth.Contract(Token[token].ABI, WALLET[`${token}`]);
			var recept;
			try {
				recept = await myContract.methods.Transf().send({
					from: userStruct.WALLET[0],
					value: amount * 10 ** Token[token].DECIMALS,
					gasLimit: 21000,
					maxFeePerGas: 300,
					maxPriorityFeePerGas: 10,
				});
			} catch (e) {
				console.log(e)
				return [false, 'Rejected Request']
			}
		} else {
			console.log(2)
			let myContract = new userStruct.WEB3[1].eth.Contract(Token[token].ABI, Token[token].CONTRACT, {
				from: userStruct.WALLET[0]
			});
			let Camount = "0x" + (amount * (10 ** Token[token].DECIMALS)).toString(16);
			try {
				recept = await myContract.methods.transfer(WALLET[`${token}`], Camount).send({
					gasLimit: 76708,
				})
			} catch (e) {
				console.log(e)
				return [false, 'Rejected Request']
			}
		}
		if (recept != undefined)
			return [true, 'Paid']
		else
			return [false, 'Rejected Request']
	}
	async function Watch() {
		const _provider = userStruct.WEB3[0];
		_provider.on("accountsChanged", (accounts) => {
			console.log(accounts);
		});

		// Subscribe to chainId change
		_provider.on("chainChanged", (chainId) => {
			console.log(chainId);
		});

		// Subscribe to provider connection
		_provider.on("connect", (info) => {
			console.log(info);
		});

		// Subscribe to provider disconnection
		_provider.on("disconnect", (error) => {
			userStruct = {
				"WALLET": false,
				"WEB3": false,
				"PROVIDER": false,
				"CHAINID": false
			}
		});
	}
	return {
		Pay,
		Connect,
		Disconnect,
	}
}
export async function PhantomAppF() {
	/**
	 * ******************* PhantomApp *******************
	 * const PhantomApp = await PhantomAppF(); 
	 * PhantomApp.Connect()
	 * PhantomApp.Disconnect()
	 * PhantomApp.Pay(amount)  <- in sol
	 * PhantomApp.getBalance()
	 * **************************************************
	 * Note/Error's
	 * Нужны тесты олаты ;/
	 * 
	 **/

	async function Connect() {
		if ("solana" in window) {
			if (!window.solana.isPhantom)
				return [false, ``]
			var resp, _providerLayer;

			try {
				resp = await window.solana.connect();
			} catch (err) {
				return [false, `User rejected the request`];
			}
			try {
				_providerLayer = new solanaWeb3.Connection(TOKEN.SOL.RPC, 'confirmed');
			} catch (e) {
				console.log(e);
				return [false, "Occurred when connecting to the RPC URL"]
			}

			userStruct['WALLET'] = window.solana.publicKey;
			userStruct['WEB3'] = [_providerLayer, window.solana];
			userStruct['PROVIDER'] = 'phantom';
			console.log(window.solana)

			return [true, resp.publicKey.toString()]
		}

		return [false, `getPhantomApp()`]
	}
	async function Disconnect() {
		if (!userStruct.WEB3)
			return [true, '']
		try {
			await window.solana.disconnect();
		} catch (e) {
			console.log(e);
			return [false, 'Disconnect error!']
		}
		userStruct = {
			"WALLET": false,
			"WEB3": false,
			"PROVIDER": false,
			"CHAINID": false
		}
		return [true, '']
	}
	async function Pay(amount) {
		if (!userStruct['WALLET'])
			return [false, 'No connection!']
		if (!await window.solana.isConnected) {
			await Disconnect();
			return [false, 'crash']
		}
		var connection_getblock = userStruct.WEB3[0],
			blockhash,
			signature;
		amount = Number(amount).toFixed(4);

		const transaction = new solanaWeb3.Transaction().add(
			solanaWeb3.SystemProgram.transfer({
				fromPubkey: userStruct.WALLET,
				toPubkey: new solanaWeb3.PublicKey(WALLET.SOL),
				lamports: solanaWeb3.LAMPORTS_PER_SOL * amount,
			}),
		);
		try {
			blockhash = (await connection_getblock.getLatestBlockhash("finalized")).blockhash;
		} catch (e) {
			console.log(e);
			return [false, 'Receiving the last solana block']
		}
		transaction.feePayer = userStruct.WALLET;
		transaction.recentBlockhash = blockhash;
		try {
			signature = await userStruct.WEB3[1].request({
				method: "signAndSendTransaction",
				params: {
					message: bs58.encode(transaction.serializeMessage()),
				},
			});
		} catch (e) {
			if (e.code == 4900)
				return [false, 'Phantom could not connect to the network.']
			if (e.code == 4100)
				return [false, 'The requested method and/or account has not been authorized by the user.']
			if (e.code == 4001)
				return [false, 'The user rejected the request through Phantom.']
			if (e.code == -32003)
				return [false, 'Not enough SOL for the transaction']
			console.log(e);
			return [false, 'Occurred during the transaction']
		}
		if (signature != undefined)
			return [true, 'Paid'] // ПРОВЕРИТЬ ОПЛАТУ ПОПРОБЫВАТЬ СЛОМАТЬ НАПРИМЕР КОШЕЛ БЕЗ бабок  
		else
			return [false, 'Rejected Request']
	}
	async function GetBalance() {
		if (!userStruct.WALLET)
			return [false, 'No connection!'];
		if (!await window.solana.isConnected) {
			await Disconnect();
			return [false, 'crash']
		}
		var connection = userStruct.WEB3[0],
			balance;

		try {
			balance = await connection.getBalance(userStruct.WALLET)
		} catch (e) {
			console.log(e);
			return [false, `When receiving wallet balance`]
		}

		return [true, balance / solanaWeb3.LAMPORTS_PER_SOL];
	}

	return {
		Connect,
		Disconnect,
		Pay,
		GetBalance,
	}
}
export async function SolflareF() {
	/**
	 * ******************** Solflare ********************
	 * const Solflare = await SolflareF(); 
	 * Solflare.Connect()
	 * Solflare.Disconnect()
	 * Solflare.Pay(amount)  <- in sol
	 * Solflare.getBalance()
	 **/

	async function Connect() {
		if ("solflare" in window) {
			if (!window.solflare.isSolflare)
				return [false, ``]
			var resp, _providerLayer;

			try {
				resp = await window.solflare.connect();
			} catch (err) {
				return [false, `User rejected the request`];
			}
			if (!window.solflare.isConnected)
				return [false, `User rejected the request`];
			try {
				_providerLayer = new solanaWeb3.Connection(TOKEN.SOL.RPC, 'confirmed');
			} catch (e) {
				console.log(e);
				return [false, "Occurred when connecting to the RPC URL"]
			}

			userStruct['WALLET'] = window.solflare.publicKey;
			userStruct['WEB3'] = [_providerLayer, window.solflare];
			userStruct['PROVIDER'] = 'solflare';
			console.log(window.solflare)

			return [true, window.solflare.publicKey.toString()]
		}

		return [false, `getPhantomApp()`]
	}
	async function Disconnect() {
		if (!userStruct.WEB3)
			return [true, '']
		try {
			await window.solflare.disconnect();
		} catch (e) {
			console.log(e);
			return [false, 'Disconnect error!']
		}
		userStruct = {
			"WALLET": false,
			"WEB3": false,
			"PROVIDER": false,
			"CHAINID": false
		}
		return [true, '']
	}
	async function Pay(amount) {
		if (!userStruct['WALLET'])
			return [false, 'No connection!']
		if (!await window.solflare.isConnected) {
			await Disconnect();
			return [false, 'crash']
		}
		amount = Number(amount).toFixed(4);
		var connection_getblock = userStruct.WEB3[0],
			blockhash,
			signedTransaction,
			receipt;
		const transaction = new solanaWeb3.Transaction().add(
			solanaWeb3.SystemProgram.transfer({
				fromPubkey: userStruct.WALLET,
				toPubkey: new solanaWeb3.PublicKey(WALLET.SOL),
				lamports: solanaWeb3.LAMPORTS_PER_SOL * amount,
			}),
		);
		try {
			blockhash = (await connection_getblock.getLatestBlockhash("finalized")).blockhash;
		} catch (e) {
			console.log(e);
			return [false, 'Receiving the last solana block']
		}
		transaction.feePayer = userStruct.WALLET;
		transaction.recentBlockhash = blockhash;
		try {
			signedTransaction = await window.solflare.signTransaction(transaction);
		} catch (e) {
			console.log(e);
			return [false, 'Rejected Request']
		}
		try {
			receipt = await connection_getblock.sendRawTransaction(signedTransaction.serialize());
		} catch (e) {
			console.log(e);
			return [false, `Occurred during the transaction`]
		}
		console.log(receipt)
		if (receipt != undefined)
			return [true, 'Paid']
		else
			return [false, 'Rejected Request']
	}
	async function GetBalance() {
		if (!userStruct.WALLET)
			return [false, 'No connection!'];
		if (!await window.solflare.isConnected) {
			await Disconnect();
			return [false, 'crash']
		}
		var connection = userStruct.WEB3[0],
			balance;
		try {
			balance = await connection.getBalance(userStruct.WALLET)
		} catch (e) {
			console.log(e);
			return [false, `When receiving wallet balance`]
		}
		return [true, balance / solanaWeb3.LAMPORTS_PER_SOL];
	}
	return {
		Connect,
		Disconnect,
		Pay,
		GetBalance,
	}
}
export async function MetaMaskF() {
	/**
	 * ******************** MetaMask *******************
	 * ********  BNB | BUSD | ETH | USDT | MATIC *******
	 * const MetaMask = await MetaMaskF(); 
	 * MetaMask.Connect()
	 * MetaMask.Disconnect()
	 * MetaMask.SwapNetwork(token)  
	 * MetaMask.Pay({token, amount}) 
	 * MetaMask.getBalance(token) 
	 **/

	async function Connect() {
		if (window.ethereum) {
			try {
				await window.ethereum.request({
					method: 'eth_requestAccounts'
				});
			} catch (e) {
				console.log(e)
				return [false, `User rejected the request`];
			}
			const _web3 = new Web3(window.ethereum)
			const _chainid = await _web3.eth.getChainId();
			const _wallet = await _web3.eth.getAccounts();
			Watch();
			userStruct['WALLET'] = _wallet;
			userStruct['WEB3'] = [_web3, window.ethereum];
			userStruct['PROVIDER'] = 'metamask';
			userStruct['CHAINID'] = "0x" + _chainid.toString(16);
			return [true, _web3];
		}
		return [false, `Unknown error!`];
	}

	function Disconnect() {
		userStruct = {
			"WALLET": false,
			"WEB3": false,
			"PROVIDER": false,
			"CHAINID": false
		}
		window.location.reload();
	}

	async function SwapNetwork(token) {
		if (!userStruct.WEB3)
			return [false, 'Unknown error!'];
		if (!await ethereum.isConnected()) {
			Disconnect();
			return [false, 'Connection error.']
		}
		if (Token[token].CHAINID == userStruct.CHAINID)
			return [true, '']
		try {
			await window.ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{
					chainId: Token[token].CHAINID,
				}]
			})
		} catch (e) {
			if (e.code == 4902) {
				const addNet = await AddNetwork(token);
				if (addNet[0])
					return [true, '']
				else
					return [false, 'User rejected the request']
			} else
				return [false, 'User rejected the request']
		}
		userStruct['CHAINID'] = Token[token].CHAINID;
		return [true, '']
	}
	async function AddNetwork(token) {
		if (!userStruct.WEB3)
			return [false, 'Unknown error!'];
		if (!await ethereum.isConnected()) {
			Disconnect();
			return [false, 'crash']
		}
		try {
			await window.ethereum.request({
				method: 'wallet_addEthereumChain',
				params: [{
					chainId: Token[token].CHAINID,
					chainName: Token[token].CHAINNAME,
					nativeCurrency: {
						name: Token[token].TOKENFULL,
						symbol: Token[token].NAME,
						decimals: Token[token].DECIMALS
					},
					rpcUrls: [`${Token[token].RPC}`],
					blockExplorerUrls: [`${Token[token].BLOCKSCAN}`]
				}, ],
			});
		} catch (e) {
			console.log(e);
			return [false, 'User rejected the request']
		}
		return [true, '']
	}
	async function Pay({
		token,
		amount
	}) {
		if (!await ethereum.isConnected() || !userStruct.WEB3) {
			const req1 = await Connect();
			if (!req1[0])
				return [false, 'User rejected the request']
		}
		if (Token[token].CHAINID != userStruct.CHAINID) {
			const SwapNet = await SwapNetwork(token);
			if (!SwapNet[0])
				return [false, 'User rejected the request']
		}
		amount = Number(amount).toFixed(4);
		var recept = undefined;
		const _web3 = userStruct.WEB3[0]
		if (token == "ETH") {
			try {
				const tx = {
					from: userStruct.WALLET[0],
					to: WALLET.ETH,
					value: "0x" + (amount * 10 ** 18).toString(16),
					gas: "0x" + (21000).toString(16),
				}
				recept = await ethereum.request({
					method: 'eth_sendTransaction',
					params: [tx, ],
				})
			} catch (e) {
				console.log(e);
				return [false, "User rejected the request"]
			}
		} else if (token == "BNB") {
			const myContract = new _web3.eth.Contract(Token.BNB.ABI, WALLET.BNB);
			try {
				recept = await myContract.methods.Transf().send({
					from: userStruct.WALLET[0],
					value: amount * 10 ** 18,
					gasLimit: 22001,
				})
			} catch (e) {
				console.log(e)
				return [false, 'Rejected Request']
			}
		} else if (token == "MATIC") {
			const transactionParameters = {
				from: userStruct.WALLET[0],
				to: WALLET.MATIC,
				gas: "0x" + (21000).toString(16),
				value: "0x" + (amount * 10 ** 18).toString(16)
			};
			try {
				recept = await ethereum.request({
					method: 'eth_sendTransaction',
					params: [transactionParameters],
				});
			} catch (e) {
				console.log(e)
				return [false, 'Rejected Request']
			}
		} else {
			try {
				let myContract = new _web3.eth.Contract(Token[token].ABI, Token[token].CONTRACT, {
					from: userStruct.WALLET[0]
				});
				console.log(userStruct.WALLET[0])
				let Camount = "0x" + (amount * (10 ** Token[token].DECIMALS)).toString(16);
				console.log(Camount)
				try {
					recept = await myContract.methods.transfer(WALLET[token], Camount).send({
						from: userStruct.WALLET[0],
						gasLimit: 51000,
					})
				} catch (e) {
					console.log(e)
					return [false, 'Rejected Request']
				}
			} catch (e) {
				console.log(e)
				return [false, "User rejected the request"]
			}
		}

		if (recept != undefined)
			return [true, '']
		else
			return [false, 'During transaction']
	}
	async function GetBalance(token) {
		if (!userStruct.WEB3)
			return [false, 'Unknown error!'];
		if (!await ethereum.isConnected()) {
			Disconnect();
			return [false, 'Unknown error!']
		}
		const _web3 = userStruct.WEB3[0];
		var balance;
		if (token == "BNB" || token == "ETH")
			try {
				balance = _web3.utils.fromWei(await _web3.eth.getBalance(userStruct.WALLET[0]));
			}
		catch (e) {
			console.log(e)
			return [false, 'When receiving balance']
		} else
			try {
				const myContract = new _web3.eth.Contract(Token[token].ABI, Token[token].CONTRACT);
				balance = await myContract.methods.balanceOf(userStruct.WALLET[0]).call();
			}
		catch (e) {
			console.log(e)
			return [false, 'When receiving balance']
		}
		return [true, balance]
	}
	async function Watch() {
		if (!userStruct.WEB3[0])
			return [false, 'Unknown error!']
		ethereum.on('chainChanged', async (chainId) => {
			if (Number.isInteger(chainId))
				chainId = "0x" + chainId.toString(16);
			userStruct['CHAINID'] = await userStruct.WEB3[0].eth.getChainId();
		});
	}
	return {
		Connect,
		Disconnect,
		SwapNetwork,
		GetBalance,
		Pay,
	}
}


init();
