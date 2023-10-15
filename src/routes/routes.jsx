import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
