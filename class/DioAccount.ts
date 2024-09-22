export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber:number){
        this.name = name
        this.accountNumber = accountNumber
    }

    // Getters e Setters
    getName = ():string => this.name

    getAccountNumber = ():number => this.accountNumber

    getBalance = ():number => this.balance
    setBalance = (balance:number):void => {this.balance = balance}
    
    getStatus = ():boolean => this.status
    setStatus = (status:boolean):void => {this.status = status}

    // Depósito
    deposit = (value: number):void=>{
        if(this.validateStatus()){
            if(value > 0){
                this.balance += value;
                console.log(`Você depositou R$${value}. Saldo atual: R$${this.getBalance()}`)
            }else{
                throw new Error('Valor inválido');
            }
        }
    }
    // Saque
    withdraw = (value:number):void => {
        if(this.validateStatus()){
            if(value <= this.balance){
                this.balance -= value;
                console.log(`Saque de R$${value} feito com sucesso!! \nSaldo Atual: R$${this.getBalance()}.`)    
            }else{
                console.log("Saldo insuficiente!! Por favor, selecione uma quantia válida.")
            }
        }
    }


    protected validateStatus = ():boolean=>{
        if(this.status){
            return this.status
        }else{
            throw new Error('Conta inválida');
        }
    }
}