export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  public setBalance = (valor: number): void => {
    this.balance += valor
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.balance += valor
      console.log(`Você depositou: ${valor}R$`)
    }
  }

  withdraw = (valor: number): void => {
    if(this.validateStatus()) {
      if(this.balance > valor) {
        this.balance -= valor
        console.log(`Você sacou: ${valor}R$`)
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
