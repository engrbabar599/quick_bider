import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/OnBoarding/Login';
import Setting from "./pages/Account Settings/Setting";
import HelpAndSupport from "./pages/Help and Support/HelpAndSupport";
import Wallet from "./pages/Wallet/Wallet";
import Claim from "./pages/Claim/Claim";
import Investment from "./pages/Investment/Investment";
import BEProject from "./pages/Investment/BEProject";
import { SignUp } from "./pages/OnBoarding/SignUp";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { DropdownSidebar } from "./components/DropdownSidebar";
import { AuctionPage } from "./pages/Auction";
import { MyBidsPage } from "./pages/MyBids";
import MyBids from "./pages/My Bids/MyBids";


export const Layout = () => {
  return (
    <div className='xl:grid xl:grid-cols-6 w-full flex'>
      <Sidebar />
      <div className='w-full xl:col-span-5 xl:px-4 xl:py-6 p-4 gap-2 flex flex-col '>
        <Navbar />
        <DropdownSidebar />
        <main className="w-full xl:p-4 "> {/* Adjust padding as necessary */}
          <Outlet />
        </main>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/auction",
        element: <AuctionPage />
      },
      {
        path: "mybids",
        element: <MyBidsPage />
        // element: <MyBids/>
      },
      {
        path: "/investments",
        element: <Investment />
      },
      {
        path: "/wallet",
        element: <Wallet />
      },
      {
        path: "/helpAndSupport",
        element: <HelpAndSupport />
      },
      {
        path: "/settings",
        element: <Setting />
      },
      {
        path: "/claim",
        element: <Claim />
      },
      {
        path: "/BEProject",
        element: <BEProject />
      },
     
    ]
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
