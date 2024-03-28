import Header from "./components/Header";
import Footer from "./components/Footer";
import Guitarra from "./components/Guitarra";
import useCart from "./hooks/useCart";

function App() {
  const {
    data,
    carrito,
    addCarrito,
    setCarrito,
    eliminarGuitarra,
    incrementarCantidad,
    decrementarCantidad,
    vaciarCarrito,
  } = useCart();

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
