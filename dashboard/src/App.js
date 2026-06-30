import ProductsTable from "./components/ProductsTable";
import { useEffect, useState } from "react";
import SmallCard from "./components/SmallCard";

function App() {

  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);
  const [categories, setCategories] = useState(0);
  const [lastProduct, setLastProduct] = useState(null);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {

    fetch("http://localhost:3000/api/products")

      .then(response => response.json())

      .then(data => {

        setProducts(data.count);

        setCategories(
          Object.keys(data.countByCategory).length
        );

        setLastProduct(
          data.products[data.products.length - 1]
        );

        setProductsList(data.products);

      })

      .catch(error => console.log(error));

  }, []);

  useEffect(() => {

    fetch("http://localhost:3000/api/users")

      .then(response => response.json())

      .then(data => {

        setUsers(data.count);

      })

      .catch(error => console.log(error));

  }, []);

 return (

  <div style={{ padding: "30px" }}>

    <h1>Dashboard ARYA</h1>

    <SmallCard
      title="Total Productos"
      value={products}
    />

    <SmallCard
      title="Total Usuarios"
      value={users}
    />

    <SmallCard
      title="Total Categorías"
      value={categories}
    />

    {lastProduct && (

      <div style={{
        marginTop: "30px",
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px"
      }}>

        <h2>Último producto</h2>

        <p><strong>Nombre:</strong> {lastProduct.name}</p>

        <p><strong>Categoría:</strong> {lastProduct.category}</p>

        <p>{lastProduct.description}</p>

      </div>

    )}

    <ProductsTable products={productsList} />

  </div>

);

}

export default App;