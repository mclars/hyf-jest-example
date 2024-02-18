import eurosFormatter from './euroFormatter.js';


/**
TODO:
- Maximum Daily Withdrawl Feature
  - default value 40
  - daily total withdrawn, starts at 0

- reset daily allowance
- set new daily allowance  



 */

const INITIAL_DAILY_WITHDRAWN = 0;
const DEFAULT_MAX_DAILY = 40;


function Wallet(name, cash) { 
  this._name = name;
  this._cash = cash;
  this._dailyAllowance = DEFAULT_MAX_DAILY;
  this._dayTotalWithdrawals = INITIAL_DAILY_WITHDRAWN;
}

Wallet.prototype.deposit = function (amount) {
  this._cash += amount;
};

Wallet.prototype.withdraw = function (amount) {
  if (this._dayTotalWithdrawals >= this._dailyAllowance) throw new Error('Exceed dailyAllowance')
  const newDailyTotalWithdrawn = this._dayTotalWithdrawals + amount;
  if (newDailyTotalWithdrawn > this._dailyAllowance) throw new Error('New amount would exceed dailyAllowance')
  if (this._cash - amount < 0) {
    console.log(`Insufficient funds!`);
    return 0;
  }
  this._cash -= amount;
  this._dayTotalWithdrawals += amount;
  return amount;
};

Wallet.prototype.resetDailyAllowance = function () {
  this._dayTotalWithdrawals = INITIAL_DAILY_WITHDRAWN
}

Wallet.prototype.setDailyAllowance = function (newAllowance) {
  if (newAllowance !== 0 && !newAllowance) throw new Error('Attempted to set daily allowance without value')
  if (newAllowance < 0) throw new Error('allowance must be 0 or greater')
  if (typeof newAllowance !== 'number') throw new Error('newAllowance should be a number')
  this._dailyAllowance = newAllowance;
}

Wallet.prototype.transferInto = function (wallet, amount) {
  console.log(
    `Transferring ${eurosFormatter.format(amount)} from ${
      this._name
    } to ${wallet.getName()}`
  );
  const withdrawnAmount = this.withdraw(amount);
  wallet.deposit(withdrawnAmount);
};

Wallet.prototype.reportBalance = function () {
  const report = `Name: ${this._name}, balance: ${eurosFormatter.format(this._cash)}`
  console.log(report);
  return report;
};

Wallet.prototype.getName = function () {
  return this._name;
};

function main() {
  const walletJack = new Wallet('Jack', 100);
  const walletJoe = new Wallet('Joe', 10);
  const walletJane = new Wallet('Jane', 20);

  walletJack.setDailyAllowance(50)
  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  const resultJack = walletJack.reportBalance();
  const resultJoe = walletJoe.reportBalance();
  const resultJane = walletJane.reportBalance();
  if (resultJack !== "Name: Jack, balance: € 50,00") throw new Error('Incorrect balance for Jack')
  if (resultJoe !== "Name: Joe, balance: € 85,00") throw new Error('Incorrect balance for Jack')
  if (resultJane !== "Name: Jane, balance: € 15,00") throw new Error('Incorrect balance for Jack')

  try {
    walletJack.withdraw(1)
    console.error('Could withdraw above limit')
  } catch (error) {
    console.log('Could not exceed daily allowance :)')
  }

  try {
    walletJack.setDailyAllowance('')
    console.error('Could set string as allowance')
  } catch {
    console.log('could not use string as daily allowance :)')
  }



}

main();
