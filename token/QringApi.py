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
from iconsdk.wallet.wallet import KeyWallet
from flask import Flask, request
from flask_restful import Resource, Api, reqparse

localnet = "http://127.0.0.1:9000/api/v3"
network_id = 3
contract_address = "cx29b3171be7a6828ed7c1331f3adda1240782fdf2"
keystore_path = "./bongki"
keystore_pw = "bongki@3"

wallet = KeyWallet.load(keystore_path, keystore_pw)
admin_addr = wallet.get_address()

icon_service = IconService(HTTPProvider(localnet))

app = Flask(__name__)
api = Api(app)

class Qring(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('address', type=str)
        args = parser.parse_args();

        call = CallBuilder().from_(admin_addr)\
                    .to(contract_address)\
                    .method("balanceOf")\
                    .params({"_to":args['address']})\
                    .build()
        return str(int(icon_service.call(call), 16)) + ' Q'

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('address', type=str)
        parser.add_argument('amount', type=int)
        args = parser.parse_args();

        transaction = CallTransactionBuilder()\
            .from_(admin_addr)\
            .to(contract_address)\
            .step_limit(100000000)\
            .nid(3)\
            .nonce(100)\
            .method("set")\
            .params({"_to":args['address'], "_amount":args['amount']})\
            .build()

        signed_transaction = SignedTransaction(transaction, wallet)
        tx_hash = icon_service.send_transaction(signed_transaction)

class Account(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=str)
        parser.add_argument('password', type=str)
        args = parser.parse_args();

        #DB check
        wallet = KeyWallet.create()
        wallet.store("./key/"+args['id'], args['password']);
        
        return "PublicKey : " + wallet.get_address() + ", PrivateKey : " + wallet.get_private_key()

        
api.add_resource(Qring, '/token')
api.add_resource(Account, '/account')

if __name__ == '__main__':
    app.run(debug=True)

