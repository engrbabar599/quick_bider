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
import { SignUp } from "./pages/OnBoarding/SignUp";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { DropdownSidebar } from "./components/DropdownSidebar";
import { AuctionPage } from "./pages/Auction";
import MyBids from "./pages/My Bids/MyBids";
import { BidsDetailsPage } from "./pages/Dashboard/BidDetailsPage";
import { useEffect } from "react";
import { BidDetailsSection } from "./pages/MyBids/BidDetailsSection";
import { AdsPage } from "./pages/Ads";
import BidResult from "./pages/My Bids/BidResult";
import InvestmentCompleted from "./pages/Investment/InvestmentCompleted";
import LandingPage from "./pages/Landing Page/LandingPage";
import BEProject from "./pages/Investment/BEProject";
import ReactionsPopUp from "./pages/Dashboard/ReactionsPopUp";
import Allreviews from "./pages/Investment/Allreviews";
import Allinvesters from "./pages/Investment/Allinvesters";
import ReactGA from 'react-ga4';
import { AboutUsPage } from "./pages/AboutUs";
import { ContactUsPage } from "./pages/ContactUs";

export const Layout = () => {
  ReactGA.initialize('G-76HVWTY453');
  const { pathname } = useLocation()

  useEffect(() => {
    console.log(window.location.pathname)
    console.log("Inside Effect")
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, [window.location.pathname]);

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/about",
    element: <AboutUsPage />
  },
  {
    path: "/contact",
    element: <ContactUsPage />
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
          {
            path: "bids",
            element: <BidsDetailsPage />
          },
          {
            path: "reaction",
            element: <ReactionsPopUp />
          },

        ]
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
      {
        path: "/investments",
        children: [
          {
            path: "",
            element: <Investment />
          },
          {
            path: "beproject",
            element: <BEProject />
          },
          {
            path: "investmentCompleted",
            element: <InvestmentCompleted />
          },
          {
            path: "allreviews",
            element: <Allreviews />
          },
          {
            path: "allinvesters",
            element: <Allinvesters />
          },
        ]
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
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
