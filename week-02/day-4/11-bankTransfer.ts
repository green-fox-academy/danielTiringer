'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

let bankOperations = {
    getNameAndBalance (number) {
        for(let i = 0; i < accounts.length; i++){
            if(accounts[i].accountNumber == number){
            console.log(`'${accounts[i].clientName}', ${accounts[i].balance}`);
            }
        }
    },
    transferAmount (array, origin: number, target: number, amount: number) {
        let allAccounts: number [] = [];
        for(let j = 0; j < array.length; j++){
            allAccounts.push(array[j].accountNumber)
        };
        for(let i = 0; i < array.length; i++){
            if (allAccounts.indexOf(target) == -1 || allAccounts.indexOf(origin) == -1){
                console.log('404 - account not found');
                break;
            } else {
                if (array[i].accountNumber == origin){
                    array[i].balance = array[i].balance - amount;
                    return array[i].balance;
                }
                if(array[i].accountNumber == target){
                    array[i].balance = array[i].balance + amount;
                    return array[i].balance;
                };
            };
        };
    },
    readAccounts(array){
        for (let i = 0; i < array.length; i++){
            console.log(`clientName: '${accounts[i].clientName}', accountNumber: ${accounts[i].accountNumber}, balance: ${accounts[i].balance}`);
        }
        
    }
};

bankOperations.getNameAndBalance(11234543);
bankOperations.transferAmount(accounts, 43546731, 23453311, 500.0);
bankOperations.readAccounts(accounts);