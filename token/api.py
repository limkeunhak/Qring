from iconsdk.icon_service import IconService
from iconsdk.providers.http_provider import HTTPProvider
from iconsdk.wallet.wallet import KeyWallet
from iconsdk.builder.call_builder import CallBuilder
from iconsdk.builder.transaction_builder import (
    TransactionBuilder,
    DeployTransactionBuilder,
    CallTransactionBuilder,
    MessageTransactionBuilder
)
from iconsdk.signed_transaction import SignedTransaction

localnet = "http://127.0.0.1:9000/api/v3"
network_id = 3
contract_address = "cx29b3171be7a6828ed7c1331f3adda1240782fdf2"
keystore_path = "./bongki"
keystore_pw = "bongki@3"

wallet = KeyWallet.load(keystore_path, keystore_pw)
tester_addr = wallet.get_address()
#tester_addr = "hxe7af5fcfd8dfc67530a01a0e403882687528dfcc"

icon_service = IconService(HTTPProvider(localnet))

#call = CallBuilder().from_(tester_addr)\
#                    .to(contract_address)\
#                    .method("hello")\
#                    .build()
#                    
#result = icon_service.call(call)
#print(result)

call = CallBuilder().from_(tester_addr)\
                    .to(contract_address)\
                    .method("balanceOf")\
                    .params({"_to":tester_addr})\
                    .build()

result = icon_service.call(call)
print(result)

#transaction = CallTransactionBuilder()\
#    .from_(tester_addr)\
#    .to(contract_address)\
#    .step_limit(100000000)\
#    .nid(3)\
#    .nonce(100)\
#    .method("set")\
#    .params({"_to":tester_addr, "_amount":10})\
#    .build()
#
#signed_transaction = SignedTransaction(transaction, wallet)
#tx_hash = icon_service.send_transaction(signed_transaction)
#
#result = icon_service.call(call)
#print(result)
