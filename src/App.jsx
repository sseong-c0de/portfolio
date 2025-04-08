import HeaderBar from "./pages/HeaderBar";
import Intro from "./pages/Intro";
import Profile from "./pages/ProFile";
import Project from "./pages/Project";
import "./App.css";
import "./Style/reset.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <HeaderBar></HeaderBar>
      <Intro></Intro>
      <Profile></Profile>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default App;
