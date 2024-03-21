/* eslint-disable react/prop-types */
export default function Guitarra({ guitarra, addCarrito }) {
  // eslint-disable-next-line no-unused-vars
  const { id, name, description, price, image } = guitarra;

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt={`imagen de guitarra ${name}`}
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => addCarrito(guitarra)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
