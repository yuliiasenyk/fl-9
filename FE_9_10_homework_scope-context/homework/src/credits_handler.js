function userCard(cardIndex) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        key = cardIndex,
        errorMoney = 'No, that is too much for you now! Chech your balance and transaction limit.',
        taxRate = 0.005,
        operationTime = new Date().toLocaleString('en-GB');

    function addToHistoryLogs(OPERATION_TYPE, moneyAmount, operationTime) {
        historyLogs.push({
            credits: moneyAmount,
            operationType: OPERATION_TYPE,
            operationTime: operationTime
        });
    }

    return {
        getCardOptions() {
            
            return {
                key,
                balance,
                transactionLimit,
                historyLogs
            }
        },
        putCredits(moneyAmount) {
            let OPERATION_TYPE = 'Recived credits';
            balance += moneyAmount;
            addToHistoryLogs(moneyAmount, OPERATION_TYPE, operationTime);
        },
        takeCredits(moneyAmount) {
            let OPERATION_TYPE = 'Withdrowal of credits';
            if (moneyAmount <= balance && moneyAmount <= transactionLimit) {
                balance -= moneyAmount;
                addToHistoryLogs(moneyAmount, OPERATION_TYPE, operationTime);
            } else {
                console.log(errorMoney);
            }
        },
        setTransactionLimit(moneyAmount) {
            let OPERATION_TYPE = 'Transaction limit change';
            transactionLimit = moneyAmount;
            addToHistoryLogs(moneyAmount, OPERATION_TYPE, operationTime);
        },
        transferCredits(moneyAmount, recipientCard) {
            let taxedAmount = moneyAmount * taxRate + moneyAmount;
            if (taxedAmount >= balance || taxedAmount >= transactionLimit) {
                console.log(errorMoney);
            } else {
                this.takeCredits(taxedAmount);
                recipientCard.putCredits(moneyAmount);
            }
        }
    }
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.cardsMAX = 3;
    }

    addCard() {
        if (this.cards.length >= this.cardsMAX) {
            console.log(`You can not have that many cards!`)
        } else {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }

    getCardByKey(key) {
        
        return this.cards[key - 1];
    }
}
