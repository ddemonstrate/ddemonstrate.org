from web3 import Web3
import json

#node_url = "https://ropsten.infura.io/v3/eaf5e0b4a01042a48211762c8d4eec44"

## Rinkeby .105, Main .104
node_url = "http://192.168.1.105:8545"
#node_url = "http://192.168.1.104:8545"
web3 = Web3(Web3.HTTPProvider(node_url))

print(web3.isConnected())
print(web3.eth.blockNumber)

owner = "0xa1138fccd5f8E126E8d779CF78a547517307559d"
#address = "0x23da3e3Cd9400B624169b76A87325e4E4F7bC0E0"

balance = web3.eth.getBalance(owner)
print("Balance")
print(balance)

private_key = "0x600f003a6ed434917afbbc7f03f2edf86a19f72448e2e9d05917e73e502f6970"
account = web3.eth.account.privateKeyToAccount(private_key)

#https://ethereum.stackexchange.com/questions/71421/how-to-create-a-local-account-from-an-external-private-key-in-web3-py
print(account.address)

with open("build/contracts/Demonstrate.json", "r") as f:
    _json = json.load(f)

    abi = _json["abi"]

    #bytecode = compiled_sol['contracts']['demonstrate.sol']['Demonstrate']['evm']['bytecode']['object']
    bytecode = _json["bytecode"]
    print(bytecode)

    Ddemonstrate = web3.eth.contract(abi=abi, bytecode=bytecode)
    #tx_hash = Ddemonstrate.constructor().transact()

    #signed_txn = web3.eth.account.signTransaction(mint_txn, private_key=private_key)

    #print(signed_txn)