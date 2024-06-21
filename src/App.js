import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/OnBoarding/Login';
import Setting from "./pages/Account Settings/Setting";
import HelpAndSupport from "./pages/Help and Support/HelpAndSupport";
import Wallet from "./pages/Wallet/Wallet";
import Claim from "./pages/Claim/Claim";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "setting",
    element: <Setting/>
  },
  {
    path: "helpAndSupport",
    element: <HelpAndSupport/>
  },
  {
    path: "wallet",
    element: <Wallet/>
  },
  {
    path: "claim",
    element: <Claim/>
  }
  
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
