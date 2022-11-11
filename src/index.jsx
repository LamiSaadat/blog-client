import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import HomePage from "./pages/HomePage";
// import BlogPostPage from "./pages/BlogPostPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "feed",
//         element: <HomePage />,
//       },
//       {
//         path: "login",
//         element: <BlogPostPage />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
