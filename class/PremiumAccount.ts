import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {

    deposit = (value: number):void => {
        const acrescimo = 10;
        if(this.validateStatus()){
            if(value > 0){
                this.setBalance(this.getBalance() + (value + acrescimo));
                console.log(`Você depositou R$${value}. Saldo atual: R$${this.getBalance()}`);
            }
        }
    };
}