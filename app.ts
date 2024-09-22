import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PremiumAccount } from "./class/PremiumAccount";

const peopleAccount: PeopleAccount = new PeopleAccount('Marcos', 1, 123456789);
const companyAccount: CompanyAccount = new CompanyAccount('Boranoix', 2);
const premiumAccount: PremiumAccount = new PremiumAccount('Roger Almeida', 4);

// CompanyAccount
companyAccount.deposit(150);
companyAccount.withdraw(300);
companyAccount.getLoan(3000);
companyAccount.withdraw(300);
companyAccount.getLoan(8000);
// CompanyAccount Get
console.log("{")
console.log(`\tNome da companhia: ${companyAccount.getName()}`);
console.log(`\tAccountNumber: \t${companyAccount.getAccountNumber()}`);
console.log(`\tSaldo: ${companyAccount.getBalance()}`);
console.log(`\tStatus da conta: ${(companyAccount.getStatus()) ? "Ativo" : "Inativa"}`);
console.log("}")
// CompanyAccount Set
companyAccount.setBalance(1000);
companyAccount.setStatus(false);

console.log('\n\n');

// PeopleAccount
peopleAccount.deposit(150);
peopleAccount.withdraw(100);
peopleAccount.withdraw(150);
// PeopleAccount Get
console.log("{")
console.log(`\tNome da pessoa: ${peopleAccount.getName()}`);
console.log(`\tAccountNumber: \t${peopleAccount.getAccountNumber()}`);
console.log(`\tSaldo: ${peopleAccount.getBalance()}`);
console.log(`\tStatus da conta: ${(peopleAccount.getStatus()) ? "Ativo" : "Inativa"}`);
console.log(`\tDoc ID: ${peopleAccount.getDocId()}`);
console.log("}")
// PeopleAccount Set
peopleAccount.setBalance(1000);
peopleAccount.setStatus(false);
peopleAccount.setDocId(12345678933);

console.log('\n\n');

// PremiumAccount
premiumAccount.deposit(150);
premiumAccount.withdraw(100);
premiumAccount.withdraw(300);
// PremiumAccount Get
console.log("{")
console.log(`\tNome da pessoa: ${premiumAccount.getName()}`);
console.log(`\tAccountNumber: \t${premiumAccount.getAccountNumber()}`);
console.log(`\tSaldo: ${premiumAccount.getBalance()}`);
console.log(`\tStatus da conta: ${(premiumAccount.getStatus()) ? "Ativo" : "Inativa"}`);
console.log("}")
// PremiumAccount Set
premiumAccount.setBalance(1000);
premiumAccount.setStatus(false);

console.log('\n\n');
