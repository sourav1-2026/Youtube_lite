import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/ContextApi";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Header></Header>,
//     children: [{ index: true, element: <Feed></Feed> }],
//   },

//   {
//     path: "/searchResult/:searchQuery",
//     element: <SearchResult></SearchResult>,
//   },
//   {
//     path: "/video/:id",
//     element: (
//       <Header>
//         <VideoDetails />
//       </Header>
//     ),
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/video/:id",
        element: <VideoDetails />,
      },
      {
        path: "/searchResult/:searchQuery",
        element: <SearchResult></SearchResult>,
      },
    ],
  },
]);

function App() {
  return (
    <AppContext>
      <div className="flex flex-col h-full">
        <RouterProvider router={router} />
      </div>
    </AppContext>
  );
}

export default App;
