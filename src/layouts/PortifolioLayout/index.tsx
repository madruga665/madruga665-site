"use client";
import { ToastContainer } from "react-toastify";
import { PropsWithChildren } from "react";
import Header from "@/components/Header";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.scss";
import EnumHelper from "@/helpers/enumHelper";

function PortifolioLayout({ children }: PropsWithChildren) {
  const enumHerper = new EnumHelper();

  return (
    <div className={styles.Container}>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <Header paths={enumHerper.paths} />
      <section className={styles.ContentContainer}>{children}</section>
    </div>
  );
}

export default PortifolioLayout;
