import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./error/ErrorPage";
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ComposeEmail from "./components/ComposeEmail";
import Profile from "./pages/Profile";
import InboxDetails from "./components/InboxDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Root />,
    children: [
      {
        path: "/home/inbox",
        element: <Inbox />,
      },
      {
        path: "/home/inbox/:id",
        element: <InboxDetails />,
      },

      {
        path: "/home/sent",
        element: <Sent />,
      },
      {
        path: "/home/compose",
        element: <ComposeEmail />,
      },

      {
        path: "/home/profile",
        element: <Profile />,
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
