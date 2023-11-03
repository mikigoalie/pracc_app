import React from 'react'

export default function IncomeExpenses({TRANSACTIONS}) {
    const payments = TRANSACTIONS.map(trans => trans.amount)
    const positive = payments.filter(payment => payment >= 0).reduce((acc, curr) => (curr + acc), 0).toFixed(2);
    const negative = payments.filter(payment => payment < 0).reduce((acc, curr) => (curr + acc), 0).toFixed(2);
    return (
        <div class="inc-exp-container">
            <div>
                <h4>Příjem</h4>
                <p className="money plus">{`+${positive} CZK`}</p>
            </div>
            <div>
                <h4>Výdaj</h4>
                <p className="money minus">{`${negative} CZK`}</p>
            </div>
        </div>
    )
}
