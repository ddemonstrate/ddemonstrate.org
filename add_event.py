from web3 import Web3
import json

infura_url = "https://ropsten.infura.io/v3/eaf5e0b4a01042a48211762c8d4eec44"
web3 = Web3(Web3.HTTPProvider(infura_url))

print(web3.isConnected())
print(web3.eth.blockNumber)

address = "0x23da3e3Cd9400B624169b76A87325e4E4F7bC0E0"
balance = web3.eth.getBalance(address)

with open("demonstrate.abi.json", "r") as f:
    abi = json.load(f)
    print(abi)
    contract = web3.eth.contract(address=address, abi=abi)

    demonstration = contract.functions.demonstrations().call()
    print(demonstration)

