import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trending from "./pages/Trending";
import Subscriptions from "./pages/Subscriptions";
import WatchLater from "./pages/WatchLater";
import LikedVideos from "./pages/LikedVideos";
import History from "./pages/History";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/feed/Trending",
        element: <Trending />,
      },
      {
        path: "/feed/Subscriptions",
        element: <Subscriptions />,
      },
      {
        path: "/feed/History",
        element: <History />,
      },
      {
        path: "/playlist/WatchLater",
        element: <WatchLater />,
      },
      {
        path: "/playlist/LikedVideos",
        element: <LikedVideos />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
