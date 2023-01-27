import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Nav />
        <Outlet />
      </DarkModeProvider>
    </>
  );
}

export default App;
