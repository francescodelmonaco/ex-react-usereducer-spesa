import { useState } from "react";

export default function ProductsList() {
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    const [addedProducts, setAddedProducts] = useState([]);
    console.log(addedProducts);

    const updateProductQuantity = (name, quantity) => {
        setAddedProducts(curr => curr.map(p => {
            if (p.name === name) {
                return {
                    ...p,
                    quantity
                }
            }
            return p;
        }))
    };

    const addToCart = product => {
        const pIsAdded = addedProducts.find(p => p.name === product.name);

        if (pIsAdded) {
            updateProductQuantity(pIsAdded.name, pIsAdded.quantity + 1);
            return;
        };

        setAddedProducts(curr => [...curr, { ...product, quantity: 1 }]);
    };

    const removeFromCart = product => {
        setAddedProducts(curr => curr.filter(p => p.name !== product.name))
    };

    const total = addedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0);

    return (
        <div>
            <h1>Lista prodotti</h1>

            <ul>
                {
                    products.map((p, i) => {
                        return (
                            <li key={i}>
                                <p>{p.name} / {p.price.toFixed(2)} €</p>
                                <button onClick={() => addToCart(p)}>Aggiungi al carrello</button>
                            </li>
                        )
                    })
                }
            </ul>

            {
                addedProducts.length > 0 && (
                    <div>
                        <h2>Carrello prodotti</h2>

                        <ul>
                            {
                                addedProducts.map((a, i) => {
                                    return (
                                        <li key={i}>
                                            <p>{a.name} / {a.price.toFixed(2)} € / Quantity: {a.quantity}</p>
                                            <button onClick={() => removeFromCart(a)}>Rimuovi dal carrello</button>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <h3>Totale da pagare: {total.toFixed(2)} €</h3>
                    </div>
                )
            }
        </div>
    );
}