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
            <div className="mt-20 ml-24 px-14 py-6">
              <Outlet />
            </div>
          </div>
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
