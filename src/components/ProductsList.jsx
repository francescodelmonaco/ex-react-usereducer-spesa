export default function ProductsList() {
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    return (
        <div>
            <h1>Lista prodotti</h1>

            <ul>
                {
                    products.map((p, i) => {
                        return (
                            <li key={i}>{p.name} / {p.price} €</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}