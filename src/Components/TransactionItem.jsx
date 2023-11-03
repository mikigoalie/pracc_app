import React from 'react'

export default function TransactionItem({ TRANSACTION, onDelete }) {
    const positive = TRANSACTION.amount >= 0
    const prefix = positive ? '+' : '-';
    return (
        <li className={positive ? 'plus' : 'minus'}>
            {TRANSACTION.text} <span>{`${prefix} ${Math.abs(TRANSACTION.amount)} CZK`}</span><button onClick={onDelete} className="delete-btn">x</button>
        </li>
    )
}
