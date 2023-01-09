import { useEffect, useState } from "react";
import "../styles/Checkout.css";

interface CheckoutProps {
  cart: productInfo[],
  itemCount: number,
  modifyCart: (cart: {}) => void
  changeItems: (numItems: number) => void
}

type productInfo = {
  id: number,
  name: string,
  price: number
  quantity: number
  url: string
}

const Checkout = (props: CheckoutProps) => {
  const { cart, itemCount, modifyCart, changeItems } = props;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    for (const product of cart) {
      total += product.price * product.quantity;
    }
    setTotal(total);
  }, [total, cart]);

  const removeItem = (e: React.MouseEvent) => {
    const id: any = (e.target as HTMLFormElement).parentElement?.parentElement?.dataset.pid;
    let quantity = 0;
    const newCart = cart.filter((product) => {
      if (product.id == parseInt(id)) {
        quantity = product.quantity;
      }
      return product.id != parseInt(id);
    });
    modifyCart(newCart);
    changeItems(itemCount - quantity);
  };

  const decreaseQuantity = (e: React.MouseEvent) => {
    const id: any = (e.target as HTMLFormElement).parentElement?.parentElement?.parentElement?.dataset.pid;
    for (const product of cart) {
      if (product.id == parseInt(id)) {
        if (product.quantity == 1)
          return;
      }
    }
    const newCart = cart.map((product) => {
      if (product.id == parseInt(id)) {
        product.quantity -= 1;
      }
      return product;
    });
    modifyCart(newCart);
    changeItems(itemCount - 1);
  };

  const increaseQuantity = (e: React.MouseEvent) => {
    const id: any = (e.target as HTMLFormElement).parentElement?.parentElement?.parentElement?.dataset.pid;
    const newCart = cart.map((product) => {
      if (product.id == parseInt(id)) {
        product.quantity += 1;
      }
      return product;
    });
    modifyCart(newCart);
    changeItems(itemCount + 1);
  };

  const cartItems = () => {
    return cart.map((product) => {
      return (
        <div className="card border border-dark mx-2 my-3 p-2 d-flex flex-row justify-content-center align-items-center bg-light checkout-card" data-pid={product.id} key={product.id}>
          <img src={product.url} className="mx-auto" alt={product.name} />
          <div className="d-flex flex-column card-body ms-2 item-container">
            <p className="fs-4">{product.name}</p>
            <p className="fs-4">${product.price}</p>
          </div>
          <div className="d-flex flex-column justify-content-center-align-items-center">
            <div className="d-flex flex-row justify-content-evenly  align-items-center border border-dark me-2 card-menu">
              <button onClick={decreaseQuantity}>-</button>
              <p className="align-self-end fs-3">{product.quantity}</p>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <button onClick={removeItem} className="align-self-start remove-item">Remove Item</button>
          </div>
        </div>
      )
    })
  };

  return (
    <div className="d-flex flex-row justify-content-center min-vh-100" id="shopping-cart">

      <div className='d-flex flex-column bg-light p-3 m-5 w-25'>
        <div className="align-self-center bg-dark text-white fw-bold fs-2 w-50 text-center mt-2 mb-4 p-2">Shopping Cart</div>

        {cartItems()}

        <div className="d-flex border border-secondary flex-column justify-content-center align-items-center px-1 py-3 m-3">
          <p className="fs-3 fw-bold total-cost">Total: ${total}</p>
          <button onClick={() => alert("Thanks for coming by!")} className="bg-dark text-white fs-3 w-75 m-2 p-2 align-self-center">Proceed to Checkout</button>
        </div>

      </div>
    </div >
  )
}



export default Checkout;
