import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Breno', 10)
peopleAccount.setBalance(500)
peopleAccount.getName()
peopleAccount.deposit(200)
peopleAccount.withdraw(200)
peopleAccount.getBalance()
peopleAccount.validateStatus()
console.log(peopleAccount)


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.setBalance(500)
companyAccount.getName()
companyAccount.deposit(200)
companyAccount.withdraw(200)
companyAccount.getBalance()
companyAccount.validateStatus()
companyAccount.getLoan(1000)
console.log(companyAccount)