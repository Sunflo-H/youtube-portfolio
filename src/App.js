import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import { DarkModeProvider } from "./context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <Header />
          <div className="flex">
            <Nav />
            <Outlet />
          </div>
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
