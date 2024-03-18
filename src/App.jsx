import Header from "./components/Header";
import Footer from "./components/Footer";
import Guitarra from "./components/Guitarra";

function App() {
  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          <Guitarra />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
