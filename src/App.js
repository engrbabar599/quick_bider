import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Login } from 'pages/Auth/Login/index';
import { SignUp } from "pages/Auth/Signup/index";

import LandingPage from "pages/LandingPages/Home";
import { AboutUsPage } from "pages/LandingPages/AboutUs";
import { ContactUsPage } from "pages/LandingPages/ContactUs";
import { RequireAuth } from "components/Auth/RequireAuth";
import { Dashboard } from "pages/DashboardPages/Dashboard/index";
import HelpAndSupport from "pages/DashboardPages/Help and Support";
import Wallet from "pages/DashboardPages/Wallet/index";
import Claim from "pages/DashboardPages/Claim/Claim";
import Investment from "pages/DashboardPages/Investment";
import { AuctionPage } from "pages/DashboardPages/Auction";
import MyBids from "pages/DashboardPages/My Bids";
import { BidsDetailsPage } from "pages/DashboardPages/Dashboard/BidDetailsPage";
import { BidDetailsSection } from "pages/DashboardPages/My Bids/Elements/BidDetailsSection";
import { AdsPage } from "pages/DashboardPages/Ads";
import BidResult from "pages/DashboardPages/My Bids/Elements/BidResult";
import ProjectDetails from "pages/DashboardPages/Investment/ProjectDetails";
import Allreviews from "pages/DashboardPages/Investment/Allreviews";
import Setting from "pages/DashboardPages/Settings/index";
import PortfolioPage from "pages/DashboardPages/Investment/Portfolio";
import AllInvestors from "pages/DashboardPages/Investment/AllInvesters";
import CompletedInvestmentPage from "pages/DashboardPages/Investment/CompletedInvestmentPage";
import AllReviewsPage from "pages/DashboardPages/AllReviewsPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/about", element: <AboutUsPage /> },
  { path: "/contact", element: <ContactUsPage /> },
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      { path: "/auction", element: <AuctionPage /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/results", element: <BidResult /> },
      { path: "/dashboard/bids", element: <BidsDetailsPage /> },

      { path: "/my-bids", element: <MyBids /> },
      { path: "/my-bids/bid-details", element: <BidDetailsSection /> },
      { path: "/:name/all-reviews", element: <AllReviewsPage /> },

      { path: "/investments", element: <Investment /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/investments/project-details", element: <ProjectDetails /> },
      { path: "/investments/investment-completed", element: <CompletedInvestmentPage /> },
      // { path: "/investments/all-reviews", element: <Allreviews /> },
      { path: "/investments/all-investors", element: <AllInvestors /> },

      { path: "/ads", element: <AdsPage /> },
      { path: "/claim", element: <Claim /> },
      { path: "/wallet", element: <Wallet /> },
      { path: "/help-support", element: <HelpAndSupport /> },
      { path: "/settings", element: <Setting /> },
    ]
  },

  {
    path: "/*",
    element: <Navigate to="/" replace={true} />,
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
