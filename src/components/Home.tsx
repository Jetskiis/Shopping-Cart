import "../styles/Home.css";

export const Home = () => {
  return (
    <div className="d-flex flex-row text-white p-3 m-5">
      <img
        src="img/site_img/home_elec.png"
        className="img-fluid w-50"
        alt="Responsive image"
      />
      <div className="d-flex flex-column justify-content-center align-items-center bg-info p-5">
        <h1 className="text-center mb-2 text-primary">Welcome to the Electronics Store</h1>
        <p className="text-center m-5 fs-5">
          <h2>The best way to buy the products you love.</h2>
        </p>
        <button className="btn btn-primary fw-bold">
          <a className="nav-link text-white fw-bold p-2" href="/store">
            Shop Now 
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
