import Link from "next/link";
import React, { useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>obrigado pelo seu pedido!</h2>
        <p className="email-msg">
          Verifique sua caixa de entrada de e-mail para o recibo.
        </p>
        <p className="description">
          se você tiver alguma dúvida, envie um e-mail
          <a href="mailto:luancamposproducoes@gmail.com" className="email">
            luancamposproducoes@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
