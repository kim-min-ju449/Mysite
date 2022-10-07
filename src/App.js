import './App.css';
import Main from "./page/main";
import Menu from "./page/menu";
import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
function App() {
  return (

    <div className="container">
      <Menu/>
      <Main/>
    </div>
  );
}

export default App;
