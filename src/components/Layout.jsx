import Head from "next/head";

import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
          <title>MBTech Store</title>
      </Head>
      <header>
        <Navbar />
      </header>

      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
