import "../styles/Store.css";

export const Store = () => {
  return (
    <div className="container-fluid w-75 mt-1 p-5" id="store-page">
      <div className="row">

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/airpods.png" className="mx-auto" alt="airpods" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Airpods</h5>
            <p className="card-text ms-1 fs-4">$200</p>
            <a href="#" className="btn btn-dark fs-4 fw-bold w-100">Add to Cart</a>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/drone.png" className="mx-auto" alt="drone" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Drone</h5>
            <p className="card-text ms-1 fs-4">$699</p>
            <a href="#" className="btn btn-dark fs-4 fw-bold w-100">Add to Cart</a>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/gopro.png" className="mx-auto" alt="gopro" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">GoPro</h5>
            <p className="card-text ms-1 fs-4">$450</p>
            <a href="#" className="btn btn-dark fs-4 fw-bold w-100">Add to Cart</a>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/headphone.png" className="mx-auto" alt="headphone" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Headphones</h5>
            <p className="card-text ms-1 fs-4">$250</p>
            <a href="#" className="btn btn-dark fs-4 fw-bold w-100">Add to Cart</a>
          </div>
        </div>

      </div>

      <div className="row">

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/ipad.png" className="mx-auto" alt="ipad" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">iPad</h5>
            <p className="card-text ms-1 fs-4">$599</p>
            <a href="#" className="btn btn-dark fs-4 fw-bold w-100">Add to Cart</a>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/iphone.png" className="mx-auto" alt="iphone" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">iPhone</h5>
            <p className="card-text ms-1 fs-4">$799</p>
            <a href="#" className="btn btn-dark fs-4 fw-bold w-100">Add to Cart</a>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/macbook.png" className="mx-auto" alt="macbook" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Macbook</h5>
            <p className="card-text ms-1 fs-4">$1299</p>
            <a href="#" className="btn btn-dark fs-4 fw-bold w-100">Add to Cart</a>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/monitor.png" className="mx-auto" alt="monitor" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Monitor</h5>
            <p className="card-text ms-1 fs-4">$200</p>
            <a href="#" className="btn btn-dark fs-4 fw-bold w-100">Add to Cart</a>
          </div>
        </div>

      </div>


      <div className="row">

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/ring.png" className="mx-auto" alt="ring" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Ring</h5>
            <p className="card-text ms-1 fs-4">$89</p>
            <a href="#" className="btn btn-dark fs-4 fw-bold w-100">Add to Cart</a>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/TV.png" className="mx-auto" alt="TV" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">TV</h5>
            <p className="card-text ms-1 fs-4">$599</p>
            <a href="#" className="btn btn-dark fs-4 fw-bold w-100">Add to Cart</a>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/wacom.png" className="mx-auto" alt="wacom" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Wacom</h5>
            <p className="card-text ms-1 fs-4">$180</p>
            <a href="#" className="btn btn-dark fs-4 fw-bold w-100">Add to Cart</a>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/watch.png" className="mx-auto" alt="watch" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Watch</h5>
            <p className="card-text ms-1 fs-4">$429</p>
            <a href="#" className="btn btn-dark fs-4 fw-bold w-100">Add to Cart</a>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Store;