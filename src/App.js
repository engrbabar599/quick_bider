import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/OnBoarding/Login';
import { SignUp } from "./pages/OnBoarding/SignUp";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Layout } from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Login />),
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
