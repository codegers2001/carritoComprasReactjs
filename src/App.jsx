import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Guitarra from "./components/Guitarra";
import { db } from "./db/db";

function App() {
  const [data, setData] = useState(db);
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra} setCarrito={setCarrito} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
