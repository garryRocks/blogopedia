import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { CartSlice } from "../redux/Slices/CartSlice";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, current) => acc + current.price, 0));
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p>Total Amount: ${totalAmount}</p>
              <button>Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Cart is Empty</p>
          <Link>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
