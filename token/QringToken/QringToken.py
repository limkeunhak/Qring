from iconservice import *

TAG = 'token'

class token(IconScoreBase):

    _BALANCES = 'balances'
    def __init__(self, db: IconScoreDatabase) -> None:
        super().__init__(db)
        self._balances = DictDB(self._BALANCES, db, value_type=int)

    def on_install(self) -> None:
        super().on_install()

    def on_update(self) -> None:
        super().on_update()
    
    @external(readonly=True)
    def hello(self) -> str:
        Logger.debug(f'Hello, world!', TAG)
        return "Hello"
    @external
    def set(self, _to: Address, _amount: int) -> bool:
        self._balances[_to] = self._balances[_to] + _amount
        return True

    @external(readonly=True)
    def balanceOf(self, _to: Address) -> int:
        return self._balances[_to]
