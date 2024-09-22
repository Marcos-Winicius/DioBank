import { DioAccount } from "./DioAccount";
export class CompanyAccount extends DioAccount{
    // Limit funciona como o crédito do cartão
    private limit:number = 5000

    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    // Empréstimo
    getLoan = (value:number):void => {
        if(this.validateStatus()){
            if(value > 0 && value <= this.limit){
                this.setBalance(this.getBalance() + value)
                this.limit -= value;
                console.log(`Você pegou um empréstimo de R$${value}. Seu saldo agora é R$${this.getBalance()}` )
            }else{
                console.log(`Empréstimo negado!! \nO valor R$${value} passa do seu limite que é de R$${this.limit}.` )
            }
        }
    }
}