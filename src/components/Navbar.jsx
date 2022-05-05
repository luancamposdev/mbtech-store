import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useStateContext } from "../context/StateContext";
import { Cart } from "./";

function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">MBTech Store</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
}

export default Navbar;
