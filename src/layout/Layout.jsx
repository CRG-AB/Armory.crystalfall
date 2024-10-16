import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { MobileHeader } from "./MobileHeader";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <main>
        <Outlet />
      </main>
      <hr />
      <Footer />
    </>
  );
};
