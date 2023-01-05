import "../styles/Checkout.css";

export const Checkout = () => {
  return (
    <div className="d-flex flex-row justify-content-center min-vh-100" id="shopping-cart">

      <div className='d-flex flex-column bg-light p-3 m-5 w-25'>
        <div className="align-self-center bg-dark text-white fw-bold fs-2 w-50 text-center mt-2 mb-4 p-2">Shopping Cart</div>

        {/* <div className="card border border-dark mx-2 my-3 p-2 d-flex flex-row justify-content-center align-items-center bg-light checkout-card">
          <img src="img/product_img/airpods.png" className="mx-auto" alt="airpods" />
          <div className="d-flex flex-column card-body ms-2 item-container">
            <p className="fs-4">Airpods</p>
            <p className="fs-4">$200</p>
          </div>
          <div className="d-flex flex-row justify-content-evenly  align-items-center border border-dark me-2 card-menu">
            <button>-</button>
            <p className="align-self-end fs-3">1</p>
            <button>+</button>
          </div>
        </div> */}

        <button className="bg-dark text-white fs-3 w-75 m-2 p-2 align-self-center">Proceed to Checkout</button>

      </div>
    </div >
  )
}



export default Checkout;
