import Link from "next/link";

import { urlFor } from "../lib/client";

function MbtechBanner({ mbtechBanner }) {
  return (
    <div className="mbtech-banner-container">
      <div>
        <p className="beats-solo">{mbtechBanner.smallText}</p>
        <h3>{mbtechBanner.midText}</h3>
        <h1>{mbtechBanner.largeText1}</h1>
        <img
          src={urlFor(mbtechBanner.image)}
          alt="headset"
          className="mbtech-banner-image"
        />

        <div>
          <Link href={`/product/${mbtechBanner.product}`}>
            <button type="button">{mbtechBanner.buttonText}</button>
          </Link>

          <div className="desc">
            <h5>Descrição </h5>
            <p>{mbtechBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MbtechBanner;
