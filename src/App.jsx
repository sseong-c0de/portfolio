import HeaderBar from "./pages/HeaderBar";
import "./App.css";
import "./Style/reset.css";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Loading from "./pages/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <HeaderBar></HeaderBar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
