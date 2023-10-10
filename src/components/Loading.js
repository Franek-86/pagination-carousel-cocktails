import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Loading = () => {
  const styles = {
    spinningPage: {
      position: "fixed",
      left: "0",
      top: "0",
      zIndex: "9",
      width: "100%",
      height: "100%",
      opacity: "0.5",
    },
    spinnerCenter: {
      width: "4rem !important",
      height: "4rem !important",
      position: "fixed",
      top: "50%",
      left: "50%",
    },
    Loading: {
      fontFamily: "sans-serif",
      textAlign: "center",
    },
  };
  return (
    <div style={styles.spinningPage} className='bg-dark'>
      <div
        style={styles.spinnerCenter}
        className='spinner-border text-primary'
        role='status'
      />
    </div>
  );
};

export default Loading;
