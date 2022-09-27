import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
