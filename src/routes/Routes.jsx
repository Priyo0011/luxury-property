import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../components/PrivateRoute";
import UpProfile from "../components/UpProfile";
import Contact from "../components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../luxury.json')
      },
      {
        path:'/detail/:id',
        element:<PrivateRoute>
          <Detail></Detail>
        </PrivateRoute>,
        loader: () => fetch('../luxury.json')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update-profile",
        element: <UpProfile></UpProfile>,
      },
      {
        path: "contact-us",
        element: <PrivateRoute>
          <Contact></Contact>
        </PrivateRoute>,
      },
      
      
    ],
  },
]);

export default router;
