import TransactionItem from "./TransactionItem"

export default function TransactionList({ TRANSACTIONS, deleteTransaction }) {

    return (TRANSACTIONS.length > 0) ? (
        <div>
            <h3>Přehled</h3>
            <ul className="list">
                {TRANSACTIONS.map((trans, index) => (
                    <TransactionItem onDelete={() => deleteTransaction(trans)} key={index} TRANSACTION={trans}/>
                ))}

            </ul>
        </div>
    ) : (
        <div>
            Bez transakcí
        </div>
    )

}
