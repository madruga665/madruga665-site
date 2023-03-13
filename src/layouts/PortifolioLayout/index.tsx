"use client";
import { ToastContainer } from "react-toastify";

import Header from "@/components/Header";

import styles from "./styles.module.scss";
import "react-toastify/dist/ReactToastify.css";

interface IPageTemplateProps {
  children: React.ReactNode;
}

function PortifolioLayout({ children }: IPageTemplateProps) {
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
      <Header />
      <section className={styles.ContentContainer}>{children}</section>
    </div>
  );
}

export default PortifolioLayout;
