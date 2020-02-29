from web3 import Web3
import json

infura_url = "https://ropsten.infura.io/v3/eaf5e0b4a01042a48211762c8d4eec44"
web3 = Web3(Web3.HTTPProvider(infura_url))

print(web3.isConnected())
print(web3.eth.blockNumber)

owner = "0xa1138fccd5f8E126E8d779CF78a547517307559d"
address = "0x23da3e3Cd9400B624169b76A87325e4E4F7bC0E0"
balance = web3.eth.getBalance(address)

with open("demonstrate.abi.json", "r") as f:
    abi = json.load(f)
    print(abi)
    contract = web3.eth.contract(address=address, abi=abi)

    demonstration = contract.functions.demonstrations(0).call()
    print(demonstration)

    #balance = erc20.functions.balanceOf(owner).call()
    #print(balance)

    nonce = w3.eth.getTransactionCount(owner)
    print(nonce)

    # tx = contract.functions.add(1,2).buildTransaction({'chainId': 3,'gas': 70000,'gasPrice': w3.toWei('1', 'gwei'),'nonce': nonce})
    # private_key = '600f003a6ed434917afbbc7f03f2edf86a19f72448e2e9d05917e73e502f6970'
    # signed_txn = w3.eth.account.signTransaction(tx, private_key=private_key)

    # print(signed_txn)


    #print(signed_txn.HexBytes)
    #w3.eth.sendRawTransaction(signed_txn.rawTransaction)