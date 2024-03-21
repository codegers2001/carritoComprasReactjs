import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Guitarra from "./components/Guitarra";
import { db } from "./db/db";

function App() {

  function inicializarCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      return JSON.parse(carritoGuardado);
    }
    return [];
  }

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(db);
  const [carrito, setCarrito] = useState(inicializarCarrito);

  const maxItems = 5;
  const minItems = 1;

  // obtener el carrito del localStorage
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  function addCarrito(item) {
    // verifica si el item ya está en el carrito
    const existeItem = carrito.findIndex((guitarra) => guitarra.id === item.id);
    if (existeItem >= 0) {
      if (carrito[existeItem].cantidad >= maxItems) return;
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

  // function eliminarGuitarra(id) {
  function eliminarGuitarra(id) {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((guitarra) => guitarra.id !== id)
    );
  }

  // function de incrementar cantidad
  function incrementarCantidad(id) {
    const nuevoCarrito = carrito.map((item) => {
      if (item.id === id && item.cantidad < maxItems) {
        return {
          ...item,
          cantidad: item.cantidad + 1,
        };
      }
      return item;
    });
    setCarrito(nuevoCarrito);
  }

  // function de decrementar cantidad
  function decrementarCantidad(id) {
    const nuevoCarrito = carrito.map((item) => {
      if (item.id === id && item.cantidad > minItems) {
        return {
          ...item,
          cantidad: item.cantidad - 1,
        };
      }
      return item;
    });
    setCarrito(nuevoCarrito);
  }

  // function de vaciar carrito
  function vaciarCarrito() {
    setCarrito([]);
  }

  return (
    <>
      <Header
        carrito={carrito}
        eliminarGuitarra={eliminarGuitarra}
        incrementarCantidad={incrementarCantidad}
        decrementarCantidad={decrementarCantidad}
        vaciarCarrito={vaciarCarrito}
      />

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
