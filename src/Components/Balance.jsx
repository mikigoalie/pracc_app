import React from 'react'

export default function Balance({TRANSACTIONS}) {
    const payments = TRANSACTIONS.map(trans => trans.amount)
    const balance = payments.reduce((acc, curr) => (curr + acc), 0).toFixed(2);
    return (
        <div>
            <h4>Aktuální zůstatek</h4>
            <h1>{balance} CZK</h1>
        </div>
    )
}
