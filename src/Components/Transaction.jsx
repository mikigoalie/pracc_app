import { useState } from 'react';

export default function Transaction({ addNewTransaction }) {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState(0);

    return (
        <div>
            <h3>Přidat novou transakci</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Položka</label>
                    <input
                        type="text"
                        value={itemName}
                        // @ts-ignore 
                        onChange={(e) => setItemName(e.target.value)}
                        placeholder="Napište text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Částka
                    </label>
                    <input
                        type="number"
                        value={price}
                        // @ts-ignore 
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        placeholder="Enter amount..."
                    />
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        if (!itemName) return;
                        addNewTransaction({ item: itemName, price: price });
                        setItemName('');
                        setPrice(0);
                    }}
                    className="btn"
                >
                    Přidat
                </button>
            </form>
        </div>
    );
}
