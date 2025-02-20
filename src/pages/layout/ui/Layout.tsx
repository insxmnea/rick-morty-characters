import { FC, PropsWithChildren } from "react";
import { Footer } from "src/widgets/footer";
import { Header } from "src/widgets/header";
import styles from "./Layout.module.scss";
import { ToastContainer } from "react-toastify";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className={styles.wrapper}>{children}</div>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
      />
      <Footer />
    </main>
  );
};
