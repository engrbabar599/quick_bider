import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
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
import MyBids from "./pages/My Bids/MyBids";
import { MyBidsPage } from "./pages/MyBids/index";
import { BidsDetailsPage } from "./pages/Dashboard/BidDetailsPage";
import { useEffect } from "react";
import { BidDetailsSection } from "./pages/MyBids/BidDetailsSection";
import { AdsPage } from "./pages/Ads";
import BidResult from "./pages/My Bids/BidResult";
import InvestmentCompleted from "./pages/Investment/InvestmentCompleted";
import LandingPage from "./pages/Landing Page/LandingPage";

export const Layout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "results",
            element: <BidResult />,
          },
        ]
      },
      {
        path: "/dashboard/bids",
        element: <BidsDetailsPage />
      },
      {
        path: "/auction",
        element: <AuctionPage />
      },
      {
        path: "/mybids",
        children: [
          {
            path: "",
            element: <MyBids />
          },
          {
            path: "bidDetails",
            element: <BidDetailsSection />
          },
        ]
      },
      // {
      //   path: "/mybids/bidDetails",
      // },
      // {
      //   path: "/mybids/bidDetails",
      //   element: <BidDetailsSection />
      // },

      {
        path: "/investments",
        children: [{
          path: "beproject",
          element: <InvestmentCompleted />
        },
        {
          path: "",
          element: <Investment />
        }]
      },
      {
        path: "/investments/investmentCompleted",
        element: <InvestmentCompleted />
      },
      {
        path: "/ads",
        element: <AdsPage />
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
    ]
  },
  {
    path: "landingpage",
    element: <LandingPage />
  },
  // {
  //   path: "bidResult",
  //   element: <BidResult />
  // }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
