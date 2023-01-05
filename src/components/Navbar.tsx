export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-md p-4" id="navbar-banner">
      <div className="container-fluid d-flex flex-row justify-content-around text-white">

        <h2 className="brand ms-5">Electronics Store</h2>

        <div className="fs-5">

          <ul className="navbar-nav mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="/store">
                Store
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="/contact">
                Contact
              </a>
            </li>


            <li className="nav-item ms-4">
              <a className="nav-link text-white fw-bold" href="/checkout">
                Cart
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white">(0)</a>
            </li>
            
          </ul>

        </div>

      </div>
    </div>
  );
};

export default Navbar;
