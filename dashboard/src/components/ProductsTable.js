function ProductsTable({ products }) {

    return (

        <div style={{ marginTop: "40px" }}>

            <h2>Listado de productos</h2>

            <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categoría</th>

                    </tr>

                </thead>

                <tbody>

                    {products.map(product => (

                        <tr key={product.id}>

                            <td>{product.id}</td>

                            <td>{product.name}</td>

                            <td>{product.category}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default ProductsTable;