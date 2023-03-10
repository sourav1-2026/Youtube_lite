import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/ContextApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed></Feed>,
  },
]);

function App() {
  return (
    <AppContext>
      <Header />
      <RouterProvider router={router} />
    </AppContext>
  );
}

export default App;
