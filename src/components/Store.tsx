import React from "react";
import "../styles/Store.css";

interface StoreProps {
  cart: productInfo[]
  modifyCart: (cart: {}) => void
  itemCount: number;
  changeItems: (numItems: number) => void;
}

type productInfo = {
  name: string,
  price: number
  quantity: number
}

export const Store = (props: StoreProps) => {
  function addToCart(e: React.MouseEvent) {

    props.changeItems(props.itemCount + 1);
  }

  const products = {
    airpods: {
      id: 0,
      name: "Airpods",
      price: 200,
      url: "img/product_img/airpods.png"
    },
    drone: {
      id: 1,
      name: "Drone",
      price: 699,
      url: "img/product_img/drone.png"
    },
    gopro: {
      id: 2,
      name: "GoPro",
      price: 450,
      url: "img/product_img/gopro.png"
    },
    headphones: {
      id: 3,
      name: "Headphones",
      price: 250,
      url: "img/product_img/headphones.png"
    },
    ipad: {
      id: 4,
      name: "iPad",
      price: 599,
      url: "img/product_img/ipad.png"
    },
    iphone: {
      id: 5,
      name: "iPhone",
      price: 799,
      url: "img/product_img/iphone.png"
    },
    macbook: {
      id: 6,
      name: "Macbook",
      price: 1299,
      url: "img/product_img/macbook.png"
    },
    monitor: {
      id: 7,
      name: "Monitor",
      price: 200,
      url: "img/product_img/monitor.png"
    },
    ring: {
      id: 8,
      name: "Ring",
      price: 99,
      url: "img/product_img/ring.png"
    },
    tv: {
      id: 9,
      name: "TV",
      price: 999,
      url: "img/product_img/tv.png"
    },
    wacom: {
      id: 10,
      name: "Wacom",
      price: 180,
      url: "img/product_img/wacom.png"
    },
    watch: {
      id: 11,
      name: "Watch",
      price: 429,
      url: "img/product_img/watch.png"
    }
  }



  return (
    <div className="container-fluid w-75 mt-1 p-5" id="store-page">
      <div className="row">
        <div className="card m-4 ms-5 col">
          <img src="img/product_img/airpods.png" className="mx-auto" alt="airpods" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Airpods</h5>
            <p className="card-text ms-1 fs-4">$200</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}> Add to Cart</button>
          </div>
        </div>
      </div>

        {/* <div className="card m-4 ms-5 col">
          <img src="img/product_img/drone.png" className="mx-auto" alt="drone" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Drone</h5>
            <p className="card-text ms-1 fs-4">$699</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/gopro.png" className="mx-auto" alt="gopro" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">GoPro</h5>
            <p className="card-text ms-1 fs-4">$450</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/headphone.png" className="mx-auto" alt="headphone" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Headphones</h5>
            <p className="card-text ms-1 fs-4">$250</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

      </div>

      <div className="row">

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/ipad.png" className="mx-auto" alt="ipad" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">iPad</h5>
            <p className="card-text ms-1 fs-4">$599</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/iphone.png" className="mx-auto" alt="iphone" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">iPhone</h5>
            <p className="card-text ms-1 fs-4">$799</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/macbook.png" className="mx-auto" alt="macbook" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Macbook</h5>
            <p className="card-text ms-1 fs-4">$1299</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/monitor.png" className="mx-auto" alt="monitor" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Monitor</h5>
            <p className="card-text ms-1 fs-4">$200</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

      </div>


      <div className="row">

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/ring.png" className="mx-auto" alt="ring" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Ring</h5>
            <p className="card-text ms-1 fs-4">$89</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/TV.png" className="mx-auto" alt="TV" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">TV</h5>
            <p className="card-text ms-1 fs-4">$599</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/wacom.png" className="mx-auto" alt="wacom" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Wacom</h5>
            <p className="card-text ms-1 fs-4">$180</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

        <div className="card m-4 ms-5 col">
          <img src="img/product_img/watch.png" className="mx-auto" alt="watch" />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">Watch</h5>
            <p className="card-text ms-1 fs-4">$429</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

      </div> */}

    </div>

  )
}

export default Store;