import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header></header>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
