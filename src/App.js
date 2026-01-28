import { Fragment } from "react/jsx-runtime";
import Header from "./app/components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./app/components/footer/Footer";
import styles from "./App.module.css"

function App() {
  return (
    <Fragment>
      <Header />
      {/* <div className={styles["test"]}> */}
      <Outlet></Outlet>
      {/* </div> */}
      <Footer />
    </Fragment>
  );
}

export default App;
