import React from "react";
import "../styles/Store.css";

interface StoreProps {
  cart: productInfo[]
  modifyCart: (cart: {}) => void
  itemCount: number;
  changeItems: (numItems: number) => void;
}

type productInfo = {
  id: number,
  name: string,
  price: number
  quantity: number
  url: string
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
    url: "img/product_img/headphone.png"
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
    url: "img/product_img/TV.png"
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

export const Store = (props: StoreProps) => {
  function addToCart(e: React.MouseEvent) {
    const productID = (e.target as HTMLFormElement).parentElement?.parentElement?.getAttribute("id");
    const productName = (e.target as HTMLFormElement).parentElement?.parentElement?.dataset.name;
    const productPrice = products[productName?.toLowerCase() as keyof typeof products].price;
    const productURL = products[productName?.toLowerCase() as keyof typeof products].url;

    if (checkInCart(productName as string)) {
      const newCart = props.cart.map((product) => {
        if (product.name === productName) {
          product.quantity += 1;
        }
        return product;
      });
      props.modifyCart(newCart);
    }
    else {
      const newProduct = {
        id: productID,
        name: productName as string,
        price: productPrice,
        quantity: 1,
        url: productURL
      };
      props.modifyCart([...props.cart, newProduct]);
    }
    props.changeItems(props.itemCount + 1);
  }

  const checkInCart = (name: string) => {
    for (const product of props.cart) {
      if (product.name === name) {
        return true;
      }
    }
    return false;
  };


  const firstRow = [products.airpods, products.drone, products.gopro, products.headphones];
  const secondRow = [products.ipad, products.iphone, products.macbook, products.monitor];
  const thirdRow = [products.ring, products.tv, products.wacom, products.watch];

  const mapRows = (row: any) => {
    return row.map((product: any) => {
      // console.log(product.name);
      return (
        <div className="card m-4 ms-5 col" id={product.id} data-name={product.name} key={product.id}>
          <img src={product.url} className="mx-auto" alt={product.name} />
          <div className="card-body border-top border-2 border-dark ms-2">
            <h5 className="card-title ms-1 fs-3 fw-bold mt-3">{product.name}</h5>
            <p className="card-text ms-1 fs-4">${product.price}</p>
            <button className="btn btn-dark fs-4 fw-bold w-100" onClick={addToCart}> Add to Cart</button>
          </div>
        </div>)
    })
  }

  return (
    <div className="container-fluid w-75 mt-1 p-5" id="store-page">
      <div className="row">
        {mapRows(firstRow)}
      </div>

      <div className="row">
        {mapRows(secondRow)}
      </div>

      <div className="row">
        {mapRows(thirdRow)}
      </div>

    </div>

  )
}

export default Store;