import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/OnBoarding/Login';
import Setting from "./pages/Account Settings/Setting";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "setting",
    element: <Setting/>
  }
  
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
