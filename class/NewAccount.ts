import { DioAccount } from "./DioAccount";

class NewAccount extends DioAccount {
    
    deposito = (valor: number): void => {
        if(this.validateStatus()) {
            this.setBalance(valor + 10)
        }
      }
}