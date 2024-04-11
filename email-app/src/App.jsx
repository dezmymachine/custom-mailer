import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./error/ErrorPage";
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home/inbox",
        element: <Inbox />,
      },
      {
        path: "/home/sent",
        element: <Sent />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
