import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Guitarra from "./components/Guitarra";
import { db } from "./db/db";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(db);
  const [carrito, setCarrito] = useState([]);

  function addCarrito(item) {
    // verifica si el item ya está en el carrito
    const existeItem = carrito.findIndex(guitarra => guitarra.id === item.id);
    if (existeItem >= 0) {
      // si el item ya está en el carrito, aumenta la cantidad
      const updateCarrito = [...carrito];
      // aumenta la cantidad del item
      updateCarrito[existeItem].cantidad++;
      // actualiza el estado
      setCarrito(updateCarrito);
    } else {
      // si el item no está en el carrito, lo agrega
      item.cantidad = 1;
      setCarrito([...carrito, item]);
    }
  }

  return (
    <>
      <Header carrito={carrito} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitarra) => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra}
              setCarrito={setCarrito}
              addCarrito={addCarrito}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
