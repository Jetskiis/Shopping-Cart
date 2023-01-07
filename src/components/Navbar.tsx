import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  quantity: number;
}

export const Navbar = (props: NavbarProps) => {
  const [numItems, setNumItems] = useState<number>(0);

  useEffect(() => {
    if (props.quantity != numItems) {
      setNumItems(props.quantity);
    }
  }, [props.quantity, numItems]);

  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-md p-4" id="navbar-banner">
      <div className="container-fluid d-flex flex-row justify-content-around text-white">

        <h2 className="brand ms-5">Electronics Store</h2>

        <div className="fs-5">

          <ul className="navbar-nav mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/store">
                Store
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/contact">
                Contact
              </Link>
            </li>


            <li className="nav-item ms-4">
              <Link className="nav-link text-white fw-bold" to="/checkout">
                Cart
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white">({numItems})</a>
            </li>

          </ul>

        </div>

      </div>
    </div>
  );
};

export default Navbar;
