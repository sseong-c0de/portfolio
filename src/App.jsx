import HeaderBar from "./pages/HeaderBar";
import "./App.css";
import "./Style/reset.css";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
// import Loading from "./pages/Loading";
// import { useEffect, useState } from "react";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   if (isLoading) {
  //     const timer = setTimeout(() => {
  //       setIsLoading(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, []);
  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <>
      <HeaderBar></HeaderBar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
